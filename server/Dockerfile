FROM node:alpine


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 1111
CMD [ "npm", "run","start" ]

#Commands for cmd
# docker run -d --name express-container -p 7777:7777 express-app
# docker build -t express-app:1.1 .
# docker run -v C:\Users\srdsh\OneDrive\Desktop\Sharad\Study\GIT_PRACTISE_NEW\server:\usr\app -v \usr\app\node_modules --name express-container -it -p 7777:7777 express-app 