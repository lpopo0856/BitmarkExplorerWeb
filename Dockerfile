FROM node

WORKDIR /tmp/bitmarkexplorerweb

COPY . /tmp/bitmarkexplorerweb
RUN npm install

EXPOSE 8080
CMD npm run serve
