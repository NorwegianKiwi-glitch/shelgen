# shelgen2
Personelig nettside som digital CV

## tailwind setup
Install TailwindCSS``npm install tailwindcss @tailwindcss/postcss postcss``

Start Tailwind CLI build process ``npm install tailwindcss @tailwindcss/cli`` 


## Webserver setup
``npm init -y``

``npm install express --save``

### Run webserver
simple run, stops when terminal is closed ``node server.js``

too keep the server running when closing terminal I use PM2

To run ``pm2 start server.js``

Auto start on boot ``pm2 startup systemd``

save your current PM2 process list ``pm2 save``
