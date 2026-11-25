# Easy Learn — архитектура и логика проекта / Project Architecture

> Стартовый план продукта. Это проектная основа, а не обещание, что все перечисленные функции войдут в первую версию.

## 1. Идея проекта / Product idea

**RU.** Easy Learn — full-stack образовательный сайт для новичков, которые хотят освоить HTML, CSS, JavaScript и Python. Пользователь выбирает язык/раздел, проходит короткий мини-курс с видео или анимированными объяснениями, а затем выполняет последовательность из 10–20 практических заданий. Игровая механика сопровождает работу с настоящим кодом: помогает поставить цель, увидеть результат и понять ошибку.

**EN.** Easy Learn is a full-stack learning website for beginners studying HTML, CSS, JavaScript, and Python. A learner chooses a language/track, completes a short mini-course with video or animated explanations, then works through a sequence of 10–20 practical challenges. Game mechanics support real coding practice: they provide a goal, show the result, and help learners understand mistakes.

### Для кого / Audience

- Новички без опыта или с небольшим опытом.
- Ученик проходит путь самостоятельно; командные задания используются для практики и взаимного ревью, а не обязательной регистрации команд.
- Стартовый язык объяснений — русский; архитектура контента допускает английскую версию.

### Принципы / Principles

1. Учим через действие: объяснение короткое, практика занимает основное время.
2. Задания проверяют конкретный навык и дают понятную обратную связь.
3. Подсказки раскрываются постепенно; решение не показывается сразу.
4. Игровая оболочка не скрывает обычный код и реальные термины.
5. Четыре направления связаны общими проектами, но изучаются отдельными понятными шагами.

## 2. Структура обучения / Learning experience

### Путь пользователя / Learner journey

1. Главная показывает четыре раздела: HTML, CSS, JavaScript, Python.
2. Пользователь открывает раздел и видит описание, навыки и примерную длительность.
3. Перед задачами он проходит мини-курс: короткие главы с видео **или** анимированными схемами, кодовыми примерами, паузами-вопросами и мини-проверками. Видео не обязательно для каждой темы; анимация должна объяснять изменение кода/состояния, а не быть декоративной.
4. После курса открывается последовательность из 10–20 задач, от базовых к более сложным. Первая версия может запуститься с 10 хорошо подготовленными задачами в каждом разделе; цель — расширить до 10–20.
5. После каждой задачи ученик получает результат, понятное объяснение, подсказки по ступеням и кнопку перехода дальше. Ошибка не блокирует обучение.
6. В конце раздела — мини-проект, где навыки объединяются; после завершения виден прогресс и следующий рекомендуемый раздел.

### Что делает курс игровым / Game mechanics by track

| Раздел | Мини-курс объясняет | Игровая практика / Practice loop |
|---|---|---|
| HTML | Как браузер строит дерево страницы; роль тегов, атрибутов и семантики | «Собери страницу» из реальных HTML-тегов; затем напиши разметку сам и проверь предпросмотр/структуру |
| CSS | Как каскад, box model и layout меняют отображение | «Повтори образец»: редактируй CSS и сравнивай результат с целью; прогресс по визуальным критериям, а не по единственно правильному набору свойств |
| JavaScript | Как значения, условия, циклы и события меняют состояние программы | «Оживи устройство/комнату»: напиши обработчик, условие или функцию; анимация показывает изменение состояния после запуска кода |
| Python | Как данные проходят через выражения, условия, циклы и функции | «Экспедиция/инвентарь»: напиши код для распределения ресурсов, выбора маршрута или обработки списка; визуальный трейс показывает значения переменных по шагам |

Игры не должны сводиться к выбору готового ответа. В большинстве задач ученик пишет или исправляет код. Выбор ответа допустим в мини-проверках после объяснения и не засчитывается как основная практика.

### Формат задания / Challenge format

Каждая задача содержит: цель; короткий контекст; стартовый код или пустой шаблон; критерии проверки; 1–3 пошаговые подсказки; ожидаемое поведение; разбор решения и дополнительное усложнение. Типы задач: дописать код, починить баг, предсказать вывод, получить целевой результат, изменить/расширить мини-проект. В каждом разделе 10–20 задач распределены по уровням сложности, а не случайно.

