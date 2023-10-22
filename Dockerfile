FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

# set env
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN echo 'VITE_API_URL = '$VITE_API_URL > .env.production


EXPOSE 80

CMD [ "npm", "run", "dev" ]