# Easy Learn

Образовательное приключение по HTML, CSS, JavaScript и Python. Внешний вид опирается на Figma Make **Build Coding Adventure**; исходники макета не задают архитектуру приложения.

## Состояние проекта

Первый каркас: React + Vite на обычном JavaScript, Django + Django REST Framework, SQLite. Главная и страницы четырёх миров показывают визуальное направление. API пока содержит только `GET /api/health/`. Редактор, вход, задания, проверка кода и сохранение прогресса ещё не реализованы. Не вводите настоящий пользовательский код или секреты в этот прототип.

## Локальный запуск

Нужны Node.js с npm и Python версии, совместимой с `backend/requirements.txt`.

В первом терминале PowerShell:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
$env:DJANGO_DEBUG = '1'
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

Проверка API: `http://127.0.0.1:8000/api/health/` возвращает `{"status":"ok"}`. При `DJANGO_DEBUG=1` используется только локальный временный ключ. Для любого другого режима задайте `DJANGO_SECRET_KEY` и `DJANGO_ALLOWED_HOSTS`; пример переменных есть в `backend/.env.example`. Файл `.env` не читается автоматически.

Во втором терминале:

```powershell
cd frontend
npm ci
npm run dev
```

Откройте адрес, который напечатает Vite (обычно `http://127.0.0.1:5173/`). Vite направляет запросы `/api` на Django. `npm run build` собирает фронтенд в `frontend/dist/`.

## Документы

- [План задач](TASK.md)
- [Архитектура](ARCHITECTURE.md)
- [Требования безопасности](SECURITY.md)

Файл `Build Coding Adventure.make`, если он находится в рабочей папке, — пользовательский экспорт дизайна. Он не является частью запускаемого приложения и не должен автоматически добавляться в коммиты.
