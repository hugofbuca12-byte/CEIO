import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaWhatsapp, 
  FaInstagram, 
  FaComments, 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
  FaClock,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import '../styles/contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sede: '',
    servicio: '',
    mensaje: ''
  });

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
    document.querySelectorAll('.social-card, .info-card, .ciudad-social').forEach(el => {
      observer.observe(el);
    });

    // Efecto hover para tarjetas sociales
    document.querySelectorAll('.social-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      sede: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <div className="contacto-page">
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
              Contáctanos
            </h1>
            <p className="hero-subtitle" style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              textShadow: 'none'
            }}>
              Estamos aquí para responder todas tus consultas y brindarte la mejor atención
            </p>
            <div className="hero-cta" style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#redes-sociales" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                outline: 'none'
              }}>
                <FaComments />
                Síguenos en Redes
              </a>
              <a href="#formulario" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'transparent',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid white'
              }}>
                <FaPaperPlane />
                Enviar Mensaje
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales Section */}
      <section className="social-section" id="redes-sociales">
        <div className="container">
          <div className="section-header">
            <h2>Conéctate con Nosotros</h2>
            <p>Síguenos en nuestras redes sociales para estar al día con nuestros servicios y promociones</p>
          </div>

          {/* La Paz */}
          <div className="ciudad-social">
            <h3 className="ciudad-title">
              <FaMapMarkerAlt />
              La Paz
            </h3>
            <div className="social-grid">
              <a href="https://www.facebook.com/profile.php?id=100064260783189&locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                <div className="social-icon">
                  <FaFacebookF color="white" />
                </div>
                <div className="social-content">
                  <h4>Facebook La Paz</h4>
                  <p>Síguenos para conocer nuestros servicios y promociones especiales</p>
                  <span className="social-handle">@ceio.lapaz</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>

              <a href="https://wa.me/59162367086" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
                <div className="social-icon">
                  <FaWhatsapp color="white" />
                </div>
                <div className="social-content">
                  <h4>WhatsApp La Paz</h4>
                  <p>Contacto directo para consultas y citas</p>
                  <span className="social-handle">+591 62367086</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>

              <a href="https://www.instagram.com/ceiodj2020/?hl=el" target="_blank" rel="noopener noreferrer" className="social-card instagram">
                <div className="social-icon">
                  <FaInstagram />
                </div>
                <div className="social-content">
                  <h4>Instagram</h4>
                  <p>Conoce nuestros casos de éxito y tips dentales</p>
                  <span className="social-handle">@ceio.odontologia</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>
            </div>
          </div>

          {/* Santa Cruz */}
          <div className="ciudad-social">
            <h3 className="ciudad-title">
              <FaMapMarkerAlt />
              Santa Cruz
            </h3>
            <div className="social-grid">
              <a href="https://www.facebook.com/cursosodontologia.bo?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                <div className="social-icon">
                  <FaFacebookF color="white" />
                </div>
                <div className="social-content">
                  <h4>Facebook Santa Cruz</h4>
                  <p>Mantente informado sobre nuestros servicios en Santa Cruz</p>
                  <span className="social-handle">@ceio.santacruz</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>

              <a href="https://wa.me/59177576641" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
                <div className="social-icon">
                  <FaWhatsapp color="white" />
                </div>
                <div className="social-content">
                  <h4>WhatsApp Santa Cruz</h4>
                  <p>Contacto directo para consultas y citas</p>
                  <span className="social-handle">+591 77576641</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>
            </div>
          </div>

          {/* Cochabamba */}
          <div className="ciudad-social">
            <h3 className="ciudad-title">
              <FaMapMarkerAlt />
              Cochabamba
            </h3>
            <div className="social-grid">
              <a href="https://www.facebook.com/profile.php?id=100064260783189&locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                <div className="social-icon">
                  <FaFacebookF color="white" />
                </div>
                <div className="social-content">
                  <h4>Facebook Cochabamba</h4>
                  <p>Conoce nuestros servicios especializados en Cochabamba</p>
                  <span className="social-handle">@ceio.cochabamba</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>

              <a href="https://wa.me/59177576641" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
                <div className="social-icon">
                  <FaWhatsapp color="white" />
                </div>
                <div className="social-content">
                  <h4>WhatsApp Cochabamba</h4>
                  <p>Contacto directo para consultas y citas</p>
                  <span className="social-handle">+591 77576641</span>
                </div>
                <div className="social-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-form-section" id="formulario">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Envíanos un mensaje</h2>
              <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sede">Sede de interés</label>
                  <select 
                    id="sede" 
                    name="sede" 
                    value={formData.sede}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Seleccionar sede</option>
                    <option value="lapaz">La Paz</option>
                    <option value="santacruz">Santa Cruz</option>
                    <option value="cochabamba">Cochabamba</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="servicio">Servicio de interés</label>
                <select 
                  id="servicio" 
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="especializacion">Especialidades</option>
                  <option value="diplomado">Diplomados</option>
                  <option value="consulta">Consulta general</option>
                  <option value="tratamiento">Tratamiento dental</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5" 
                  placeholder="Cuéntanos más sobre tu consulta..."
                  value={formData.mensaje}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <FaPaperPlane />
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3>Horarios</h3>
              <p>Lunes a Viernes<br />9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Teléfonos</h3>
              <p>La Paz: 62367086<br />Santa Cruz: 77576641</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>ceiodj2020@gmail.com<br />ceiodj2020@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
