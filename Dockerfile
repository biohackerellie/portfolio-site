#Build step
FROM node:19 AS build
ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL=error
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . . 
RUN npm run build --force

#Deploy step
FROM busybox:1.35 as deploy
WORKDIR /app
COPY --from=build /app/build/ ./

EXPOSE 3000

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]