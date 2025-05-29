FROM node:latest

WORKDIR /app

COPY ./package*.json ./

RUN npm install && npm install react-router && npm install @emailjs/browser

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
