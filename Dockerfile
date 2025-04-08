FROM node:18

WORKDIR /app

COPY package.json .
COPY handler.js .
COPY local-server.js .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]