export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">Portafolio QA</h5>
                  <p className="card-text">
                    Este portafolio presenta una recopilación de mis prácticas y conocimientos como QA Tester, incluyendo pruebas manuales y automatización con Python y Selenium WebDriver. 
                    Contiene planes de prueba, casos de prueba, un mapa mental de análisis funcional y documentación organizada en Notion. Es una muestra de mi enfoque metódico y mi compromiso con la calidad del software.
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <div>
                    <p className="tech-selenium mt-2">Selenium</p>
                  </div>
                  <div>
                    <p className="tech-python mt-2">Python</p>
                  </div>
                </div>
                <a
                  href="https://modern-euphonium-de3.notion.site/Portfolio-Ignacio-Rodriguez-Ugarte-66995ea3b93f4b6e8c66b498eb72593d?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn botonProyecto mt-3"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">Proyecto React #1</h5>
                  <p className="card-text">
                    Mi primer proyecto con React JS, demostrando manejo de componentes
                    y estado básico.
                  </p>
                </div>
                <a
                  href="#"
                  className="btn botonProyecto mt-3"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">Proyecto React #2</h5>
                  <p className="card-text">
                    Segundo proyecto con React JS, integrando TypeScript
                    y mejoras en la interfaz de usuario.
                  </p>
                </div>
                <a
                  href="#"
                  className="btn botonProyecto mt-3"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
