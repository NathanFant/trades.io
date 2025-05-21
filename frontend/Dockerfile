FROM node:18

WORKDIR /app

COPY ./public/package*.json ./public/vite.config.js ./
RUN npm install

COPY ./public .

CMD ["npm", "run", "dev", "--", "--host"]
