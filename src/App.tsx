import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateLooks from './features/CreateLooks';
import UploadPhotos from './features/UploadPhotos';
import Navbar from './components/NavBar';

import './App.css';

const queryClient = new QueryClient();

function  App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<UploadPhotos />} />
          <Route path="/create-looks" element={<CreateLooks />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
