Docker cheatsheet
 - `docker run` = `docker create` + `docker start`. `docker run <image> command `
 - `docker logs` to redirect all existing logs to std out
 - `docker stop` or `docker kill` to stop a container
    - stop issues a SIGTERM message to the container with clean up, kil => SIGKILL, shutdown right now without any cleanup
 - `docker exec -it <container-id> command`
     - `exec` run another command, such as `redis-cli`
     - `-it` allow us to provide input interactively in terminal
     - combine both can let us run a command and then interact with the terminal inside docker

Every process in Linux (the docker environment) has STDIN, STDOUT, STDERR channels, `-it` are `-i` + `-t`. `-i` attach our terminal to STDIN channel of that process, `t` is to beatify the format of output 

  - To open a shell, docker exec -it <ID> sh. `Ctrl + D` to quit, not `Ctrl + C`
  - use dockerfile to create a customized image
    - base image: `FROM` instructions to specify a basic OS
    - install programs: `RUN` instructions to use some setup in that OS to do sth
    - startup commmand: `CMD` instructions to do your business logic
    - `-t` to tag, `<dockerID(ultraspicy)>/<project-name>:version`, sample command `docker build -t ultraspicy/test:1.0.0 .

  - COPY insturction to copy file to docker's WORKDIR
  - port forwarding, this is something we specify when running the container `docker run -p <local-port>:<contatiner-port> <image-name/id>`
  - specify working directory  `WORKDIR <path>`

  - one docker instance just host one single service. Node app and redis should reside in different containers  
 
 Docker-compose cheatsheet
 introducing docker-compose to work with multiple container at the same time
    - `docker-compose up` to start all container
    - `docker-compose up --build` to rebuild the image and start all containers 
    - `docker-compose down` to stop all containers
    - `docker-compose ps` print all container of docker-compose.yml file in the same direcotry
    - to deal with container crash, restart policy (no, always, on-failure, unless-stopped) with `on-failure` key

 - `Dockerfile.dev` is for developement purpose, while `Dockerfile` is for production 
    - to use `Dockerfile.dev` `docker build -f <filename> .`

 - docker volume, set up a reference on the local machine
   - `docekr run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image-id>`. Without colon, `/app/node_modules` is a placeholder that won't be replaced or overwritten in container
 - docker-compose can simplify the above command, see ./frontend/docker-compose.yml
 - override default start command to run the test of a container, like before, `docker run <id> <commadn to run>`, a concrete example would be `docker run -it a781ec npm run test`. When changing the startup command, a new container will be created
  - multi-step build phase to use 2+ base image, like node + nginx