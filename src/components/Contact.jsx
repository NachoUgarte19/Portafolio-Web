import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Contacto</h2>
        <p className="fs-5 mb-4">¡Podés contactarme a través de cualquiera de estos medios!</p>

        <div className="d-flex flex-column align-items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ignacio-rodriguez-ugarte-0200b125a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white fs-5"
          >
            <FaLinkedin className="me-2 text-primary" /> LinkedIn
          </a>

          <a
            href="nachougarte03@gmail.com"
            className="text-decoration-none text-white fs-5"
          >
            <FaEnvelope className="me-2 text-danger" /> nachougarte03@gmail.com
          </a>

          <a
            href="https://github.com/NachoUgarte19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white fs-5"
          >
            <FaGithub className="me-2" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}


