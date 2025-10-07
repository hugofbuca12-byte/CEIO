import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { especialidadesData, masterclassData, modalInfo } from '../data/especialidadesData';
import '../styles/especialidades.css';

const Card = ({ item, openModal }) => (
  <div className="diplomado-card">
    <div className="card-image">
      <img src={item.image} alt={item.alt} />
      <div className="card-overlay"></div>
    </div>
    <div className="card-content">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="card-meta">
        <span className="duration">{item.duration}</span>
        <span className="price">{item.price}</span>
      </div>
      <button className="card-cta" onClick={() => openModal(item.modalKey)}>
        Ver más
      </button>
    </div>
  </div>
);

function Especialidades() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  useEffect(() => {
    document.title = 'Especialidades - CEIO';
  }, []);

  const openModal = (programKey) => {
    if (modalInfo[programKey]) {
      setModalContent(modalInfo[programKey]);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/video-especialidad.mp4" type="video/mp4" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1>Especialidades</h1>
            <p className="hero-subtitle">
              Programas de alta especialización para llevar tu carrera al siguiente nivel
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Programas</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Graduados</div>
              </div>
              <div className="stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Docentes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="diplomados-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Programas de Especialidad</h2>
            <p>Formación avanzada con certificación de validez internacional.</p>
          </div>
          
          <div className="diplomados-grid">
            {Object.values(especialidadesData).map(item => (
              <Card key={item.modalKey} item={item} openModal={openModal} />
            ))}
          </div>
          
          <div className="cta-section">
            <h2>Especialidades con Expertos Internacionales</h2>
            <p>Inscripciones abiertas para la próxima gestión • Plazas limitadas</p>
            <Link to="/contacto" className="cta-button">
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section className="masterclass-section diplomados-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2>Masterclass</h2>
            <p>Cursos intensivos de alta especialización con expertos</p>
          </div>
          
          <div className="diplomados-grid">
            {Object.values(masterclassData).map(item => (
              <Card key={item.modalKey} item={item} openModal={openModal} />
            ))}
          </div>
          
          <div className="cta-section">
            <h2>Masterclass con Expertos</h2>
            <p>Cursos intensivos • Certificación internacional • Cupos limitados</p>
            <Link to="/contacto" className="cta-button">
              Reservar Cupo
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

export default Especialidades;
