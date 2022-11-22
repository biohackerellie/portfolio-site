# ======CONFIGURE=====
#Use a node 16 base image
FROM node:16 AS builder
#AS development

#Create app directory inside the container
WORKDIR /app

#cache dependencies
COPY package*.json ./

RUN npm install --production

# Bundle app source
COPY . . 


RUN npm build


FROM nginx:1.21.6 as production
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.confg /etc/nginx/conf.d/default.conf


# Expose port
EXPOSE 3000

# Start the app
CMD ["nginx", "-g", "daemon off;" ]