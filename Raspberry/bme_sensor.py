import board
from adafruit_bme280 import basic as adafruit_bme280
import time


i2c = board.I2C()  # uses board.SCL and board.SDA
bme280 = adafruit_bme280.Adafruit_BME280_I2C(i2c)

try:
    while True:
        print("\nTemperature: %0.1f C" % bme280.temperature)
        print("Humidity: %0.1f %%" % bme280.humidity)
        print("Pressure: %0.1f hPa" % bme280.pressure)
        
        time.sleep(1)
        
except KeyboardInterrupt:
    print("Program Stopping")

finally:
    pass