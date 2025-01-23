import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchImages, uploadImage } from './firebase'; // Ou o caminho do seu arquivo
import { Input, Button } from '@mui/material';
function  App() {

  let fetchTopClothes = fetchImages("top-clothes")
  let fetchUnderwear = fetchImages("underwear")
  console.log('fetch',fetchTopClothes,fetchUnderwear)

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         Meu guarda roupa virtual
        </p>
        <p>
         Adicione peças de roupas e monte looks
        </p>
        <div className="button-container">
          <Button variant="contained" component="label" >
          {"Adicionar parte de cima"}
            <input hidden type="file" onChange={(e) => uploadImage(e.target.files[0],'top-clothes')} id='uploadUpImage'/>
          </Button>

          <Button variant="contained" component="label" >
          {"Adicionar parte de baixo"}
          <input hidden type="file" onChange={(e) => uploadImage(e.target.files[0],'underwear')} id='uploadUnderwearImage'/>        
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
