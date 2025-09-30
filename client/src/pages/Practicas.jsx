import React from 'react';
import { Link } from 'react-router-dom';

function Practicas() {
  return (
    <div className="practicas-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        position: 'relative', 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
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

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 2rem' }}>
          <h1 style={{ 
            color: 'white',
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: 'none'
          }}>
            Prácticas Profesionales
          </h1>
          <p style={{
            color: 'white',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: 'none'
          }}>
            Programa de prácticas profesionales para estudiantes de odontología
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
              Programa de Prácticas
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Ofrecemos oportunidades de prácticas profesionales para estudiantes de odontología en nuestras tres sedes
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{ 
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>Estudiantes</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Programa dirigido a estudiantes de odontología de últimos semestres que buscan experiencia práctica en un entorno profesional.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <i className="fas fa-user-md"></i>
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>Supervisión</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Nuestros especialistas brindan supervisión constante y mentoría personalizada durante todo el período de prácticas.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                backgroundColor: '#dc3545',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'white'
              }}>
                <i className="fas fa-certificate"></i>
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>Certificación</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Al completar el programa, los estudiantes reciben certificación de horas prácticas realizadas en nuestro centro.
              </p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
              Requisitos y Proceso de Aplicación
            </h3>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              <div>
                <h4 style={{ color: '#007bff', marginBottom: '1rem' }}>
                  <i className="fas fa-clipboard-check" style={{ marginRight: '0.5rem' }}></i>
                  Requisitos
                </h4>
                <ul style={{ lineHeight: '1.8', color: '#666' }}>
                  <li>Estar cursando últimos 2 semestres de carrera</li>
                  <li>Promedio académico mínimo de 70/100</li>
                  <li>Carta de recomendación de la universidad</li>
                  <li>Seguro estudiantil vigente</li>
                  <li>Disponibilidad de tiempo completo o parcial</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: '#28a745', marginBottom: '1rem' }}>
                  <i className="fas fa-list-ol" style={{ marginRight: '0.5rem' }}></i>
                  Proceso
                </h4>
                <ol style={{ lineHeight: '1.8', color: '#666' }}>
                  <li>Envío de documentos completos</li>
                  <li>Entrevista con coordinador de prácticas</li>
                  <li>Asignación de sede y especialidad</li>
                  <li>Inducción y orientación inicial</li>
                  <li>Inicio del programa de prácticas</li>
                </ol>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              ¿Interesado en realizar tus prácticas con nosotros?
            </h3>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
              Contacta con nosotros para más información sobre nuestro programa de prácticas
            </p>
            <Link 
              to="/contacto" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '12px 32px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-paper-plane"></i>
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* Sedes disponibles */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '2rem', color: '#333' }}>
            Sedes Disponibles para Prácticas
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>La Paz</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Calle Hermanos Manchego 2571<br />
                Zona Sopocachi
              </p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Santa Cruz</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Calle Los Claveles 35<br />
                Barrio Sirari Equipetrol
              </p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Cochabamba</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
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
