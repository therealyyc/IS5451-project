#!/bin/bash


while true
do
  libcamera-jpeg -o photo_plant.jpg --width 512 --height 512
  # python /home/pi/Documents/Project/upload.py
  sleep 10
done
