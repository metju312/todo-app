FROM node:carbon

WORKDIR /app

COPY . .

ENV APP_PORT=8889

RUN yarn

CMD yarn start

EXPOSE 8889
