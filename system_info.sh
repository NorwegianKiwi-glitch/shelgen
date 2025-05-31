#!/bin/bash
echo "Model: $(tr -d '\0' < /proc/device-tree/model)" > /home/simon/Documents/reps/shelgen/public/system_info.txt
echo "OS: $(grep PRETTY_NAME /etc/os-release | cut -d= -f2 | tr -d '\"')" >> /home/simon/Documents/reps/shelgen/public/system_info.txt
echo "Uptime: $(uptime -p)" >> /home/simon/Documents/reps/shelgen/public/system_info.txt
echo "Memory Usage:" >> /home/simon/Documents/reps/shelgen/public/system_info.txt
free -h >> /home/simon/Documents/reps/shelgen/public/system_info.txt
echo "CPU Usage:" >> /home/simon/Documents/reps/shelgen/public/system_info.txt
top -b -n1 | head -n 5 >> /home/simon/Documents/reps/shelgen/public/system_info.txt
