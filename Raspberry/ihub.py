import time
import random

import serial
import RPi.GPIO as GPIO

import sqlite3
import requests
import json

import paho.mqtt.client as mqtt

import _thread as thread

import board
from adafruit_bme280 import basic as adafruit_bme280
import time


def sendCommand(command):
        
    command = command + '\n'
    ser.write(str.encode(command))



def waitResponse():
    
    response = ser.readline()
    response = response.decode('utf-8').strip()
    
    return response



def saveData(devicename, temperature, humidity, pressure, light):
    
    conn = sqlite3.connect('env.db')
    c = conn.cursor()
    sql = "INSERT INTO environment (devicename, temperature, humidity, pressure, light, timestamp) VALUES('{}', '{}', '{}', '{}', '{}', datetime('now', 'localtime'))".format(devicename, temperature, humidity, pressure, light)
    c.execute(sql)
    conn.commit()
    conn.close()



def rhub():
        
    global ser
    ser = serial.Serial(port='/dev/ttyACM0', baudrate=115200, timeout=1)
    print('rhub: Listening on /dev/ttyACM0... Press CTRL+C to exit')
    
    # Handshaking
    sendCommand('handshake')
    
    strMicrobitDevices = ''
    
    while strMicrobitDevices == None or len(strMicrobitDevices) <= 0:
        
        strMicrobitDevices = waitResponse()        
        
        print('rhub handshake: ' + strMicrobitDevices)
        
        time.sleep(0.1)
    
    strMicrobitDevices = strMicrobitDevices.split('=')
    
    if len(strMicrobitDevices[1]) > 0:

        listMicrobitDevices = strMicrobitDevices[1].split(',')
        
        if len(listMicrobitDevices) > 0:
                
            for mb in listMicrobitDevices:
            
                print('rhub: Connected to micro:bit device {}...'.format(mb))
            
            while True:
                
                time.sleep(1)                    
                
                commandToTx = 'sensor=light'                
                sendCommand('cmd:' + commandToTx)                    
                
                if commandToTx.startswith('sensor='):
                    
                    strSensorValues = ''

                    while strSensorValues == None or len(strSensorValues) <= 0:
                        
                        strSensorValues = waitResponse()
                        time.sleep(0.1)

                    listSensorValues = strSensorValues.split(',')
                    i2c = board.I2C()
                    bme280 = adafruit_bme280.Adafruit_BME280_I2C(i2c)
                    for sensorValue in listSensorValues:
                        temp = bme280.temperature
                        humid = bme280.humidity
                        pressure = bme280.pressure
                        print("\nTemperature: %0.1f C" % temp)
                        print("Humidity: %0.1f %%" % humid)
                        print("Pressure: %0.1f Pa" % pressure)
                        print('rhub: {}'.format(sensorValue))
                    sensorInfo = sensorValue.split('=')
                    saveData(sensorInfo[0], temp, humid, pressure, sensorInfo[1])



def cloudrelay():
    
    conn = sqlite3.connect('env.db')
    
    base_uri = 'http://172.20.10.4:5010/'
    globallight_uri = base_uri + 'putNewData'
    
    while True:
    
        time.sleep(10)
        
        print('Relaying data to cloud server...')
                
        c = conn.cursor()
        c.execute('SELECT id, devicename, temperature, humidity, pressure, light, timestamp FROM environment WHERE tocloud = 0')
        results = c.fetchall()
        c = conn.cursor()
                
        for result in results:        
            print('Relaying id={}; devicename={}; temperature={}; humidity={}; pressure={}; light={}; timestamp={}'.format(result[0], result[1], result[2], result[3], result[4], result[5], result[6]))
            header = "?plantID=1&temperature={}&humidity={}&pressure={}&light={}&timestamp={}".format(result[2], result[3], result[4], result[5], result[6])
            requests.get(globallight_uri+header)
            c.execute('UPDATE environment SET tocloud = 1 WHERE id = ' + str(result[0]))
        conn.commit()

def main():
    
    thread.start_new_thread(rhub, ())
    thread.start_new_thread(cloudrelay, ())
    print('Program running... Press CTRL+C to exit') 
    while True:
        try:                                 
            time.sleep(0.1)
        except RuntimeError as error:
            print('Error: {}'.format(error.args[0]))
        except Exception as error:
            print('Error: {}'.format(error.args[0]))  
        except KeyboardInterrupt:                  
            if ser.is_open:
            
                ser.close()                           
            GPIO.cleanup()
            print('Program terminating...')    
            break
    print('Program exited...')

if __name__ == '__main__':
    main()
