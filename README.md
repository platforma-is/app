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


# Structure

```javascript
/app
--- /types & constants

/pages — вот тут инициализация страниц

/features — (умные компоненты) вот тут можно писать фичи. Работа с формами, авторизацией и проч.
--- /state — (redux-toolkit)

/components — (глупые компоненты) всё про ui, кнпопочки, менюшку, лейауты и тд

/shared
--- /types & constants
--- /utils — утилиты
--- /ui
--- /data — вот тут хранятся запросы к серверу

/public
---- /assets
---- /assets/icons
---- /assets/fonts
---- /assets/images

Попробовал сделать, чтобы eslint подсказывал если видим неверные импорты
(npm run lint или плагин ide)
```


# Table

```js

const columns = [{id: 'one', title: 'One'}]
const rows = [{one: '1'}, {one: '2'}, {one: '3'}]

<Table rows={rows} columns={columns} />
```
