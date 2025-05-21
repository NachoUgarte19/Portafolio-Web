export default function Projects() {
  const proyectos = [
    {
      titulo: "Portafolio QA",
      descripcion:
        "Este portafolio presenta una recopilación de mis prácticas y conocimientos como QA Tester, incluyendo pruebas manuales y automatización con Python y Selenium WebDriver. Contiene planes de prueba, casos de prueba, un mapa mental de análisis funcional y documentación organizada en Notion. Es una muestra de mi enfoque metódico y mi compromiso con la calidad del software.",
      link: "https://modern-euphonium-de3.notion.site/Portfolio-Ignacio-Rodriguez-Ugarte-66995ea3b93f4b6e8c66b498eb72593d?pvs=4",
      tecnologias: ["Python", "Selenium"]
    },
    {
      titulo: "Proyecto React #1",
      descripcion: "Mi primer proyecto con React JS.",
      link: "#",
      tecnologias: ["React"]
    },
    {
      titulo: "Proyecto React #2",
      descripcion: "Mi segundo proyecto con React JS.",
      link: "#",
      tecnologias: ["TypeScript", "JavaScript"]
    }
  ];

  // Mapeo de colores “oficiales” para cada tech
  const techColors = {
    Python: "#3776AB",
    Selenium: "#43B02A",
    React: "#61DAFB",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6"
  };

  return (
    <section id="projects" className="py-5">
      <div className="container-fluid px-5">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row">
          {proyectos.map((proyecto, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{proyecto.titulo}</h5>
                    <p className="card-text">{proyecto.descripcion}</p>

                    {proyecto.tecnologias && (
                      <div className="d-flex flex-wrap gap-2 mt-3">
                        {proyecto.tecnologias.map((tech, i) => {
                          const color = techColors[tech] || "#6c757d";
                          // texto negro para fondos muy claros (JS, etc.)
                          const textColor = ["#F7DF1E"].includes(color) ? "#000" : "#fff";
                          return (
                            <span
                              key={i}
                              className="badge fs-6"
                              style={{
                                backgroundColor: color,
                                color: textColor,
                                border: `1px solid ${color}`
                              }}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <a
                    href={proyecto.link}
                    className="btn botonProyecto mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
