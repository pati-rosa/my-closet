import './App.css';
import CreateLooks from './features/CreateLooks';
import UploadPhotos from './features/UploadPhotos';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Adicionar roupas</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/create-looks" style={{ textDecoration: 'none', color: 'blue' }}>Criar Looks</Link>
        </li>
        <li>
          <Link to="/create-looks" style={{ textDecoration: 'none', color: 'blue' }}>Combinações de cores</Link>
        </li>
      </ul>
    </nav>
  );
};

function  App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<UploadPhotos />} />
        <Route path="/create-looks" element={<CreateLooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
