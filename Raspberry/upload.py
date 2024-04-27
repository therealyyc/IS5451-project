import requests
from time import sleep

def upload_image(image_path):
    url = 'http://172.20.10.4:5010/uploadImage'
    files = {'file': open(image_path, 'rb')}
    response = requests.post(url, files=files)
    print(response.text)


upload_image("/home/pi/Documents/Project/photo_plant.jpg")