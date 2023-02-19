# Installing dependencies:

FROM node:18-alpine AS install-dependencies

WORKDIR /user/src/app

RUN npm install -g npm@9.5.0

COPY package.json package-lock.json ./

RUN npm ci

COPY . .


# Creating a build:

FROM node:18-alpine AS create-build

WORKDIR /user/src/app

RUN npm install -g npm@9.5.0

COPY --from=install-dependencies /user/src/app ./

RUN npm run build

USER node


# Running the application:

FROM node:18-alpine AS run

WORKDIR /user/src/app

RUN npm install -g npm@9.5.0

COPY --from=install-dependencies /user/src/app/node_modules ./node_modules
COPY --from=create-build /user/src/app/dist ./dist
COPY package.json ./

RUN npm prune --production

CMD ["npm", "run", "start:prod"]