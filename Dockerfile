# Use an exiting docker image as a base 
FROM alpine

# download and install the dependency
RUN apk add --update redis

# startup command 
CMD ["redis-server"]

