FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npx", "serve", "-s", "build", "-l", "8080"]

