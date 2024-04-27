import RPi.GPIO as GPIO
import time
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/light')
def light_control():
    operation = request.args.get('operation')
    print(operation)
    redPin = 11
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(redPin, GPIO.OUT)
    if operation == "0":
        ledStatus = False
    elif operation == "1":
        ledStatus = True
    try:
        GPIO.output(redPin, ledStatus)
    except KeyboardInterrupt:
        print("Stop")
    return "OK", 200

@app.route('/water')
def water_control():
    import RPi.GPIO as GPIO
    import time
    channel = 22
    GPIO.setmode(GPIO.BCM)
    time.sleep(1)
    GPIO.setup(channel,GPIO.OUT)
    GPIO.output(channel,GPIO.HIGH)
    time.sleep(2)
    GPIO.output(channel,GPIO.LOW)
    return "OK", 200

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5020)