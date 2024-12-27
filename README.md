# Platforma.is frontend

## TODO

[-] Добавить лоадер при переключении и загрузки страницы формы
[-] Добавить скролл на боковое меню с формами
[-] Добавить стили для скролл-баров
[-] Привязать бэйджи уведомлений к реальным уведомлениям об ответах

### .env

```
# Mode

MODE=%production|dev%

# Oauth

SECRET=%SECRET%
NEXTAUTH_URL=%NEXTAUTH_URL%
AUTH_SUCCESS_CALLBACK_URL=%AUTH_SUCCESS_CALLBACK_URL%
BACKEND_HOSTNAME=%BACKEND_HOSTNAME%
BACKEND_PORT=%BACKEND_PORT%

GITHUB_ID=%GITHUB_ID%
GITHUB_SECRET=%GITHUB_SECRET%

VK_ID=%VK_ID%
VK_CLIENT_ID=%VK_CLIENT_ID%
VK_CLIENT_SECRET=%VK_CLIENT_SECRET%

YANDEX_CLIENT_ID=%YANDEX_CLIENT_ID%
YANDEX_CLIENT_SECRET=%YANDEX_CLIENT_SECRET%

# Others

DATABASE_URL=%DATABASE_URL%

SENTRY_DSN=%SENTRY_DSN%

NEXT_PUBLIC_API=${BACKEND_HOSTNAME}
NEXT_PUBLIC_SENTRY_DSN=${SENTRY_DSN}
```

### Deployment

*Build*

```docker build -t platforma-frontend .```

*Run*

```docker run -p 3000:3000 platforma-frontend:latest```

### Structure

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

# Кодген

парсим схему командой

```
npm run get-swagger-schema
```

убираем из схемы все цифры со знаком % (реплейс по регулярке)

```
%[0-9]*
```
