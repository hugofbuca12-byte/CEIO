import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    // Add CSS animations for hero background
    const styleSheet = document.styleSheets[0];
    const keyframes1 = `
      @keyframes slowZoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
      }
    `;
    const keyframes2 = `
      @keyframes gradientShift {
        0% { opacity: 0.8; }
        50% { opacity: 0.6; }
        100% { opacity: 0.8; }
      }
    `;
    
    try {
      styleSheet.insertRule(keyframes1, styleSheet.cssRules.length);
      styleSheet.insertRule(keyframes2, styleSheet.cssRules.length);
    } catch (e) {
      // Fallback if insertRule fails
      const style = document.createElement('style');
      style.textContent = keyframes1 + keyframes2;
      document.head.appendChild(style);
    }

    // Debug video loading
    const video = document.querySelector('.hero-background video');
    if (video) {
      video.addEventListener('loadstart', () => console.log('Video: Loading started'));
      video.addEventListener('canplay', () => console.log('Video: Can start playing'));
      video.addEventListener('playing', () => console.log('Video: Started playing'));
      video.addEventListener('error', (e) => console.error('Video error:', e));
    }
    // Carousel functionality
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let autoSlideInterval;

    // Initialize carousel
    function initCarousel() {
      showSlide(0);
      startAutoSlide();
    }

    // Show specific slide
    function showSlide(index) {
      const track = document.getElementById('carouselTrack');
      
      if (!track) return; // Guard clause if element doesn't exist yet
      
      // Ensure index is within bounds
      if (index >= totalSlides) {
        currentSlideIndex = 0;
      } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
      } else {
        currentSlideIndex = index;
      }

      // Move track
      const translateX = -currentSlideIndex * 100;
      track.style.transform = `translateX(${translateX}%)`;

      // Update active states
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlideIndex);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
      });
    }

    // Move slide (used by arrow buttons)
    window.moveSlide = function(direction) {
      showSlide(currentSlideIndex + direction);
      resetAutoSlide();
    }

    // Go to specific slide (used by dots)
    window.currentSlide = function(index) {
      showSlide(index - 1); // Convert to 0-based index
      resetAutoSlide();
    }

    // Auto slide functionality
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
      }, 12000); // Change slide every 12 seconds
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Initialize carousel when component mounts
    const timer = setTimeout(initCarousel, 100); // Small delay to ensure DOM is ready

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(autoSlideInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bloom" style={{
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
          {/* Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
            onError={(e) => {
              console.log('Video failed to load:', e);
              // Hide video and show fallback
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'block';
            }}
          >
            <source src="/videos/video-fondo.mp4" type="video/mp4" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
            Su navegador no soporta videos HTML5.
          </video>
          
          {/* Fallback image (hidden by default) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/slide1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            display: 'none',
            animation: 'slowZoom 20s ease-in-out infinite alternate'
          }}></div>
          
          {/* Video overlay */}
          <div className="hero-overlay" style={{
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
        </div>
        <div className="hero-container" style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '0 1.5rem'
        }}>
          <div className="hero-content-bloom" style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              color: '#FFFFFF',
              marginBottom: '2rem',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, sans-serif'
            }}>Toma el control de tu carrera en odontología</h1>
            <Link to="/diplomados" 
              className="cta-button" 
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.background = 'linear-gradient(135deg, #0088CC 0%, #8A2BE2 100%)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'linear-gradient(135deg, #00A3FF 0%, #9D4EDD 100%)';
              }}
              style={{
                display: 'inline-block',
                padding: '1.2rem 2.5rem',
                background: 'linear-gradient(135deg, #00A3FF 0%, #9D4EDD 100%)',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'Inter, sans-serif',
                boxShadow: 'none'
              }}>Únete ahora</Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section" style={{ padding: '4rem 0' }}>
        <div className="carousel-content">
          <div className="section-header" style={{
            maxWidth: '1200px',
            margin: '0 auto 2rem',
            padding: '0 1.5rem',
            textAlign: 'center'
          }}>
            <div className="section-label" style={{
              color: '#00A3FF',
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>PROMOCIONES Y NOTICIAS</div>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}>Mantente Informado</h2>
            <p style={{
              color: '#B4B4B4',
              fontSize: '1.125rem',
              lineHeight: '1.6'
            }}>Descubre nuestras últimas promociones y noticias más importantes</p>
          </div>
          
          <div className="carousel-container" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            borderRadius: '1rem',
            overflow: 'hidden',
            height: '500px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <div className="carousel-track" id="carouselTrack" style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              height: '100%'
            }}>
              <div className="carousel-slide active" style={{
                minWidth: '100%',
                position: 'relative',
                background: '#0F0F0F',
                display: 'flex',
                alignItems: 'center',
                height: '500px',
                overflow: 'hidden'
              }}>
                <div className="slide-image" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}>
                  <img src="/images/fondo1.jpg" alt="Promoción 1" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(15, 15, 15, 0.5) 50%, rgba(15, 15, 15, 0.8) 100%)',
                    zIndex: 2
                  }}></div>
                </div>
                <div className="slide-content" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  maxWidth: '800px',
                  textAlign: 'center',
                  zIndex: 3,
                  padding: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>Promoción Especial</h3>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                    fontWeight: '400'
                  }}>Descuentos exclusivos en nuestros programas de especialización</p>
                </div>
              </div>
              
              <div className="carousel-slide" style={{
                minWidth: '100%',
                position: 'relative',
                background: '#0F0F0F',
                display: 'flex',
                alignItems: 'center',
                height: '500px',
                overflow: 'hidden'
              }}>
                <div className="slide-image" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}>
                  <img src="/images/fondo2.jpg" alt="Promoción 2" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(15, 15, 15, 0.5) 50%, rgba(15, 15, 15, 0.8) 100%)',
                    zIndex: 2
                  }}></div>
                </div>
                <div className="slide-content" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  maxWidth: '800px',
                  textAlign: 'center',
                  zIndex: 3,
                  padding: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>Diplomados en Preventa</h3>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                    fontWeight: '400'
                  }}>Asegura tu cupo en nuestros próximos diplomados con descuentos especiales y beneficios exclusivos para inscripciones anticipadas</p>
                </div>
              </div>
              
              <div className="carousel-slide" style={{
                minWidth: '100%',
                position: 'relative',
                background: '#0F0F0F',
                display: 'flex',
                alignItems: 'center',
                height: '500px',
                overflow: 'hidden'
              }}>
                <div className="slide-image" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}>
                  <img src="/images/fondo3.jpg" alt="Promoción 3" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(15, 15, 15, 0.5) 50%, rgba(15, 15, 15, 0.8) 100%)',
                    zIndex: 2
                  }}></div>
                </div>
                <div className="slide-content" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  maxWidth: '800px',
                  textAlign: 'center',
                  zIndex: 3,
                  padding: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>Masterclass de Solo 3 Días</h3>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                    fontWeight: '400'
                  }}>Aprovecha nuestros intensivos de fin de semana: viernes, sábado y domingo. Formación especializada concentrada con los mejores profesionales del sector</p>
                </div>
              </div>
              
              <div className="carousel-slide" style={{
                minWidth: '100%',
                position: 'relative',
                background: '#0F0F0F',
                display: 'flex',
                alignItems: 'center',
                height: '500px',
                overflow: 'hidden'
              }}>
                <div className="slide-image" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}>
                  <img src="/images/fondo4.jpg" alt="Promoción 4" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(15, 15, 15, 0.5) 50%, rgba(15, 15, 15, 0.8) 100%)',
                    zIndex: 2
                  }}></div>
                </div>
                <div className="slide-content" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  maxWidth: '800px',
                  textAlign: 'center',
                  zIndex: 3,
                  padding: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>Especialidades con Expertos Internacionales</h3>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                    fontWeight: '400'
                  }}>Aprende de los mejores especialistas. Nuestros programas cuentan con profesores visitantes de prestigiosas universidades internacionales y técnicas de vanguardia</p>
                </div>
              </div>
              
              <div className="carousel-slide" style={{
                minWidth: '100%',
                position: 'relative',
                background: '#0F0F0F',
                display: 'flex',
                alignItems: 'center',
                height: '500px',
                overflow: 'hidden'
              }}>
                <div className="slide-image" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}>
                  <img src="/images/fondo5.jpg" alt="Promoción 5" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(15, 15, 15, 0.5) 50%, rgba(15, 15, 15, 0.8) 100%)',
                    zIndex: 2
                  }}></div>
                </div>
                <div className="slide-content" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  maxWidth: '800px',
                  textAlign: 'center',
                  zIndex: 3,
                  padding: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>Diplomados con Expertos Nacionales</h3>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                    fontWeight: '400'
                  }}>Accede a la experiencia de los mejores profesionales bolivianos. Diplomados dirigidos por especialistas reconocidos a nivel nacional con amplia trayectoria</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="carousel-dots" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              padding: '2rem 0',
              background: '#0F0F0F'
            }}>
              <button className="dot active" onClick={() => window.currentSlide(1)} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: '#00A3FF',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}></button>
              <button className="dot" onClick={() => window.currentSlide(2)} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: '#404040',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}></button>
              <button className="dot" onClick={() => window.currentSlide(3)} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: '#404040',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}></button>
              <button className="dot" onClick={() => window.currentSlide(4)} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: '#404040',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}></button>
              <button className="dot" onClick={() => window.currentSlide(5)} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: '#404040',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}></button>
            </div>
            
            {/* Navigation Arrows */}
            <button className="carousel-nav prev" onClick={() => window.moveSlide(-1)} style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(15, 15, 15, 0.8)',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button className="carousel-nav next" onClick={() => window.moveSlide(1)} style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(15, 15, 15, 0.8)',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="acerca">
        <div className="about-content">
          <div className="about-text">
            <div className="section-label">ACERCA DE NOSOTROS</div>
            <h2>Centro de Enseñanza Integral en Odontología</h2>
            <p className="about-description">
              CEIO es la institución enfocada en la educación odontológica especializada en Bolivia. Con 5 años de experiencia, formamos profesionales que destacan en el campo de la odontología moderna.
            </p>
            <p className="about-description">
              Nuestros programas están diseñados con los más altos estándares nacionales, utilizando metodologías innovadoras para garantizar una formación integral de nuestros estudiantes.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/slide1.jpg" alt="Centro CEIO - Instalaciones modernas" className="about-img" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-preview">
        <div className="programs-content">
          <div className="section-header">
            <div className="section-label">NUESTROS PROGRAMAS</div>
            <h2>Formación Especializada de Primer Nivel</h2>
            <p>Descubre nuestros programas diseñados para impulsar tu carrera profesional</p>
          </div>
          <div className="programs-grid">
            <Link to="/diplomados" className="program-card">
              <div className="card-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Diplomados</h3>
                <p>Programas especializados de 6 a 12 meses</p>
                <span className="card-link">Ver diplomados →</span>
              </div>
            </Link>
            <Link to="/especialidades" className="program-card">
              <div className="card-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Especialidades</h3>
                <p>Formación avanzada de 18 a 24 meses</p>
                <span className="card-link">Ver especialidades →</span>
              </div>
            </Link>
            <Link to="/especialidades#masterclass" className="program-card">
              <div className="card-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Cursos Cortos</h3>
                <p>Actualización profesional continua</p>
                <span className="card-link">Ver cursos →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
