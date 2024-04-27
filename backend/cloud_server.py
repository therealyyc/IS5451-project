from flask import Flask
from flask import request
from flask import jsonify
from werkzeug.utils import secure_filename
from data_operator import insert_environment_data, get_plant_env_data, get_plant_env_line_data, update_plant_condition, get_plant_condition
import os
from recognition import get_plant_condition
from get_cluster import get_humidity_cluster, get_light_cluster
from action2raspi import light_action, water_action
from PIL import Image
import base64
from io import BytesIO

app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello World'

@app.route('/putNewData')
def putEnvironmentData():
   plantID = request.args.get('plantID')
   humidity = request.args.get('humidity')
   temperature = request.args.get('temperature')
   pressure = request.args.get('pressure')
   light = request.args.get('light')
   timestamp = request.args.get('timestamp')
   insert_environment_data(plantID, temperature, humidity, pressure, light, timestamp)
   result = get_light_cluster(light)
   if result == 'on':
      light_action(0)
   else:
      light_action(1)
   return f"Environment Information: H:{humidity}, T:{temperature}, P:{pressure}, L:{light}", 200
 
@app.route('/uploadImage', methods=['POST'])
def upload_file():
   if 'file' not in request.files:
      return 'No file', 400
   file = request.files['file']
   if file.filename == '':
      return 'No selected file', 400
   if file:
      filename = secure_filename(file.filename)
      file.save(os.path.join('data/image', filename))
      result = get_plant_condition(os.path.join('data/image', filename))
      update_plant_condition(result)
      return result, 200
   

@app.route('/getLightCondition')
def get_light_condition():
   light = request.args.get('light')
   result = get_light_cluster(light)
   return result, 200


@app.route('/getHumidityCondition')
def get_humidity_condition():
   humidity = request.args.get('humidity')
   result = get_humidity_cluster(humidity)
   return result, 200  

@app.route('/api/plants/<plantID>/conditions')
def get_plant_conditions(plantID):
   response = get_plant_env_data(plantID)
   result = {
      "plantId": 1,
      "humidity": response[1],
      "temperature": response[0],
      "lightLevel": response[3],
      "atmosphericPressure": response[2]
   }
   return jsonify(result), 200

@app.route('/api/plants')
def get_all_plants():
   # result = get_plant_condition(1)
   result = [
      {
         "plantId": 1,
         "plantName": "Fern",
         "plantStatus": "NORMAL"
      },
      {
         "plantId": 2,
         "plantName": "Bamboo",
         "plantStatus": "MAINTAIN"
      },
      {
         "plantId": 3,
         "plantName": "Cactus",
         "plantStatus": "DANGEROUS"
      }
   ]
   return jsonify(result), 200


# action 总共这三个值 water light
# localhost:5010/api/plants/<plantId>/action?action=water
@app.route('/api/plants/<plantId>/action/<action>')
def take_action(plantId, action):
   if action == 'light':
      light_action(1)
   if action == 'humidity':
      water_action()
   result = action + " has been done..."
   return result, 200

# 总共这三个值 dataType humidity temperature light
#/api/plants/{plantId}/environmental-data/line-chart/{dataType}
@app.route('/api/plants/<plantId>/environmental-data/line-chart/<dataType>')
def get_chart_data(plantId, dataType):
   response, cat = get_plant_env_line_data(plantId, dataType)
   result = {
      "value":
         [{
            "name": dataType,
            "data": response
         }],
      "categories": cat,

   }
   return jsonify(result), 200

#/api/plants/{plantId}/environmental-data/pie-chart
@app.route('/api/plants/<plantId>/environmental-data/pie-chart')
def get_pie_data(plantId):
   response = get_plant_env_data(plantId)
   result = [
      {
         "type": "humidity",
         "standardData": 27,
         "currentData": response[1],
      },
      {
         "type": "light",
         "standardData": 27,
         "currentData": response[3],
      },
      {
         "type": "temperature",
         "standardData": 27,
         "currentData": response[0],
      }
   ]
   return jsonify(result), 200



@app.route('/api/plants/getImage')
def get_image():
   image_path = 'data/image/photo_plant.jpg'

   image = Image.open(image_path)

   buffered = BytesIO()
   image.save(buffered, format="JPEG")

   img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
   result = {'image': img_str}
   return jsonify(result), 200
   
   

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5010)
   