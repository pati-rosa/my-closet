import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import useFirebaseUpload from '../../hooks/useFirebaseUpload';
import { uploadPhotosContainer, typography, addClothesContainer } from './style';

const UploadPhotos = () => {
  const [fileTopClothes, setFileTopClothes] = useState<File | null>(null);
  const [fileUnderwear, setFileUnderwear] = useState<File | null>(null);

  const { uploadState: uploadStateTopClothes } = useFirebaseUpload(fileTopClothes, 'top-clothes');
  const { uploadState: uploadStateUnderwear } = useFirebaseUpload(fileUnderwear, 'underwear');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div style={uploadPhotosContainer}>
      <Typography variant='h3' style={typography}>
        Meu guarda roupa virtual
      </Typography>
      <Typography variant='h6' style={typography}>
        Adicione peças de roupas e monte looks
      </Typography>
      <div style={addClothesContainer}>
        <Button variant="contained" component="label" style={{ backgroundColor: 'black' }}>
          {"Adicionar peça de cima"}
          <input hidden type="file" onChange={(e) => handleFileChange(e, setFileTopClothes)} id='uploadUpImage' />
        </Button>
        {uploadStateTopClothes === 'loading' && <p>Uploading...</p>}
        {uploadStateTopClothes === 'success' && <p>Upload successful!</p>}

        <Button variant="contained" component="label" style={{ backgroundColor: 'black' }}>
          {"Adicionar peça de baixo"}
          <input hidden type="file" onChange={(e) => handleFileChange(e, setFileUnderwear)} id='uploadUnderwearImage' />
        </Button>
        {uploadStateUnderwear === 'loading' && <p>Uploading...</p>}
        {uploadStateUnderwear === 'success' && <p>Upload successful!</p>}
      </div>
    </div>
  );
};

export default UploadPhotos;