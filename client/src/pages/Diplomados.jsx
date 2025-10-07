import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { diplomadosData } from '../data/diplomadosData';
import '../styles/diplomados.css';

function Diplomados() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  // Este `useEffect` solo se encarga de cambiar el título de la página.
  useEffect(() => {
    document.title = 'Diplomados - CEIO';
  }, []);

  const openModal = (programKey) => {
    const data = diplomadosData[programKey];
    if (data) {
      const body = `
        <p><strong>Duración:</strong> ${data.duration}</p>
        <p><strong>Precio:</strong> ${data.price}</p>
        <p><strong>Horario:</strong> ${data.schedule} de ${data.hours}</p>
        <p><strong>Descripción:</strong> ${data.description}</p>
        
        <h4>Contenido del Programa:</h4>
        <ul>
          ${data.content.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h4>Requisitos:</h4>
        <ul>
          ${data.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
        
        <h4>Certificación</h4>
        <p>Diploma de especialización con validez nacional e internacional.</p>
      `;
      setModalContent({ title: data.title, body });
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="hero-diplomados">
        <div className="hero-background">
          {/* Video Background for Diplomados */}
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/video-diplomados.mp4" type="video/mp4" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          
          {/* Animated overlay */}
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1>Diplomados</h1>
            
            <p className="hero-subtitle">
              Programas especializados que transforman
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number" style={{ color: '#00A3FF' }}>6+</div>
                <div className="stat-label">Programas</div>
              </div>
              
              <div className="stat">
                <div className="stat-number" style={{ fontSize: '2rem', color: '#9D4EDD' }}>+200</div>
                <div className="stat-label">Graduados</div>
              </div>
              
              <div className="stat">
                <div className="stat-number" style={{ color: '#00A3FF' }}>15+</div>
                <div className="stat-label">Docentes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomados Section */}
      <section className="diplomados-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Programas</h2>
            <p>Formación especializada con certificación internacional</p>
          </div>
          
          <div className="diplomados-grid">
            {Object.entries(diplomadosData).map(([key, diplomado]) => (
              <div key={key} className="diplomado-card">
                <div className="card-image">
                  <img src={diplomado.image} alt={diplomado.title} />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{diplomado.title}</h3>
                  <p>{diplomado.short_description}</p>
                  <div className="card-meta">
                    <span className="duration">{diplomado.duration}</span>
                    <span className="price">{diplomado.price}</span>
                  </div>
                  <button 
                    className="card-cta"
                    onClick={() => openModal(key)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-section">
            <h2>¿Listo para transformar tu carrera?</h2>
            <p>Inscripciones abiertas • Cupos limitados • Certificación internacional</p>
            <Link to="/contacto" className="cta-button">
              Inscríbete ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header">
              <h2>{modalContent.title}</h2>
            </div>
            <div 
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: modalContent.body }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Diplomados;