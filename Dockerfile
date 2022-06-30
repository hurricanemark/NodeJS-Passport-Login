# bootstrap VM image
FROM node:14.17.0

# on the VM, create root directory
WORKDIR /app

# copy file package.json to root directory
COPY package.json .

# install dependencies
RUN npm install

# copy source code to root directory
COPY . .

# set runtime environment variables
ENV NODE_ENV=development

ENV PORT=3322

ENV SESSION_SECRET='blue chip blue chips'

# app port.  Remember to assign forward port to the host machine 
# that is other than 8080
EXPOSE 3322

# run the app
CMD ["npm", "run", "start"]