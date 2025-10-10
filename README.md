
 <p align="center">

  <img height="300"  src="./mockups/iphone.png"/>

  <img height="300"  src="./mockups/mac.png"/>

</p>

<p align="center">
  <i>Веб-приложение <a href="https://calorielly.ru">calorielly.ru</a> </i>
</p>
<h1 align="center">Calorielly</h1>
<p align="center">Счетчик калорий, дневник питания.</p>

<p align="center">
  <a href="https://github.com/Dexone/Calorielly/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Dexone/Calorielly?style=flat" />
  </a>
</p>

## ✨ Особенности

- Calorielly — классный, удобный, отзывчивый и легко настраиваемый счетчик калорий
- Поддерживает авторизацию и создание аккаунта для новых пользователей
- Имеет гибкие настройки, планирование целей, калькулятор граммов
- Встроен график изменения веса и таймлайн дневника питания

## 🚀 Использование

Доступно по [этому адресу](https://calorielly.ru).

## ❓ Что это за штука?

Это приложение — рабочий pet-проект на Vue 3 + Vite с современным стеком:

- Vue 3 + TypeScript, Composition API и `script setup`.
- Vite + `@vitejs/plugin-vue` (без дополнительных авто-лоадеров страниц/лейаутов).
- Состояние: Pinia + `pinia-plugin-persistedstate` (localStorage для отдельных свойств).
- Графики: Chart.js через `vue-chart-3`.
- Стили: SCSS с автоподключением переменных/анимаций из `src/styles`.
- HTTP: Axios; базовый URL задается переменной окружения.

## 🧰 Локальная разработка

Требуется Node.js 20+ и npm.

1. Установка зависимостей:
   - `npm ci`
2. Запуск dev-сервера:
   - `npm run dev`
3. Сборка:
   - `npm run build`
4. Превью собранной версии:
   - `npm run preview`

Качество кода:

- ESLint: `npm run lint`
- Stylelint: `npm run stylelint`
- Prettier: `npm run format`
- Всё сразу: `npm run clean`

Примечание: скрипт `npm run server` использует `json-server` и требует наличия `db.json`. По умолчанию в репозитории он отсутствует.

## 🔧 Переменные окружения

Создайте файл `.env` (или `.env.local`) и укажите базовый URL API:

```
VITE_API_BASE_URL=https://dexone.pw/backend_new/
```

## 🧱 Структура

- `src/pages` — страницы (Feed, Auth, Profile, Settings, Scales, Other)
- `src/components` — UI/блоки/модалки
- `src/store` — Pinia-сторы
- `src/router` — маршрутизация
- `src/styles` — общие SCSS (`_variables.scss`, `_transitions.scss`, `main.scss`)
- `public` — статические ресурсы (favicon и т.п.)

Особенности:

- Guard’ы в роутере, meta `blank` для страниц без шапки/меню.
- Состояние пользователя частично сохраняется в localStorage.
- График динамики веса на Chart.js.

## 🤝 Вклад

Любой вклад в проект приветствуется.
Возникла проблема? Откройте [issue](https://github.com/Dexone/Calorielly/issues/new/choose).  
Хотите добавить какую-то функцию? PR приветствуются!

## 👤 Об авторе

Не стесняйтесь обращаться ко мне:

<a href="https://t.me/mrtynnvv"><img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" /></a>



## 📝 Licence

Copyright © 2025 [Dima Martynov](https://github.com/dexone).<br />
Этот проект находится под лицензией [MIT](https://github.com/Dexone/Calorielly/blob/main/LICENSE).<br />
_Использованные изображения принадлежат [icons8](https://icons8.ru/)._
