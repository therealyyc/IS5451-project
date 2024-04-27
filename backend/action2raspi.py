import requests

BASE_URL = "http://172.20.10.9:5020/"
def light_action(status):
    url = BASE_URL + 'light?' + 'operation={}'.format(status)
    requests.get(url)
    return True
    
def water_action():
    url = BASE_URL + 'water'
    print(url)
    requests.get(url)
    return True