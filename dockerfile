FROM node:10.10

WORKDIR /usr/src/boilerplate

COPY package.json ./

RUN npm install

COPY . .
EXPOSE 3344
CMD [ "npm", "start" ]