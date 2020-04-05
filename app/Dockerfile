FROM node:dubnium
WORKDIR /opt/app
COPY ./src/package.json /opt/app/src/package.json

RUN cd src && npm install
COPY . .
CMD ["./docker-entrypoint.sh"]


