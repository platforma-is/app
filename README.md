# Installation

Copy `.env.example` to `.env` and fill in the values.

Install dependencies and initialize database:

```
npm install
docker-compose up -d # start database
npx prisma migrate dev --name init # init database
```

Start the server:

```
npm run dev
```

# Work with data

```
npx prisma studio
```

# Deploy

https://dev.to/markusmp/step-by-step-guide-deploying-a-nextjs-app-on-a-vps-4iaj
