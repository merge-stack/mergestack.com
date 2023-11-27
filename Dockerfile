FROM node:16.15.0

#Install some dependencies

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

# Set up a default command
CMD [ "npm","start" ]
