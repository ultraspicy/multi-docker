# Specify a base image and working directory
# `alphie` tag means this is the minimal-as-possible image 
FROM node:14-alpine
WORKDIR /usr/app

# Install dependencies
# COPY instruction to COPY <local path> inside container. `COPY <local-path> <container-path>`
COPY ./ ./
RUN npm install

# Default cmd
CMD ["npm", "start"]