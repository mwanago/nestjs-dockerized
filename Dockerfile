FROM node:18-alpine AS install-dependencies

WORKDIR /user/src/app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .


FROM node:18-alpine AS create-build

WORKDIR /user/src/app

COPY --from=install-dependencies /user/src/app ./

RUN npm run build

USER node


FROM node:18-alpine AS release

WORKDIR /user/src/app

COPY --from=install-dependencies /user/src/app/node_modules ./node_modules
COPY --from=create-build /user/src/app/dist ./dist
COPY package.json package-lock.json ./

CMD ["npm", "run", "start:prod"]