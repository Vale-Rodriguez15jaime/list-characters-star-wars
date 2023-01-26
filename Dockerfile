FROM node:16.17 as build

WORKDIR /app

COPY package*.json .


RUN npm install


COPY . .

RUN npm run build

FROM node:16.17

WORKDIR /app

COPY --from=build /app/build /app/build

COPY server.js .

RUN npm init -y
RUN npm i express
RUN npm i pm2 -g

CMD ["pm2-runtime", "/app/server.js"]

