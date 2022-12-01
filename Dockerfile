FROM node:18

WORKDIR /usr/src/app

COPY ./src/ ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

CMD [ "node", "index.js" ]