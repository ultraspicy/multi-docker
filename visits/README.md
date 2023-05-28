## Visits App

### Introduction
This application is a demonstration of dockerizing a over simplified node app. The app is implemented in `index.js` which uses a redis docker as its in memory storage.

### Implementation
 - `index.js` implements the counter logic
 - `Dockerfile` containerizes the application by building an image with startup command
 - `docker-compose.yml` use dockerfile and redis image so this tiny application has a in-memory storage
 - `package.json` manages the dependency and version

 ### How to run

 ```
 cd <path-to-multi-docker>/visits
 docker-compose up --build
 ```
 then open browser with `localhost:8081`

### Notes
 - The redis version has to be `2.8.0`. Notice there is some broken change in redis with version 4 or higher that needs some tuning to let node app connect to redis.
