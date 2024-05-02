FROM node:21.6.2

ENV NODE_ENV=production

WORKDIR /app

COPY package.json /app
COPY tsconfig.json /app
COPY webpack.common.ts /app
COPY webpack.prod.ts /app
COPY ./src /app/src

#RUN dir

RUN npm install

ENV PORT=3000

RUN npm run build




