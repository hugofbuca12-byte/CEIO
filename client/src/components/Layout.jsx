import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../styles/bloom-styles.css';
import '../styles/styles.css';

const Layout = () => {
  const location = useLocation();
  const isDiplomadosPage = location.pathname === '/diplomados';
  const isEspecialidadesPage = location.pathname === '/especialidades';
  const showDiplomados = isDiplomadosPage || isEspecialidadesPage;
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="main-nav" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(15, 15, 15, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #404040',
        padding: '1rem 0'
      }}>
        <div className="nav-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <div className="nav-brand" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
                <img src="/images/logo-ceio.png" alt="CEIO Logo" className="nav-logo" style={{
                  height: '40px',
                  width: 'auto'
                }} />
                <span className="brand-text" style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #00A3FF 0%, #9D4EDD 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.025em'
                }}>CEIO</span>
            </div>
            <ul className="nav-menu" style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0
            }}>
                {showDiplomados ? (
                  <li><Link to="/especialidades" style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.2s ease'
                  }}>Especialidades</Link></li>
                ) : (
                  <li><Link to="/" style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.2s ease'
                  }}>Acerca de</Link></li>
                )}
                {showDiplomados ? (
                  <li><Link to="/diplomados" style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.2s ease'
                  }}>Diplomados</Link></li>
                ) : (
                  <li><Link to="/diplomados" style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.2s ease'
                  }}>Programas</Link></li>
                )}
                <li><Link to="/direcciones" style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}>Sedes</Link></li>
                <li><Link to="/practicas" style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}>Prácticas</Link></li>
                <li><Link to="/contacto" style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}>Contacto</Link></li>
            </ul>
            <div className="nav-actions" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
                <button className="nav-btn secondary" style={{
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  border: '1px solid #404040',
                  color: '#FFFFFF',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>Iniciar sesión</button>
                <button className="nav-btn primary" style={{
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, #00A3FF 0%, #9D4EDD 100%)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>Únete ahora</button>
            </div>
        </div>
      </nav>

      <main style={{ flex: '1', paddingTop: '100px' }}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>Contacto</h3>
                <p>📍 Calle Hermanos Manchego, La Paz, Bolivia</p>
                <p>📞 +591 62367086</p>
                <p>📧 ceiodj2020@gmail.com</p>
            </div>
            <div className="footer-section">
                <h3>Programas</h3>
                <p><Link to="/diplomados">Diplomados</Link></p>
                <p><Link to="/especialidades">Especialidades</Link></p>
                <p><Link to="/especialidades#masterclass">Cursos Cortos</Link></p>
            </div>
            <div className="footer-section">
                <h3>Información</h3>
                <p><Link to="/">Sobre Nosotros</Link></p>
                <p><Link to="/direcciones">Instalaciones</Link></p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
