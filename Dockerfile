FROM node

WORKDIR /app


ARG DATABASE_URL

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build
RUN yarn prima generate
RUN yarn prisma migrate deploy

EXPOSE 3333

CMD [ "yarn", "start" ]
