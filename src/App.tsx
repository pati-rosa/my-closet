import React from 'react';
import './App.css';
import CreateLooks from './features/CreateLooks';
import UploadPhotos from './features/UploadPhotos';
import Navbar from './components/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function  App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<UploadPhotos />} />
        <Route path="/create-looks" element={<CreateLooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
