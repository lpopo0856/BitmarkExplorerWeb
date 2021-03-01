FROM node

WORKDIR /tmp/bitmarkexplorerweb

COPY . /tmp/bitmarkexplorerweb
RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
