FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install -y
COPY . .
EXPOSE 3000
# CMD [ "npm", "start" ]
RUN npm start -y