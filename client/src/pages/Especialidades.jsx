import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RedSquare from '../components/RedSquare';

function Especialidades() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  useEffect(() => {
    document.title = 'Especialidades - CEIO';
  }, []);

  const openModal = (program) => {
    const modalData = {
      'ortodoncia-esp': {
        title: 'Especialidad en Ortodoncia',
        body: `
          <p><strong>Duración:</strong> 3 años</p>
          <p><strong>Modalidad:</strong> Presencial con práctica clínica</p>
          <h4>¿Qué aprenderás?</h4>
          <ul>
            <li>Diagnóstico ortodóntico avanzado</li>
            <li>Técnicas de ortodoncia fija y removible</li>
            <li>Ortodoncia interceptiva y correctiva</li>
            <li>Manejo de casos complejos</li>
            <li>Tecnología digital en ortodoncia</li>
          </ul>
          <h4>Certificación</h4>
          <p>Título de Especialista en Ortodoncia con validez internacional.</p>
        `
      },
      'periodoncia': {
        title: 'Especialidad en Periodoncia',
        body: `
          <p><strong>Duración:</strong> 2 años</p>
          <p><strong>Modalidad:</strong> Presencial con práctica clínica</p>
          <h4>¿Qué aprenderás?</h4>
          <ul>
            <li>Diagnóstico periodontal avanzado</li>
            <li>Cirugía periodontal regenerativa</li>
            <li>Implantología periodontal</li>
            <li>Manejo de tejidos blandos</li>
            <li>Técnicas de regeneración tisular</li>
          </ul>
          <h4>Certificación</h4>
          <p>Título de Especialista en Periodoncia con reconocimiento internacional.</p>
        `
      },
      'maxilofacial': {
        title: 'Cirugía Oral y Maxilofacial',
        body: `
          <p><strong>Duración:</strong> 4 años</p>
          <p><strong>Modalidad:</strong> Presencial con práctica hospitalaria</p>
          <h4>¿Qué aprenderás?</h4>
          <ul>
            <li>Cirugía oral menor y mayor</li>
            <li>Traumatología maxilofacial</li>
            <li>Cirugía ortognática</li>
            <li>Patología oral y maxilofacial</li>
            <li>Técnicas reconstructivas</li>
          </ul>
          <h4>Certificación</h4>
          <p>Título de Especialista en Cirugía Oral y Maxilofacial.</p>
        `
      },
      'biomimetica': {
        title: 'Masterclass Biomimética',
        body: `
          <p><strong>Duración:</strong> 3 días intensivos</p>
          <p><strong>Precio:</strong> 1500 Bs</p>
          <h4>¿Qué aprenderás?</h4>
          <ul>
            <li>Principios de la odontología biomimética</li>
            <li>Selección de materiales biocompatibles</li>
            <li>Técnicas de estratificación natural</li>
            <li>Protocolo de adhesión avanzado</li>
            <li>Casos clínicos paso a paso</li>
          </ul>
          <h4>Certificación</h4>
          <p>Certificado internacional de participación y competencia.</p>
        `
      },
      'carillas': {
        title: 'Masterclass Carillas',
        body: `
          <p><strong>Duración:</strong> 4 días intensivos</p>
          <p><strong>Precio:</strong> 1500 Bs</p>
          <h4>¿Qué aprenderás?</h4>
          <ul>
            <li>Diseño digital de sonrisa</li>
            <li>Técnicas de preparación mínimamente invasiva</li>
            <li>Selección de color y forma</li>
            <li>Cementado adhesivo de carillas</li>
            <li>Manejo de complicaciones</li>
          </ul>
          <h4>Certificación</h4>
          <p>Certificado internacional de especialización en carillas.</p>
        `
      }
    };

    setModalContent(modalData[program] || { title: '', body: '' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="hero" style={{
        marginTop: '-100px', 
        paddingTop: '100px',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="hero-background" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          {/* Video Background for Especialidades */}
          <video autoPlay muted loop playsInline style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0
          }}>
            <source src="/videos/video-especialidad.mp4" type="video/mp4" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          
          {/* Animated overlay */}
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(15, 15, 15, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%),
              radial-gradient(circle at 30% 70%, rgba(157, 78, 221, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(0, 163, 255, 0.1) 0%, transparent 50%)
            `,
            zIndex: 2
          }}></div>
        </div>

        <div className="hero-container" style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '0 1.5rem'
        }}>
          <div className="hero-content" style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              lineHeight: '1.1',
              textShadow: 'none',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, sans-serif'
            }}>Especialidades</h1>
            <RedSquare />
            
            <p style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
              color: '#FFFFFF',
              textShadow: 'none',
              lineHeight: '1.2',
              fontWeight: '400',
              margin: '0 auto 3rem',
              textAlign: 'center',
              maxWidth: '600px',
              opacity: '0.9'
            }}>
              Programas de alta especialización para llevar tu carrera al siguiente nivel
            </p>
            
            <div className="hero-stats" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
              maxWidth: '800px',
              margin: '3rem auto 0',
              padding: '0 1rem'
            }}>
              <div className="stat" style={{ 
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem 1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#00A3FF',
                  lineHeight: '1',
                  marginBottom: '0.5rem'
                }}>3</div>
                <div style={{
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: '500',
                  opacity: '0.9'
                }}>Programas</div>
              </div>
              
              <div className="stat" style={{ 
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem 1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#9D4EDD',
                  lineHeight: '1',
                  marginBottom: '0.5rem'
                }}>50+</div>
                <div style={{
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: '500',
                  opacity: '0.9'
                }}>Graduados</div>
              </div>
              
              <div className="stat" style={{ 
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem 1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#00A3FF',
                  lineHeight: '1',
                  marginBottom: '0.5rem'
                }}>25+</div>
                <div style={{
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: '500',
                  opacity: '0.9'
                }}>Docentes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#0F0F0F', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFFFFF' }}>
              Nuestros Programas de Especialidad
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#B4B4B4' }}>
              Formación avanzada con certificación de validez internacional.
            </p>
          </div>
          
          <div className="diplomados-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/especialidad1.jpg" alt="Especialidad en Ortodoncia" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
                <div className="card-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
                }}></div>
              </div>
              <div className="card-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  Especialidad en Ortodoncia
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Domina las técnicas más avanzadas en ortodoncia moderna para el diagnóstico y tratamiento de problemas dentofaciales complejos.
                </p>
                <div className="card-meta" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <span className="duration" style={{ 
                    backgroundColor: '#1565c0',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>3 años</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>Consultar</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('ortodoncia-esp')}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>

            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/especialidad2.jpg" alt="Especialidad en Periodoncia" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
                <div className="card-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
                }}></div>
              </div>
              <div className="card-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  Especialidad en Periodoncia
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Especialízate en el tratamiento de enfermedades periodontales y técnicas de regeneración tisular con tecnología de vanguardia.
                </p>
                <div className="card-meta" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <span className="duration" style={{ 
                    backgroundColor: '#1565c0',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>2 años</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>Consultar</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('periodoncia')}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>

            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/especialidad3.jpg" alt="Cirugía Maxilofacial" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
                <div className="card-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
                }}></div>
              </div>
              <div className="card-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  Cirugía Oral y Maxilofacial
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Programa de alta exigencia para dominar las técnicas quirúrgicas más avanzadas en cirugía oral y maxilofacial.
                </p>
                <div className="card-meta" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <span className="duration" style={{ 
                    backgroundColor: '#1565c0',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>4 años</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>Consultar</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('maxilofacial')}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
          
          <div className="cta-section" style={{
            textAlign: 'center',
            padding: '3rem 0',
            backgroundColor: '#1E1E1E',
            borderRadius: '12px',
            marginBottom: '3rem',
            border: '1px solid #333'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
              Especialidades con Expertos Internacionales
            </h2>
            <p style={{ color: '#B4B4B4', marginBottom: '2rem' }}>
              Inscripciones abiertas para la próxima gestión • Plazas limitadas
            </p>
            <Link to="/contacto" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#1565c0',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease'
            }}>
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section className="masterclass-section" style={{ padding: '4rem 0', backgroundColor: '#0F0F0F' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFFFFF' }}>
              Masterclass
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#B4B4B4' }}>
              Cursos intensivos de alta especialización con expertos
            </p>
          </div>
          
          <div className="diplomados-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/biomimetica.jpg" alt="Masterclass Biomimética" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
                <div className="card-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
                }}></div>
              </div>
              <div className="card-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  Masterclass Biomimética
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Técnicas avanzadas de restauración biomimética que imita la naturaleza del diente con materiales de última generación.
                </p>
                <div className="card-meta" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <span className="duration" style={{ 
                    backgroundColor: '#1565c0',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>3 días</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>1500 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('biomimetica')}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>

            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/carillas.jpg" alt="Masterclass Carillas" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} />
                <div className="card-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
                }}></div>
              </div>
              <div className="card-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  Masterclass Carillas
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Diseño y confección de carillas de porcelana con técnicas mínimamente invasivas para sonrisas perfectas.
                </p>
                <div className="card-meta" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <span className="duration" style={{ 
                    backgroundColor: '#1565c0',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>4 días</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>1500 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('carillas')}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#1565c0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
          
          <div className="cta-section" style={{
            textAlign: 'center',
            padding: '3rem 0',
            backgroundColor: '#1E1E1E',
            borderRadius: '12px',
            border: '1px solid #333'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FFFFFF' }}>
              Masterclass con Expertos
            </h2>
            <p style={{ color: '#B4B4B4', marginBottom: '2rem' }}>
              Cursos intensivos • Certificación internacional • Cupos limitados
            </p>
            <Link to="/contacto" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#1565c0',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease'
            }}>
              Reservar Cupo
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative',
              border: '1px solid #333'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span 
              className="close"
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2rem',
                cursor: 'pointer',
                color: '#B4B4B4',
                zIndex: 1001
              }}
            >
              &times;
            </span>
            <div className="modal-header" style={{ padding: '2rem 2rem 1rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#FFFFFF' }}>
                {modalContent.title}
              </h2>
            </div>
            <div 
              className="modal-body"
              style={{ padding: '0 2rem 2rem', color: '#B4B4B4', lineHeight: '1.6' }}
              dangerouslySetInnerHTML={{ __html: modalContent.body }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Especialidades;
