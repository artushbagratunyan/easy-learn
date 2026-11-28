import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";

const worlds = [
  {
    slug: "html",
    title: "HTML Island",
    language: "HTML",
    icon: "◇",
    className: "html",
    description: "Построй первые страницы и освой язык разметки.",
    missions: 7,
  },
  {
    slug: "css",
    title: "CSS Kingdom",
    language: "CSS",
    icon: "✦",
    className: "css",
    description: "Придай миру цвет, форму и движение.",
    missions: 7,
  },
  {
    slug: "javascript",
    title: "JavaScript City",
    language: "JavaScript",
    icon: "⌘",
    className: "javascript",
    description: "Оживи интерфейсы с помощью логики и событий.",
    missions: 7,
  },
  {
    slug: "python",
    title: "Python Universe",
    language: "Python",
    icon: "✳",
    className: "python",
    description: "Решай задачи и исследуй данные.",
    missions: 8,
  },
];

function WorldCard({ world }) {
  return (
    <Link
      className={`world-card ${world.className}`}
      to={`/worlds/${world.slug}`}
    >
      <span className="world-icon" aria-hidden="true">
        {world.icon}
      </span>
      <span className="world-copy">
        <span className="eyebrow">
          {world.language} · {world.missions} миссий в дизайн-макете
        </span>
        <strong>{world.title}</strong>
        <span>{world.description}</span>
      </span>
      <span className="card-arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <span className="pill">✦ Твоё приключение начинается здесь</span>
          <h1>
            Не просто учи код.
            <br />
            <span>Играй в него.</span>
          </h1>
          <p>
            Исследуй четыре мира программирования. Пиши настоящий код, решай
            задачи и открывай новые навыки шаг за шагом.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/worlds">
              Выбрать мир <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-quiet" href="#how-it-works">
              Как это работает
            </a>
          </div>
          <div className="hero-stats" aria-label="О проекте">
            <div>
              <strong>4</strong>
              <span>мира</span>
            </div>
            <div>
              <strong>29</strong>
              <span>миссий в макете</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>возможностей</span>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-ring ring-outer" />
          <div className="art-ring ring-inner" />
          <div className="art-core">&lt;/&gt;</div>
          <span className="art-spark spark-one">✦</span>
          <span className="art-spark spark-two">✧</span>
          <span className="art-spark spark-three">✦</span>
        </div>
      </section>

      <section className="section worlds-section" id="worlds">
        <div className="section-heading">
          <span className="eyebrow">КАРТА ПРИКЛЮЧЕНИЙ</span>
          <h2>Выбери свой мир</h2>
          <p>
            Каждый мир учит новому языку через короткие объяснения и
            практические задания.
          </p>
        </div>
        <div className="world-grid">
          {worlds.map((world) => (
            <WorldCard key={world.slug} world={world} />
          ))}
        </div>
      </section>

      <section className="section how-section" id="how-it-works">
        <div className="section-heading">
          <span className="eyebrow">ТВОЙ ПУТЬ</span>
          <h2>Учись, создавая</h2>
        </div>
        <div className="steps">
          <div>
            <span>01</span>
            <h3>Выбери мир</h3>
            <p>Начни с HTML, CSS, JavaScript или Python.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Напиши код</h3>
            <p>
              Решай миссии в редакторе, получай подсказки и проверяй результат.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Расти дальше</h3>
            <p>Закрепляй навыки и переходи к следующей задаче.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Worlds() {
  return (
    <section className="section inner-page">
      <span className="eyebrow">КАРТА ПРИКЛЮЧЕНИЙ</span>
      <h1>Четыре мира. Твой путь.</h1>
      <p>Выбери направление, с которого хочешь начать.</p>
      <div className="world-grid">
        {worlds.map((world) => (
          <WorldCard key={world.slug} world={world} />
        ))}
      </div>
    </section>
  );
}

function World() {
  const { slug } = useParams();
  const world = worlds.find((item) => item.slug === slug);
  if (!world) return <NotFound />;
  return (
    <section className="section inner-page">
      <Link className="back-link" to="/worlds">
        ← Все миры
      </Link>
      <span className="eyebrow">МИР {world.language.toUpperCase()}</span>
      <h1>{world.title}</h1>
      <p>{world.description}</p>
      <div className="coming-panel">
        <strong>Путь обучения готовится</strong>
        <p>
          Дизайн предусматривает {world.missions} миссий. Содержимое, редактор и
          безопасная проверка кода появятся в следующих этапах.
        </p>
        <Link className="button button-primary" to="/worlds">
          Другие миры →
        </Link>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="section inner-page">
      <h1>Страница не найдена</h1>
      <Link className="button button-primary" to="/">
        На главную →
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Easy Learn — главная">
          <span className="brand-mark">✦</span> Easy<span>Learn</span>
        </Link>
        <nav aria-label="Главное меню">
          <NavLink to="/" end>
            Главная
          </NavLink>
          <NavLink to="/worlds">Миры</NavLink>
          <a href="/#how-it-works">Как это работает</a>
        </nav>
        <Link className="header-cta" to="/worlds">
          Начать путь <span aria-hidden="true">↗</span>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worlds" element={<Worlds />} />
          <Route path="/worlds/:slug" element={<World />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>✦ Easy Learn</span>
        <span>Учись кодить, играя</span>
      </footer>
    </div>
  );
}
