FROM node:alpine

WORKDIR /app

COPY package.json .

RUN yarn install --production

COPY . .

RUN yarn build
RUN yarn prisma migrate deploy

EXPOSE 3333

CMD [ "yarn", "start" ]
