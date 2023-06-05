FROM node:16-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
# the package.json file has defined the start command
CMD ["npm", "run", "start "]