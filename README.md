
 <p align="center">

  <img height="300"  src="./mockups/iphone.png"/>

  <img height="300"  src="./mockups/mac.png"/>

</p>

<p align="center">
  <i>Веб-приложение <a href="https://calorielly.tech">calorielly.tech</a> </i>
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

## 💡 Инженерные акценты

- Строгая типизация: TypeScript строгий режим в `tsconfig.*` (noUnused, noFallthrough и др.)
- Единый стиль кода: ESLint flat config (с `@typescript-eslint` и `import`), Prettier, Stylelint для SCSS
- Архитектура фронтенда: Vue 3 Composition API + Pinia (персист через `pinia-plugin-persistedstate`), типизированные сторы
- Конфигурация Vite: `@vitejs/plugin-vue`, алиас `@` в `/src`, глобальные SCSS-переменные и переходы, Vite 6
- Интеграция с Chart.js через `vue-chart-3`: типизированные `ChartOptions`/`ChartData`, реактивные источники
- HTTP-клиент: Axios с базовым URL из `VITE_API_BASE_URL`
- Роутинг: четкое разделение layout’ов через `meta.blank`, навигационные гарды на уровне маршрутов
- Деплой: автоматизированная доставка на GitHub Pages, SPA fallback, кеширование зависимостей
- Безопасность (backend): OAuth2 Password Flow, JWT (JOSE), хеширование паролей (Passlib), CORS для prod/dev
 - Backend: FastAPI + OpenAPI (Swagger/ReDoc), строго типизированные схемы (Pydantic v2)
 - Аутентификация: OAuth2 Password Bearer, срок жизни и тип токена настраиваются через `.env`
 - Данные: SQLModel (SQLAlchemy 2.0), SQLite в dev; план — PostgreSQL + Alembic миграции
 - Документация и контракт: `/api/openapi.json`, `/api/docs`, `/api/redoc`
 - Версионирование и проксирование: префикс `/api` (совместимость с reverse proxy), `root-path` в Uvicorn
 - Развёртывание backend: Uvicorn workers под PM2 (`ecosystem.config.js`), ресурсо‑лимиты и autorestart
 - Конфигурация: `pydantic-settings` + `.env` (SECRET_KEY, DATABASE_URL, TTL токена)

## 🚀 Использование

Доступно по [этому адресу](https://calorielly.tech).

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

## 🧩 Backend (FastAPI)

Репозиторий: https://github.com/mrtynnvv/api-calorielly  
Public Swagger: https://dexone.pw/api/docs

## 📝 Licence

Copyright © 2025 [Dima Martynov](https://github.com/dexone).<br />
Этот проект находится под лицензией [MIT](https://github.com/Dexone/Calorielly/blob/main/LICENSE).<br />
_Использованные изображения принадлежат [icons8](https://icons8.ru/)._
