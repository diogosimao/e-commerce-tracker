FROM node

VOLUME ["/dist"]
VOLUME ["/src"]

WORKDIR /tmp
ADD package.json /tmp/
RUN npm config set registry https://registry.npmjs.org/

RUN npm install --quiet

RUN npm install --quiet -g gulp

RUN rm package.json

RUN cp -a /tmp/node_modules /

WORKDIR /

ADD gulpfile.js .

CMD ["gulp"]