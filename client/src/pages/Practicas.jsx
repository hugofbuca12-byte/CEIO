import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/practicas.css';

function Practicas() {
  return (
    <div className="practicas-page">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <h1 className="hero-title">Prácticas Profesionales</h1>
          <p className="hero-subtitle">
            Programa de prácticas profesionales para estudiantes de odontología
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="practicas-main-content">
        <div className="practicas-container">
          <div className="practicas-header">
            <h2>Programa de Prácticas</h2>
            <p>
              Ofrecemos oportunidades de prácticas profesionales para estudiantes de odontología en nuestras tres sedes
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon estudiantes">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Estudiantes</h3>
              <p>
                Programa dirigido a estudiantes de odontología de últimos semestres que buscan experiencia práctica en un entorno profesional.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon supervision">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Supervisión</h3>
              <p>
                Nuestros especialistas brindan supervisión constante y mentoría personalizada durante todo el período de prácticas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon certificacion">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Certificación</h3>
              <p>
                Al completar el programa, los estudiantes reciben certificación de horas prácticas realizadas en nuestro centro.
              </p>
            </div>
          </div>

          <div className="process-section">
            <h3>Requisitos y Proceso de Aplicación</h3>
            <div className="process-grid">
              <div className="process-list">
                <h4 className="requisitos">
                  <i className="fas fa-clipboard-check"></i>
                  Requisitos
                </h4>
                <ul>
                  <li>Estar cursando últimos 2 semestres de carrera</li>
                  <li>Promedio académico mínimo de 70/100</li>
                  <li>Carta de recomendación de la universidad</li>
                  <li>Seguro estudiantil vigente</li>
                  <li>Disponibilidad de tiempo completo o parcial</li>
                </ul>
              </div>
              
              <div className="process-list">
                <h4 className="proceso">
                  <i className="fas fa-list-ol"></i>
                  Proceso
                </h4>
                <ol>
                  <li>Envío de documentos completos</li>
                  <li>Entrevista con coordinador de prácticas</li>
                  <li>Asignación de sede y especialidad</li>
                  <li>Inducción y orientación inicial</li>
                  <li>Inicio del programa de prácticas</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="practicas-cta">
            <h3>¿Interesado en realizar tus prácticas con nosotros?</h3>
            <p>
              Contacta con nosotros para más información sobre nuestro programa de prácticas
            </p>
            <Link to="/contacto" className="practicas-cta-button">
              <i className="fas fa-paper-plane"></i>
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* Sedes disponibles */}
      <section className="sedes-disponibles">
        <div className="sedes-disponibles-container">
          <h3>Sedes Disponibles para Prácticas</h3>
          <div className="sedes-disponibles-grid">
            <div className="sede-item">
              <h4>La Paz</h4>
              <p>
                Calle Hermanos Manchego 2571<br />
                Zona Sopocachi
              </p>
            </div>
            <div className="sede-item">
              <h4>Santa Cruz</h4>
              <p>
                Calle Los Claveles 35<br />
                Barrio Sirari Equipetrol
              </p>
            </div>
            <div className="sede-item">
              <h4>Cochabamba</h4>
              <p>
                Av. Santa Cruz esq. Beni<br />
                Edificio Commercial Center Of. 3
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Practicas;
