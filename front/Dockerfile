FROM node:20.12.2

WORKDIR /app

EXPOSE 3000

COPY *.json /app/

RUN npm install

COPY . /app/

RUN npm run build

CMD [ "npm", "run", "dev" ]
