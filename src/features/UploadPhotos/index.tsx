import { Button, Input, Typography } from '@mui/material';
import React from 'react';
import { uploadImage } from '../../utils/firebase';
import { uploadPhotosContainer, typography, addClothesContainer } from './style';

const UploadPhotos = () => {
  return (
    <div style={uploadPhotosContainer}>
      <Typography variant='h3' style={typography}>
       Meu guarda roupa virtual
      </Typography>
      <Typography variant='h6' style={typography}>
       Adicione peças de roupas e monte looks
      </Typography>
      <div style={addClothesContainer}>
        <Button variant="contained" component="label"  style={{backgroundColor: 'black'}}>
        {"Adicionar peça de cima"}
          <input hidden type="file" onChange={(e) => { if (e.target.files) uploadImage(e.target.files[0], 'top-clothes'); }} id='uploadUpImage'/>
        </Button>
        <Button variant="contained" component="label" style={{backgroundColor: 'black'}}>
        {"Adicionar peça de baixo"}
        <input hidden type="file" onChange={(e) => { if (e.target.files) uploadImage(e.target.files[0], 'underwear'); }} id='uploadUnderwearImage'/>        
        </Button>
      </div>
  </div>
  );
};

export default UploadPhotos;
