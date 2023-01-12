# ======CONFIGURE=====
#Use a node 16 base image
FROM node:19 AS build
ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL=error
#AS development

#Create app directory inside the container
WORKDIR /app

#cache dependencies
COPY package*.json ./

RUN npm install --force

# Bundle app source
COPY . . 


RUN npm run build --force


FROM busybox:1.35 as deploy


WORKDIR /app

COPY --from=build /app/build/ ./

EXPOSE 3000

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]