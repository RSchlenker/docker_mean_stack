# MEAN-Stack Starter Application

This is a sample implementation of a mean stack build on docker.

## Build
Currently, the project is configured to use as a development version.
This means, the sub-directories /frontend and /api are mirrored into the respetive container,
therefore, the node applications will react on any code change and apply the changes directly to the running containers.

The only prerequesite is, to install the necessary dependencies in the local directories since they will be mirrored to the containers!
So please run

```
npm install
bower install
```
in the */frontend* directory,

...and
```
npm install
```

in the */api* directory

Afterwards, you can run
```
docker-compose up -d
```
to build and deploy the mean stack.

To test the functionality, check the logs and navigate your browser to *localhost:8765/*

## Known issues
### Angular - API mapping.
Since angular is executed on the client side, it doesn't know the docker-DNS resolves. How to navigate to the api?
- Pipe through nodejs? --> The frontend-nodejs does know the backend
