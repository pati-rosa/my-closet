import React from 'react';
import ImageGallery from '../../ImageGallery';

const CreateLooks = () => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <h2>Crie seus looks</h2>
      <p>crie seus looks passando pelas suas camisetas, calças ou shorts</p>
      <ImageGallery clothingType='top-clothes'/>
      <ImageGallery clothingType='underwear'/>
    </div>
  )
}

export default CreateLooks;
