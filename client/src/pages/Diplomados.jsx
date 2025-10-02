import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RedSquare from '../components/RedSquare';

function Diplomados() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  useEffect(() => {
    document.title = 'Diplomados - CEIO';
  }, []);

  const diplomadosData = {
    ortodoncia: {
      title: "Ortodoncia Integral",
      duration: "12 meses",
      price: "9,500 Bs",
      schedule: "Viernes y Sábados",
      hours: "8:00 AM - 5:00 PM",
      description: "Programa integral que abarca desde diagnóstico hasta tratamientos avanzados en ortodoncia.",
      content: [
        "Diagnóstico y planificación ortodóntica",
        "Ortodoncia con brackets metálicos y estéticos",
        "Sistemas de alineadores transparentes",
        "Ortodoncia interceptiva en niños",
        "Aparatos funcionales y ortopédicos",
        "Retención y estabilidad post-tratamiento",
        "Casos complejos y cirugía ortognática",
        "Práctica clínica supervisada"
      ],
      requirements: [
        "Título de Odontólogo",
        "Colegiatura vigente",
        "2 años de experiencia mínima"
      ]
    },
    endodoncia: {
      title: "Endodoncia Moderna",
      duration: "10 meses",
      price: "7,200 Bs",
      schedule: "Sábados",
      hours: "8:00 AM - 5:00 PM",
      description: "Técnicas avanzadas en tratamiento de conductos con tecnología de punta.",
      content: [
        "Diagnóstico endodóntico avanzado",
        "Instrumentación rotatoria y recíproca",
        "Irrigación y desinfección del sistema de conductos",
        "Obturación tridimensional",
        "Retratamientos endodónticos",
        "Cirugía endodóntica",
        "Manejo de perforaciones y calcificaciones",
        "Práctica clínica intensiva"
      ],
      requirements: [
        "Título de Odontólogo",
        "Colegiatura vigente",
        "1 año de experiencia mínima"
      ]
    },
    cirugia: {
      title: "Cirugía Oral",
      duration: "6 meses",
      price: "7,800 Bs",
      schedule: "Sábados",
      hours: "8:00 AM - 4:00 PM",
      description: "Procedimientos quirúrgicos orales y maxilofaciales con técnicas actualizadas.",
      content: [
        "Cirugía de terceros molares",
        "Implantología básica",
        "Cirugía periodontal",
        "Frenectomías y cirugía de tejidos blandos",
        "Biopsias orales",
        "Manejo de complicaciones",
        "Sedación consciente",
        "Casos clínicos supervisados"
      ],
      requirements: [
        "Título de Odontólogo",
        "Colegiatura vigente",
        "Experiencia básica en cirugía"
      ]
    },
    estetica: {
      title: "Odontología Estética",
      duration: "7 meses",
      price: "7,300 Bs",
      schedule: "Domingos",
      hours: "8:00 AM - 4:00 PM",
      description: "Rehabilitación estética con carillas, coronas y blanqueamientos profesionales.",
      content: [
        "Principios de estética dental",
        "Carillas de porcelana y resina",
        "Coronas estéticas",
        "Blanqueamiento profesional",
        "Reconstrucciones estéticas",
        "Fotografía dental",
        "Comunicación con laboratorio",
        "Casos clínicos integrales"
      ],
      requirements: [
        "Título de Odontólogo",
        "Colegiatura vigente",
        "Conocimientos básicos de operatoria"
      ]
    },
    armonizacion: {
      title: "Armonización Orofacial",
      duration: "6 meses",
      price: "9,400 Bs",
      schedule: "Sábados",
      hours: "9:00 AM - 5:00 PM",
      description: "Técnicas avanzadas en estética facial, rellenos y tratamientos mínimamente invasivos.",
      content: [
        "Anatomía facial aplicada",
        "Toxina botulínica en odontología",
        "Rellenos faciales con ácido hialurónico",
        "Armonización del tercio inferior",
        "Protocolos de seguridad",
        "Manejo de complicaciones",
        "Bioestimuladores de colágeno",
        "Práctica en modelos y pacientes"
      ],
      requirements: [
        "Título de Odontólogo",
        "Colegiatura vigente",
        "Curso de bioseguridad",
        "3 años de experiencia mínima"
      ]
    },
    implantologia: {
      title: "Implantología Oral",
      duration: "8 meses",
      price: "8,000 Bs",
      schedule: "Viernes y Sábados",
      hours: "8:00 AM - 6:00 PM",
      description: "Formación integral en implantes dentales con énfasis en técnicas quirúrgicas y rehabilitación.",
      content: [
        "Diagnóstico e indicaciones",
        "Planificación digital",
        "Técnicas quirúrgicas básicas y avanzadas",
        "Carga inmediata",
        "Regeneración ósea guiada",
        "Manejo de tejidos blandos",
        "Prótesis sobre implantes",
        "Complicaciones y mantenimiento"
      ],
      requirements: [
        "Título de Odontólogo",
        "Colegiatura vigente",
        "Experiencia en cirugía oral",
        "2 años de experiencia mínima"
      ]
    }
  };

  const openModal = (program) => {
    const data = diplomadosData[program];
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
          {/* Video Background for Diplomados */}
          <video autoPlay muted loop playsInline style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0
          }}>
            <source src="/videos/video-diplomados.mp4" type="video/mp4" />
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
              radial-gradient(circle at 30% 70%, rgba(0, 163, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)
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
            }}>Diplomados</h1>
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
              Programas especializados que transforman
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
                }}>6+</div>
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
                }}>+200</div>
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
                }}>15+</div>
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

      {/* Diplomados Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#0F0F0F', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFFFFF' }}>
              Nuestros Programas
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#B4B4B4' }}>
              Formación especializada con certificación internacional
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Ortodoncia */}
            <div style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/ortodoncia.jpg" alt="Ortodoncia Integral" style={{
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
                  Ortodoncia Integral
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Técnicas avanzadas en corrección dental y facial con brackets, alineadores y aparatos funcionales
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
                  }}>12 meses</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>9,500 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('ortodoncia')}
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

            {/* Endodoncia */}
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/endodoncia.jpg" alt="Endodoncia Moderna" style={{
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
                  Endodoncia Moderna
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Tratamiento de conductos con tecnología de punta y técnicas mínimamente invasivas
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
                  }}>10 meses</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>7,200 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('endodoncia')}
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

            {/* Cirugía */}
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/cirugia.jpg" alt="Cirugía Oral" style={{
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
                  Cirugía Oral
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Procedimientos quirúrgicos orales y maxilofaciales con técnicas actualizadas
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
                  }}>6 meses</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>7,800 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('cirugia')}
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

            {/* Estética */}
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/estetica.jpg" alt="Odontología Estética" style={{
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
                  Odontología Estética
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Rehabilitación estética con carillas, coronas y blanqueamientos profesionales
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
                  }}>7 meses</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>7,300 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('estetica')}
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

            {/* Armonización */}
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/armonizacion.jpg" alt="Armonización Orofacial" style={{
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
                  Armonización Orofacial
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Técnicas avanzadas en estética facial, rellenos y tratamientos mínimamente invasivos
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
                  }}>6 meses</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>9,400 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('armonizacion')}
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

            {/* Implantología */}
            <div className="diplomado-card" style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              border: '1px solid #333'
            }}>
              <div className="card-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="/images/implantologia.jpg" alt="Implantología Oral" style={{
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
                  Implantología Oral
                </h3>
                <p style={{ color: '#B4B4B4', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Formación integral en implantes dentales con énfasis en técnicas quirúrgicas y rehabilitación
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
                  }}>8 meses</span>
                  <span className="price" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>8,000 Bs</span>
                </div>
                <button 
                  className="card-cta"
                  onClick={() => openModal('implantologia')}
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
              ¿Listo para transformar tu carrera?
            </h2>
            <p style={{ color: '#B4B4B4', marginBottom: '2rem' }}>
              Inscripciones abiertas • Cupos limitados • Certificación internacional
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
              Inscríbete ahora
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

export default Diplomados;