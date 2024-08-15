FROM node:22.6.0-alpine AS build
ARG API_BASE_URL="http://localhost:8888/api"

WORKDIR /usr/src/app
COPY index.html ./
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
COPY vite*.ts ./
RUN echo $API_BASE_URL
RUN yarn install 
COPY src/ ./src/
COPY public/ ./public/
RUN yarn build

# multi stage build
FROM nginx:latest
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
ENV API_BASE_URL=$(API_BASE_URL)
EXPOSE 80