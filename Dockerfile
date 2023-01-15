FROM node:18-alpine

WORKDIR /user/src/app

COPY ./package.json ./package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]