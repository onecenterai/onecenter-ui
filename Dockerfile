# build environment
FROM node:20.8.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force
COPY . ./

# set env
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN echo 'VITE_API_URL = '$VITE_API_URL > .env.production

# run build
RUN npm run build


# production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/di /usr/share/nginx/html
# # new
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
CMD ["npm", "run", "preview;"]