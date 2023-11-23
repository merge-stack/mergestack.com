FROM node:16.15.0

#Install some dependencies

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

RUN npm run build

# Set up a default command
CMD [ "npm","start" ]