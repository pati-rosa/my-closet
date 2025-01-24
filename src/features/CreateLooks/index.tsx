import React, { useEffect, useState } from 'react';
import { createLooksContainer } from './style';
import Carousel from '../../components/Carousel';
import { fetchImages } from '../../utils/firebase';
import { Typography } from '@mui/material';


const CreateLooks: React.FC = () => {
  const [topClothes, setTopClothes] = useState<string[]>([]);
  const [underwear, setUnderwear] = useState<string[]>([]);

  useEffect(() => {
      const getImages = async () => {
        const urls: string[] | undefined = await fetchImages('top-clothes');
        if (urls) {
          setTopClothes(urls);
        }
      };
  
      getImages();
    },[]);

  useEffect(() => {
    const getImages = async () => {
      const urls: string[] | undefined = await fetchImages('underwear');
      if (urls) {
        setUnderwear(urls);
      }
    };

    getImages();
  },[]);
    
  return (
    <div style={createLooksContainer}>
      <Typography variant='h6'>Crie seu look passando pelas suas camisetas, calças ou shorts</Typography>
      <Carousel images={topClothes}/>
      <Carousel images={underwear}/>
    </div>
  )
}

export default CreateLooks;
