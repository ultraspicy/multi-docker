FROM node:alpine as builder

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
# NOo volume cuz w dont change production on the fly

# /app/build will feed into nginx
RUN npm run build


# use nginx
FROM nginx
EXPOSE 3000
COPY  ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html