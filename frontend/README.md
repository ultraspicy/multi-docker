## Frontend Web App

### Introduction
This application is a demonstration of 
 - setting up two docker-compose files, one for development purpose, one for production which use `node` and `nginx` as base images.
 - `docker-compose-dev.yml` does two things 
    - it starts the web service at localhost:3000
    - it spins up another container from the same image and runs tests. This is a convenient way to start service and run test by using a single commmand 
 - `docker-compose.yml` this file is not used anywhere else in this project.
 - `Dockerfile` uses two base images to build a production-ready image.
 - `.travis.yml` is the config file for CI/CD. 

 ### How to run 
  - To run locally `docker-compose -f docker-compose-dev.yml up`
  - Every commit will trigger a CI/CD pipeline, and change will be automatically deployed to AWS benstalk.
