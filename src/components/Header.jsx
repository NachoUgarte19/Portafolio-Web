export default function Header() {
  return (
    <header className="py-4 mi-header bg-transparent">
      <nav className="navbar navbar-expand-md navbar-dark container p-0">
        <a className="navbar-brand fs-4 m-0" href="#">
          Portafolio
        </a>
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Mostrar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
