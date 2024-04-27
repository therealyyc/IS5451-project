# Fronted

To run Fronted:
```shell
cd frontend
npm install
npm run dev
```
# Backend
To run backend:
```shell
cd backend
python cloud_server.py
cd backend/cluster
python cluster.py
```

## File Introduction
### Cluster (Dir)
#### cluster.py
Read data from database and train a clustering model using sklearn.
#### plantcluster_humidity.joblib
Model with humidity joblib file.

#### plantcluster_light.joblib
Model with light joblib file.

### Data (Dir)
Store all data of the project: image, database, sql file.

### recognition (Dir)
#### recognition.ipynb
Read Image from a dataset and train a recognition model using Pytorch and Pytorch ResNet50.
#### model_recognition.pth
A trained model saved by Pytorch and will be used to recognize plant's condition.

### action2raspi.py
Light and Water pump action, send http request to raspberry pi to control light and water pump

### cloud_server.py
Cloud server using Flask

### data_operator.py
Database operation function.

### get_cluster.py
Read joblib file to get the cluster number.

### recognition.py
Read pth model file to recognition plant's condition.


# Raspberry Pi
To run raspberry pi:
```shell
cd raspberry
python ihub.py
python light_controller.py
./camera.sh
```

## File Introduction
### camera.sh
Control camera to take photo and get the condition of the plant.

### ihub.py
Collect sensor data and send to Cloud Server.

### light_controller.py
Receive http request to control light and water pump.