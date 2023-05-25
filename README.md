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
    - base image `FROM` instructions to specify a basic OS
    - install programs `RUN` instructions to use some setup in that OS to do sth
    - startup commmand `CMD` instructions to do your business
    - `-t` to tag, <dockerID(ultraspicy)>/<project-name>:version, sample command `docker build -t <tag> .

  - COPY insturction
  - port forwarding, this is something we specify when running the container `docker run -p <local-port>:<contatiner-port> <image-name/id>`
  - specify working directory  `WORKDIR <path>`

  - one docker instance just host one single service. Node app and redis should reside in different containers  