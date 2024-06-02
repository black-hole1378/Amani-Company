FROM node:20.12.2

WORKDIR /app

EXPOSE 6000

COPY *.json /app/

RUN npm install -g npm@10.7.0

RUN npm install

COPY . /app/

RUN npm run build

CMD [ "npm", "run", "develop" ]
