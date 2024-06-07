FROM node:20.14.0-alpine3.20

WORKDIR /app/
COPY package*.json ./

RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 3002

CMD [ "npm", "start" ]