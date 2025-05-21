import imgWeb from "../assets/imagenWeb.png";

export default function Hero() {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-start">
          <h2 className="fs-1">Hola! soy Ignacio,</h2>
          <p className="fs-2 lead">QA Tester y Frontend Developer</p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={imgWeb}
            alt="Ignacio"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
