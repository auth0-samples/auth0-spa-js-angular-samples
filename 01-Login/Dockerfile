FROM node:10-alpine AS build

RUN apk update && apk add git

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# -----------------

FROM node:10-alpine

RUN mkdir -p /app

WORKDIR /app

COPY --from=build ./app/dist/login-demo .

RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", "-p", "3000"]