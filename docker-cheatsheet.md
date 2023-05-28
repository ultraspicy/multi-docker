# Docker cheatsheet
 - `docker run` = `docker create` + `docker start`. `docker run <image> <customized-command>`
 - `docker logs` to redirect all existing logs to std out
 - `docker stop` or `docker kill` to stop a container
    - stop issues a SIGTERM message to the container with clean up
    - kil issues a SIGKILL, shutdown right now without any cleanup
 - `docker exec -it <container-id> <customized-command>`
     - `exec` run another command, such as `redis-cli` or `sh`
     - `-it` allow us to provide input interactively in terminal
     - combine both can let us run a command and then interact with the terminal inside docker

```
Every process in Linux (the docker environment) has STDIN, STDOUT, STDERR channels, `-it` are `-i` + `-t`. `-i` attach our terminal to STDIN channel of that process, `t` is to  allocate a pseudo-terminal (TTY) for an interactive session within a Docker container. 
```

  - To open a shell, run `docker exec -it <ID> sh`. `Ctrl + D` to quit, not `Ctrl + C`
  - use dockerfile to create a customized image
    - base image: `FROM` instructions to specify a basic OS
    - install programs: `RUN` instructions to do some setup 
    - startup commmand: `CMD` instructions to run your application
    - in `docker build` command, use `-t` to tag, `<dockerID(ultraspicy)>/<project-name>:version`, sample command 
    ```
    docker build -t ultraspicy/test:1.0.0`.
    ```

  - COPY insturction to copy file to docker's `WORKDIR`
  - port forwarding, this is something we specify when running the container `docker run -p <local-port>:<contatiner-port> <image-name/id>`. Also port forwarding only applies to run-time, so it cannot be specified in Dockerfile
  - specify working directory  `WORKDIR <path>`

  - one docker instance just host one single service. For example, in `visits` app, Node app and redis should reside in different containers  
  - multi-step build phase to use 2+ base image, like node + nginx
 
 # Docker-compose cheatsheet
 introducing docker-compose to work with multiple containers at the same time 
  - `docker-compose up` to start all containers
  - `docker-compose up --build` to rebuild the images and start all containers 
  - `docker-compose down` to stop all containers
  - `docker-compose ps` print all container of `docker-compose.yml` file in the same direcotry
  - to deal with container crash, use `restart` policy (no, always, on-failure, unless-stopped)
  - `Dockerfile.dev` is for developement purpose, while `Dockerfile` is for production 
    - to use `Dockerfile.dev` `docker build -f <filename> .`

 - docker volume, set up a reference on the local machine. Sample command would be 
 ```
 docekr run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image-id>
 ```
  -  Without colon, `/app/node_modules` is a placeholder that won't be replaced or overwritten in container
 - docker-compose can simplify the above command, see `./frontend/docker-compose-dev.yml`
 - override default start command to run the test of a container, like before, `docker run <id> <commadn to run>`, a concrete example would be `docker run -it a781ec npm run test`. When changing the startup command, a new container will be created