**EN.** The learner selects one of four tracks, completes a short mini-course, and then solves 10–20 progressively harder coding challenges. Each course is split into short chapters with either video or purposeful animations, code examples, pause-and-think questions, and tiny checks. Animations explain how code changes the browser/program state; they are not decoration. A first release may launch with 10 polished challenges per track and grow toward 20. Most challenges require writing or fixing code; multiple choice is reserved for quick knowledge checks. Each track ends with an integrated mini-project.

## 3. Как обучать четырём темам / Learning loop for four subjects

Каждый уровень использует один цикл: **короткая цель → пример → действие с кодом → проверка → подсказка/разбор → следующий шаг**.

| Направление / Track | Игровой формат / Game format | Что реально пишет ученик / Actual coding |
|---|---|---|
| HTML | «Собери страницу»: расставить недостающие смысловые элементы; «найди сломанную разметку» | Теги, атрибуты, вложенность, формы и семантическая структура |
| CSS | Визуальная задача по референсу: приблизить карточку/сцену к образцу; CSS Battle — только источник вдохновения | CSS-свойства, селекторы, box model, flexbox/grid, responsive styles |
| JavaScript | «Оживи интерфейс»: кнопки, счётчик, таймер, выбор ответа; отладка короткого фрагмента | Переменные, условия, циклы, функции, массивы/объекты, DOM и события |
| Python | «Логика экспедиции»: вычислить ресурс, выбрать маршрут, обработать ответы; пошаговая отладка | Вывод/ввод, типы, условия, циклы, функции, коллекции и простые алгоритмы |

**Правило:** игровая цель всегда переводится в учебное действие. Например, «открыть дверь» означает написать условие и увидеть, как оно меняет исход; не просто нажать игровую кнопку.

### Примеры заданий / Example challenges

- **HTML — восстанови карточку профиля:** вставить `header`, `main`, заголовок и список в правильную структуру; проверка показывает, какой смысловой блок отсутствует.
- **CSS — повтори интерфейс:** изменить несколько свойств и сравнить результат с целевым изображением; проверять размеры/расположение с допуском, а не требовать один точный набор свойств.
- **JavaScript — почини счётчик:** найти, почему клик не меняет число, затем самостоятельно добавить уменьшение и сброс.
- **Python — распредели припасы:** написать функцию, которая принимает количество участников и еды, затем возвращает остаток; добавить граничные случаи.
- **Интеграционный проект — мини-портфолио:** HTML строит разделы, CSS оформляет их, JS добавляет фильтр/переключатель, Python решает отдельную задачу обработки данных или позже используется для серверной части проекта.

## 4. MVP и этапы / MVP and phases

### MVP (первый работающий учебный контур)

1. Главная с выбором одного из четырёх разделов.
2. Страница раздела с кратким планом мини-курса и 10–20 задачами, сгруппированными по сложности.
3. Мини-курс: главы с видео/анимацией, примерами кода и встроенными микро-проверками.
4. После завершения курса — страница задач с редактором, предпросмотром/запуском, подсказками, проверкой и разбором.
5. Мини-проект и прогресс по навыкам.
6. Гостевой режим или регистрация — команда решит до разработки аккаунтов; прогресс гостя можно временно сохранять локально.

### После MVP

- Больше уроков и объединённые мини-проекты.
- Профиль, достижения, ежедневная цель и мягкая система опыта.
- Совместное прохождение/ревью между участниками.
- Python runtime в отдельном Web Worker через Pyodide или изолированный серверный исполнитель. Не запускать присланный Python-код напрямую внутри Django.
- Более точная проверка визуальных CSS-задач и дополнительные режимы.

## 5. Стек и архитектура / Stack and architecture

**Решение:** React на фронтенде, Django + Django REST Framework на бэкенде, PostgreSQL для постоянных данных. Это full-stack веб-приложение. Учебный HTML/CSS/JS остаётся обычным HTML/CSS/JS: React используется для самого интерфейса платформы, а не навязывается ученику в первых уроках.

