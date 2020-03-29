# Lockdown

A web application that shows various lockdown states for countries across the world helping people to find out if they can travel and at what restrictions. It uses preact, a dependency similar to react. 

Required Components: Node Version 10.0

```bash
# install dependencies
npm install

# start for local development
npm run start

# build for production with minification
npm run build

# test the production build locally
npm run start:build
```
# For guides on preact 
 Look at the guide for more info in running the app
 https://preactjs.com/guide/

 Similar to React JS syntax
 https://reactjs.org/

 Familiar with ECMAS6 Syntax:
 1. http://www.ecma-international.org/ecma-262/6.0/


# Node.js
 Download Node.js if not on 
 machine. Minimum version required: v10 
 https://nodejs.org/en/
 Nodejs documentation
 https://nodejs.org/en/docs/

# Nginx
NginX is used on this project. 
For utilization of NginX in this project, one familiarize themselves with the mechanics of NginX.
http://nginx.org/en/docs/
It is important for people to note how NginX unit tests are conducted.
To change the configuration of the NginX, control the signals using Nginx. 
http://nginx.org/en/docs/control.html
To check out the unit tests for Nginx, look here.
https://github.com/nginx

# Docker
Docker is deployed with NGINX and NGINX Plus on Docker.
Nginx is run open source in a docker container. 
# To launch an instance of Nginx running in a container and with the default Nginx configuration, 
$ docker run --name myginx -p: 80:80 -d nginx 
This is a container used for deploying the website. 

