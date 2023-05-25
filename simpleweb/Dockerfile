# Specify a base image and working directory
# `alphie` tag means this is the minimal-as-possible image 
FROM node:14-alpine
WORKDIR /usr/app

# Install dependencies
# COPY instruction to COPY <local path> inside container. `COPY <local-path> <container-path>`
COPY ./pakcage.json ./
RUN npm install
# make `COPY` after `RUN` so contain image don't have to reinstall npm when changing the index.js 
COPY ./ ./

# Default cmd
CMD ["npm", "start"]