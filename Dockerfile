FROM node:18-alpine

WORKDIR /user/src/app

COPY . .

RUN npm ci

EXPOSE 3000

USER node

CMD ["npm", "start"]