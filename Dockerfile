FROM node:14.16.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/nuxt-app/
RUN npm install && npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD npm start

EXPOSE 3000