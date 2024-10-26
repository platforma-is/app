
FROM node:21 AS platforma-frontend-base

WORKDIR /platforma-frontend
COPY . /platforma-frontend

RUN npm install --legacy-peer-deps

FROM platforma-frontend-base AS platforma-frontend-build

RUN npm run build

COPY . .

FROM platforma-frontend-build AS platforma-frontend-run

EXPOSE 3000

CMD [ "npm", "run", "start" ]
