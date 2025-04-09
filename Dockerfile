#FROM node:18-alpine
FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /app

COPY package.json .
#COPY handler.js .
COPY handler.mjs .
COPY local-server.js .

RUN npm install

EXPOSE 3000

#CMD ["npm", "start"]
CMD ["handler.handler"]