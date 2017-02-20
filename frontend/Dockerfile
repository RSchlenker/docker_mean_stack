FROM node:latest

RUN mkdir -p /opt/frontend/
WORKDIR /opt/frontend/

COPY . /opt/frontend/

RUN npm install -g nodemon
RUN npm install -g bower
RUN bower install --allow-root

EXPOSE 80
CMD [ "nodemon", "frontend.js"]
