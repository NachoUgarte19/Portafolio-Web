export default function About() {
  return (
    <section id="about" className="py-5">
      <div
        className="bg-dark text-white p-4 px-md-5 rounded shadow mx-auto"
        style={{ maxWidth: "1000px" }}
      >
        <h2 className="fs-2 mb-4 text-center">Sobre mí</h2>

        <p className="text-justify">
          ¡Hola! Mi nombre es Ignacio y me desempeño como QA Tester, con formación en pruebas manuales y automatización utilizando Python y Selenium WebDriver. 
          Me apasiona el aseguramiento de la calidad del software, ya que me permite detectar oportunidades de mejora que impactan directamente en la experiencia del usuario.
          Actualmente, me encuentro ampliando mis conocimientos en desarrollo web, explorando tecnologías como React JS. 
          Disfruto enfrentar nuevos desafíos, aprender constantemente y contribuir al trabajo en equipo con compromiso y atención al detalle.
        </p>

        <h4 className="mt-5 text-center">Tecnologías y herramientas que utilizo</h4>
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
          {[
            ["Python", "python"],
            ["Selenium", "selenium"],
            ["MySQL", "mysql"],
            ["React", "react"],
            ["HTML5", "html5"],
            ["CSS3", "css3"],
            ["JavaScript", "javascript"]
          ].map(([name, id]) => (
            <img
              key={id}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${id}/${id}-original.svg`}
              alt={name}
              width="50"
              height="50"
              className="tech-icon"
              title={name}
            />
          ))}
        </div>
        <div className="row text-center mt-5">
        <div className="col-md">
            <h5 className="mt-2">QA Manual</h5>
            <p className="text-light">Documentación, ejecución y reporte de bugs</p>
        </div>
        <div className="col-md">
            <h5 className="mt-2">Automatización</h5>
            <p className="text-light">Python + Selenium WebDriver</p>
        </div>
        <div className="col-md">
            <h5 className="mt-2">Desarrollo Web</h5>
            <p className="text-light">Proyectos en React y prácticas frontend</p>
        </div>
        </div>

      </div>
    </section>
  );
}
