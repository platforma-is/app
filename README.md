# Installation

Copy `.env.example` to `.env` and fill in the values.

Install dependencies and initialize database:

```
npm install

# [optional] only for local db: docker-compose up -d

# init database
npx prisma migrate dev --name init
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
