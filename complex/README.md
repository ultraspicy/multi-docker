# Complex 

## Introduction
A project computes Fibnacci number and store the result in Postgres database.
The modules are 
 - server, an express server setting up its connections with postgres client and redis client. It also defines the route handler and listen to port 5000. It acts as the backend.
  - client, defines the frontend off the app acting like the frontend
  - worker, the actual computation of Fib number then write that value into redis
  - server and client communicate through the routes defined by nginx(`/api` to express sever, `/` tp react frontend)

## How to run locally
 - `docker-compose up` and then open `http://localhost:3050/`

## How to deploy this multi-docker app in AWS

## CI/CD Flow
 - Push code to github
 - Travis automatically pulls repo
 - Travis builds a test image, tests code
 - Travis build prod images
 - Travis pushes built prod images to Docker hub 
 - Travis pushes message about a new project image to AWS EB
 - EB pulls images from Docker hub, deploys