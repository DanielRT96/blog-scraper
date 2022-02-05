FROM node:16.3
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . ./
CMD [ "node", "server.js"]
EXPOSE 3001

