FROM node:18.17.0

#Install some dependencies

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3000

# Set up a default command
CMD [ "yarn","start" ]
