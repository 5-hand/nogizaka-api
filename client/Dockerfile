FROM node:latest

WORKDIR /app/client

COPY package.json /app/client

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start