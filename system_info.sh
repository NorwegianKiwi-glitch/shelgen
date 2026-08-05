#!/bin/bash
echo "Model: $(tr -d '\0' < /proc/device-tree/model)" > /home/simon/Documents/reps/shelgen/public/system_info.txt
echo "OS: $(grep PRETTY_NAME /etc/os-release | cut -d= -f2 | tr -d '\"')" >> /home/simon/Documents/reps/shelgen/public/system_info.txt