### Границы компонентов / Component boundaries

- **Frontend (React):** маршруты, страницы треков/заданий, редактор, предпросмотр, подсказки, состояние интерфейса, клиент API.
- **Backend (Django/DRF):** аккаунты, каталог уроков и заданий, попытки, результаты проверок, прогресс и административное редактирование контента.
- **Database (PostgreSQL):** пользователи, треки, уроки, задания, тестовые случаи, попытки и прогресс.
- **Code execution:** HTML/CSS/JS — изолированный `iframe` с `sandbox` и сообщениями по ограниченному протоколу. Python — не исполнять на Django-процессе; сначала задачи с ожидаемым выводом/логикой, затем отдельный изолированный runtime.

### Предлагаемая структура репозитория / Proposed repository structure

```text
easy-learn/
├── ARCHITECTURE.md
├── TASK.md
├── README.md
├── .gitignore
├── frontend/
│   ├── package.json
│   └── src/
│       ├── app/                 # router, providers, app shell
│       ├── pages/               # Home, Track, Lesson, Profile
│       ├── features/            # editor, challenge, progress, hints
│       ├── components/          # shared UI
│       ├── services/            # API client
│       └── styles/
└── backend/
    ├── manage.py
    ├── config/                  # settings, urls, ASGI/WSGI
    ├── apps/
    │   ├── accounts/
    │   ├── learning/            # tracks, lessons, challenges
    │   ├── submissions/         # attempts and validation results
    │   └── progress/
    └── requirements.txt
```

Это целевая структура, не требование создавать все папки заранее. В первой волне создаётся только минимальный каркас, нужный для запуска.

### Основные данные / Core entities

- `Track`: HTML, CSS, JavaScript или Python.
- `Lesson`: порядок, название, краткая цель и объяснение.
- `Challenge`: тип задания, инструкция, стартовый код, критерии проверки и подсказки.
- `Attempt`: код/ответ, статус проверки, время и связанный пользователь (если есть аккаунт).
- `Progress`: последний завершённый урок и агрегированный прогресс по треку.

Содержимое заданий на старте можно хранить в простых fixtures/JSON/seed data; не строить сложную CMS до проверки учебного цикла.

### Поток выполнения задания / Challenge flow

1. React запрашивает задание у API.
2. Ученик редактирует код и запускает локальный предпросмотр или отправляет ответ на проверку.
3. Frontend показывает результат и конкретную обратную связь.
4. Backend сохраняет попытку и прогресс; проверка выполняется только для поддерживаемого безопасного типа задания.
5. При успехе открывается следующий шаг; при ошибке предлагается подсказка соответствующего уровня.

## 6. Безопасность и обязательный аудит / Security and mandatory audit

Security review — обязательный этап разработки и условие любого публичного релиза. Приложение обучает программированию и принимает недоверенный ввод, поэтому безопасность проектируется до запуска редакторов и проверки кода.

### Основные угрозы и меры / Threats and controls

- **Stored/reflected/DOM XSS:** экранировать пользовательские данные по контексту; не рендерить пользовательский HTML как доверенную разметку; не использовать опасные HTML-вставки без строгой очистки; CSP как дополнительный слой.
- **XSS в учебном предпросмотре:** запускать HTML/CSS/JS только в iframe с `sandbox` без `allow-same-origin` и без ненужных разрешений; использовать отдельное origin-подпространство для preview при возможности; проверять `postMessage` по точному origin и схеме сообщений.
- **SQL injection:** использовать Django ORM и параметризованные запросы; не строить SQL конкатенацией строк; проверять любые raw SQL участки отдельно.
- **CSRF, auth и доступ:** включить CSRF-защиту для cookie-auth; проверять права на каждый объект и действие на сервере; не доверять user ID/role из клиента; ограничить частоту входа и чувствительных операций.
- **Валидация:** валидировать тип, размер и диапазон входных данных на backend; frontend-валидация нужна для UX, но не является защитой.
- **Загрузка файлов:** если добавится, ограничивать тип/размер, генерировать безопасные имена, хранить отдельно от исполняемых файлов и проверять права доступа.
- **Python runner:** никогда не выполнять присланный Python в Django-процессе. Для исполнения нужен изолированный runner с лимитами CPU/памяти/времени, ограничением сети/файловой системы, одноразовой средой и очисткой после каждого запуска. До реализации runner не принимать произвольный Python на сервер.
- **Секреты и зависимости:** секреты только в окружении/secret store; исключить `.env` из Git; фиксировать зависимости и проверять известные уязвимости до релиза.
- **Ошибки и логи:** не показывать stack trace/секреты пользователю; не записывать пароли, токены и полный приватный код в логи без необходимости.

