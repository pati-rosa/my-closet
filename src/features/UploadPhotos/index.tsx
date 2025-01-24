import { Button } from '@mui/material';
import React from 'react';
import { uploadImage } from '../../firebase';
import ImageGallery from '../../ImageGallery';

const UploadPhotos = () => {
  return (
    <div className="App">
    <header className="App-header">
      <p>
       Meu guarda roupa virtual
      </p>
      <p>
       Adicione peças de roupas e monte looks
      </p>
      <div className="button-container">
        <Button variant="contained" component="label" >
        {"Adicionar parte de cima"}
          <input hidden type="file" onChange={(e) => { if (e.target.files) uploadImage(e.target.files[0], 'top-clothes'); }} id='uploadUpImage'/>
        </Button>
        <Button variant="contained" component="label" >
        {"Adicionar parte de baixo"}
        <input hidden type="file" onChange={(e) => { if (e.target.files) uploadImage(e.target.files[0], 'underwear'); }} id='uploadUnderwearImage'/>        
        </Button>
      </div>
    </header>
  </div>
  );
};

export default UploadPhotos;
