import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Diplomados from './pages/Diplomados';
import Especialidades from './pages/Especialidades';
import Practicas from './pages/Practicas';
import Direcciones from './pages/Direcciones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="diplomados" element={<Diplomados />} />
          <Route path="especialidades" element={<Especialidades />} />
          <Route path="practicas" element={<Practicas />} />
          <Route path="direcciones" element={<Direcciones />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
