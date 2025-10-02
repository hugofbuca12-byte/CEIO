import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaInfoCircle, 
  FaPhone, 
  FaClock, 
  FaMapMarkedAlt, 
  FaWhatsapp, 
  FaCalendarPlus 
} from 'react-icons/fa';
import '../styles/direcciones.css';
import RedSquare from '../components/RedSquare';

function Direcciones() {
  useEffect(() => {
    // Intersection Observer para animaciones
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.sede-card, .cta-section').forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="direcciones-page">
      {/* Hero Section */}
      <section className="hero">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        >
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
        
        {/* Video overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(15, 15, 15, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%),
            radial-gradient(circle at 30% 70%, rgba(0, 163, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(157, 78, 221, 0.08) 0%, transparent 50%)
          `,
          zIndex: 2
        }}></div>

        <div className="hero-container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-content">
            <h1 className="hero-title" style={{ 
              color: 'white',
              textAlign: 'center',
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textShadow: 'none'
            }}>
              Nuestras Sedes
            </h1>
            <RedSquare />
            <p className="hero-subtitle" style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              textShadow: 'none'
            }}>
              Ubicaciones estratégicas para brindarte la mejor atención
            </p>
          </div>
        </div>
      </section>

      {/* Sedes Section */}
      <section className="sedes-section">
        <div className="container">
          {/* Cabecera de la sección. */}
          <div className="section-header">
            <h2>Encuentra tu sede más cercana</h2>
            <p>Contamos con instalaciones equipadas</p>
          </div>
          
          {/* Grid que contiene las tarjetas de cada sede. */}
          <div className="sedes-grid">
            {/* Tarjeta para la Sede La Paz. */}
            <div className="sede-card" data-sede="La Paz">
              <div className="card-image">
                <img src="/images/sede-lapaz-direcciones.jpg" alt="Sede La Paz" />
                <div className="card-overlay"></div>
                <div className="location-icon">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="card-content">
                <h3>Sede La Paz</h3>
                {/* Información detallada de la sede. */}
                <div className="sede-info">
                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <span>Calle Hermanos Manchego Nro. 2571 Zona Sopocachi</span>
                  </div>
                  <div className="info-item">
                    <FaInfoCircle />
                    <span>Frente a Dragon verde</span>
                  </div>
                  <div className="info-item">
                    <FaPhone />
                    <span>62367086</span>
                  </div>
                  <div className="info-item">
                    <FaClock />
                    <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                {/* Acciones: enlaces a Google Maps y WhatsApp. */}
                <div className="card-actions">
                  <a 
                    href="https://www.google.com/maps/place/Centro+de+Ense%C3%B1anza+Integral+en+Odontolog%C3%ADa/@-16.510273,-68.1241261,21z/data=!4m6!3m5!1s0x915f21d983c0d10d:0xa7233f16f913c1f6!8m2!3d-16.5101741!4d-68.1241065!16s%2Fg%2F11l31srtn4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link primary"
                  >
                    <FaMapMarkedAlt />
                    <span>Ver en Google Maps</span>
                  </a>
                  <a href="https://wa.me/59162367086" className="call-link">
                    <FaWhatsapp />
                    <span>Contáctanos</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta para la Sede Santa Cruz. */}
            <div className="sede-card" data-sede="Santa Cruz">
              <div className="card-image">
                <img src="/images/sede-santacruz-direcciones.jpg" alt="Sede Santa Cruz" />
                <div className="card-overlay"></div>
                <div className="location-icon">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="card-content">
                <h3>Sede Santa Cruz</h3>
                <div className="sede-info">
                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <span>Calle Los Claveles Nro.35 Barrio Sirari Equipetrol</span>
                  </div>
                  <div className="info-item">
                    <FaInfoCircle />
                    <span>Cerca Av. principal</span>
                  </div>
                  <div className="info-item">
                    <FaPhone />
                    <span>77576641</span>
                  </div>
                  <div className="info-item">
                    <FaClock />
                    <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a 
                    href="https://www.google.com/maps/place/Los+Claveles+35,+Santa+Cruz+de+la+Sierra/@-17.763247,-63.2001061,18z/data=!4m6!3m5!1s0x93f1e7f6f9a73bbd:0x8fd7f0d860ea35ac!8m2!3d-17.763431!4d-63.2000135!16s%2Fg%2F11j32ss8vk?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link primary"
                  >
                    <FaMapMarkedAlt />
                    <span>Ver en Google Maps</span>
                  </a>
                  <a href="https://wa.me/59177576641" className="call-link">
                    <FaWhatsapp />
                    <span>Contáctanos</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta para la Sede Cochabamba. */}
            <div className="sede-card" data-sede="Cochabamba">
              <div className="card-image">
                <img src="/images/sede-cochabamba-direcciones.jpg" alt="Sede Cochabamba" />
                <div className="card-overlay"></div>
                <div className="location-icon">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="card-content">
                <h3>Sede Cochabamba</h3>
                <div className="sede-info">
                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <span>Av. Santa Cruz, esq Beni, Edificio Commercial Center, Oficina 3</span>
                  </div>
                  <div className="info-item">
                    <FaInfoCircle />
                    <span>Edificio Commercial Center Of. 3</span>
                  </div>
                  <div className="info-item">
                    <FaPhone />
                    <span>77576641</span>
                  </div>
                  <div className="info-item">
                    <FaClock />
                    <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a 
                    href="https://www.google.com/maps/place/Edificio+Commercial+Center/@-17.376899,-66.1581667,18.07z/data=!4m6!3m5!1s0x93e37411ac0a4741:0xc7cf8ea06fd55632!8m2!3d-17.3771695!4d-66.156858!16s%2Fg%2F11fylqmj0z?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link primary"
                  >
                    <FaMapMarkedAlt />
                    <span>Ver en Google Maps</span>
                  </a>
                  <a href="https://wa.me/59177576641" className="call-link">
                    <FaWhatsapp />
                    <span>Contáctanos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sección de Llamada a la Acción (CTA): Invita al usuario a agendar una cita. */}
          <div className="cta-section">
            <h2>¿Necesitas una cita?</h2>
            <p>Agenda tu consulta en cualquiera de nuestras sedes</p>
            {/* El componente Link redirige a la página de contacto. */}
            <Link to="/contacto" className="cta-button">
              <FaCalendarPlus />
              Agendar Cita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Direcciones;
