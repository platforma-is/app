# Platforma.is frontend

### .env 

```
# MODE 
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
```


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