### Обязательный security gate перед релизом / Release security gate

Перед каждым публичным релизом команда выполняет документированный аудит: threat model и перечень точек ввода; проверки XSS/инъекций/CSRF/авторизации/валидации; проверка sandbox и runner (если он есть); анализ зависимостей и секретов; проверка production settings/HTTPS/CSP/cookies; просмотр логов и ошибок; устранение всех критических и высоких находок; повторная проверка исправлений. Релиз блокируется при открытых критичных/высоких проблемах либо если аудит не выполнен. Результат записывается в `docs/security/` или отдельном release checklist без публикации эксплойтных деталей, секретов или персональных данных.

### Безопасность в каждом PR

Автор PR указывает новые точки ввода/вывода и проверку их безопасности. Изменения авторизации, рендеринга пользовательского контента, code runner, загрузок и API требуют отдельного ревью участником, который не писал эту часть. Security-аудит перед релизом дополняет, но не заменяет безопасные практики в ежедневной разработке.

**EN.** Security review is mandatory for every public release. The app accepts untrusted input and teaches code, so security must be designed before adding editors and code execution. Escape user content by context, avoid rendering user HTML as trusted markup, use CSP as defense in depth, and isolate previews in a sandboxed iframe without unnecessary permissions. Use Django ORM/parameterized queries, enforce server-side authorization per object/action, protect cookie-authenticated requests from CSRF, validate input on the server, and keep secrets out of Git and logs. Never execute submitted Python in the Django process. Any Python runner requires a disposable isolated environment with strict CPU, memory, time, network, and filesystem limits. Before every public release, document a threat model and review XSS, injection, CSRF, authorization, sandbox/runner, dependencies, secrets, production settings, and error/log handling. Fix and recheck all critical/high findings; block the release if the audit is incomplete or such findings remain.

## 7. UX и визуальный стиль / UX and visual direction

- Дружелюбная мастерская/лаборатория: ученик собирает маленькие работающие штуки, а не проходит перегруженную RPG.
- На экране задания три понятные зоны: цель и подсказки; редактор; результат/проверка.
- Цветовые метки отделяют языки, но сохраняют общую систему компонентов.
- Прогресс показывается как завершённые навыки и проекты, а не только очки.
- Мобильная версия должна позволять читать урок и видеть результат; полноценное редактирование удобнее на широком экране.
- Доступность: клавиатурная навигация, контраст, подписи ошибок, масштабируемый текст.

## 8. Что пока не решено / Open decisions

Эти вопросы не блокируют старт архитектурных документов, но их надо закрыть до реализации соответствующих функций:

1. Нужны ли аккаунты в первой демонстрации или начать с гостевого режима?
2. Какой редактор использовать (простые `textarea` сначала или CodeMirror/Monaco позже)?
3. Как именно будет исполняться Python: локально в браузере в отдельном worker или в отдельном изолированном runner-сервисе? Решить после threat model.
4. Первый язык интерфейса и озвучки: русский, армянский или английский?
5. Для первой версии курса выбрать видео, анимации или смешанный формат?
6. Как организовать совместное прохождение/peer review после одиночного MVP?

## 9. English summary

