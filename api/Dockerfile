FROM node:boron

RUN mkdir -p /opt/api/
WORKDIR /opt/api/

COPY . /opt/api/

RUN npm install -g nodemon

EXPOSE 8080
CMD [ "nodemon", "api.js"]
