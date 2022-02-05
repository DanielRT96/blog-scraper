FROM node:16.3 AS builder
WORKDIR /app-build
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . ./
RUN npm run build

FROM node:16.3
WORKDIR /app
COPY --from=builder /app-build/build ./build
RUN npm i serve -g
CMD ["serve", "-s", "./build"]
EXPOSE 3000


