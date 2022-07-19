# notification-ui
It is frontend for supervisor notification.

It is assumed that Node.js and Angular CLI is installed.
Please clone notification-ui from github on your computer. 

cd notificatio-ui
npm install
ng serve

This will download all the dependencies and and starts the server. Now you can 
coonect to this server from your browser:

http://localhost:4200/

Before you start GUI make sure notification-server is up. Because frontend 
module will make GET request to the backend server to get supervisors.