Easy Learn is a full-stack beginner learning platform for HTML, CSS, JavaScript, and Python. Its core loop is a short explanation followed by a real coding action, immediate feedback, progressive hints, and a small next step. HTML challenges focus on semantic structure; CSS challenges reproduce visual targets; JavaScript challenges add behavior and debugging; Python challenges solve small logic and data problems. React powers the platform UI; Django REST Framework provides the API and learning data; PostgreSQL stores users, content, attempts, and progress. Learner HTML/CSS/JS runs in a sandboxed preview. Untrusted Python must never run inside the Django process; use non-executing exercises initially and a Web Worker or isolated runner later. Build a thin MVP around a few high-quality challenges before expanding content or adding multiplayer features.

### Product and learning loop

The product is for beginners. Every challenge follows the same loop: **goal → short example → code action → check → explanation or progressive hint → next step**. Game mechanics must map to a real learning action. For example, opening a door means writing a condition and observing how it changes the outcome; the learner should not just click a game button.

| Track | Challenge format | What the learner writes |
|---|---|---|
| HTML | Assemble a page or repair broken markup | Semantic tags, attributes, nesting, forms, and page structure |
| CSS | Recreate a visual reference; use CSS Battle as inspiration only | Selectors, properties, box model, flexbox/grid, responsive styles |
| JavaScript | Make an interface interactive or debug a short snippet | Variables, conditions, loops, functions, arrays/objects, DOM, events |
| Python | Solve a small expedition/logistics problem and debug it step by step | Input/output, types, conditions, loops, functions, collections, basic algorithms |

An integrated mini-portfolio can combine the tracks: HTML provides structure, CSS styles it, JavaScript adds a filter or toggle, and Python solves a separate data-processing exercise or is used later for server-side work.

### MVP and later phases

The MVP should include a home page with four tracks; a track page with a short video/animated mini-course followed by 10–20 progressive challenges; a challenge experience with an editor, sandboxed preview or safe check, progressive hints, and explanations; and an integrated mini-project. Save attempts and learner progress. Deliver at least 10 polished challenges per track in the first release, with a clear path to grow each track to 20.

Later phases can add more lessons, integrated projects, profile/achievements, peer review, and a safe Python runtime. Do not run learner-provided Python directly inside Django. Early Python challenges can use expected-output or reasoning tasks; execution can be added later in an isolated worker or runner.

### Architecture and repository layout

Use React for the platform interface, Django REST Framework for accounts/content/attempts/progress APIs, and PostgreSQL for persistent data. React is the platform technology; beginner lessons still teach plain HTML, CSS, and JavaScript rather than requiring React.

- **Frontend:** routes, track and challenge pages, editor, preview, hints, progress UI, API client.
- **Backend:** accounts, track/lesson/challenge catalog, attempts, validation results, progress, and admin editing.
- **Database:** users, tracks, lessons, challenges, test cases, attempts, and progress.
- **Execution boundary:** render HTML/CSS/JS in a sandboxed iframe with a restricted messaging protocol. Keep untrusted Python out of the Django process.

Suggested folders are `frontend/src/{app,pages,features,components,services,styles}` and `backend/{config,apps/accounts,apps/learning,apps/submissions,apps/progress}`. This is the target layout, not a requirement to create every folder in the first commit. Keep challenge content in simple fixtures or seed data until the learning flow is validated; do not build a CMS prematurely.

### Challenge request flow

1. React requests a challenge from the API.
2. The learner edits code and runs a local preview or submits an answer for checking.
3. The frontend displays the result and specific feedback.
4. The backend records the attempt and progress; validation only runs for supported, safe challenge types.
5. A successful attempt unlocks the next step; an unsuccessful one offers a hint at the appropriate level.

### UX and open decisions

Use a friendly workshop/lab visual direction. A challenge page should have three clear areas: goal and hints, editor, and result/check. Show progress as completed skills and projects, not only points. Support keyboard navigation, readable contrast, clear error labels, and scalable text. Reading lessons should work on mobile; editing is optimized for wider screens.

Before implementing dependent features, the team should decide whether the first demo needs accounts or guest mode, which editor to start with, whether Python begins with non-executing exercises or an isolated runtime, the first UI language, and when peer/team review should be introduced.
