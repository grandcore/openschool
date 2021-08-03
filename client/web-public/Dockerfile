FROM node:14-alpine3.12
# node:16 have problem sass



# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm rebuild node-sass
RUN npm install
RUN npm install framer-motion
RUN npm install @emotion/react
RUN npm install @emotion/styled
RUN npm install @chakra-ui/icons

# Copying source files
COPY . /usr/src/app

# Running the app
CMD "npm" "run" "dev"