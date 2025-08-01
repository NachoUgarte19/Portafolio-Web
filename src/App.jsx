import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import PruebasUI from './components/PruebasUI';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Main Content Wrapper */}
      <main className="container my-5">
        {/* Hero Section */}
        <section id="hero" className="mb-5">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="mb-5">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-5">
          <Projects />
        </section>

        {/* Automated UI Tests Section */}
        <section id="pruebas-ui" className="mb-5">
          <PruebasUI />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-5">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mb-1">
        © {new Date().getFullYear()} Ignacio Rodriguez Ugarte. Todos los derechos reservados.
      </footer>
    </>
  );
}

export default App;