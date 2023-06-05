FROM NODE:16-alpine as builder 
WORKDIR '/app'
COPY ./package.json ./
RUN npm install 
COPY . .
RUN npm run build 

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# copy all file from builder image's 'app/build' to the target image
COPY --from=builder /app/build /usr/share/nginx/html