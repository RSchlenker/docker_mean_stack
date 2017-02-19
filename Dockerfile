FROM node:boron

RUN mkdir -p /opt/src/
WORKDIR /opt/src/

COPY . /opt/src/

RUN npm install -g nodemon
RUN npm install -g bower
RUN bower install --allow-root

EXPOSE 80
CMD [ "nodemon", "app.js"]
