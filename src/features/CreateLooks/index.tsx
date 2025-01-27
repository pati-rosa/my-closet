import React from 'react';
import { Typography } from '@mui/material';
import { useQuery } from 'react-query';

import { fetchImages } from '../../utils/firebase';
import Carousel from '../../components/Carousel';
import { useUser } from '../../context/useUser';

import { createLooksContainer } from './style';



const CreateLooks: React.FC = () => {
  const { uid } = useUser();

  const { data: topClothes, status: statusTopClothes } = useQuery(
    ['top-clothes', uid],
    () => fetchImages('top-clothes', uid),
    { enabled: !!uid }
  );

  const { data: underwear, status: statusUnderwear } = useQuery(
    ['underwear', uid],
    () => fetchImages('underwear', uid),
    { enabled: !!uid }
  );
  
  console.log('statusTopClothes',statusTopClothes)
  return (
    <div style={createLooksContainer}>
      <Typography variant='h6'>Crie seu look passando pelas suas camisetas, calças ou shorts</Typography>
      <Carousel images={topClothes!} imageState={statusTopClothes} clothType='top-clothes'/>
      <Carousel images={underwear!} imageState={statusUnderwear} clothType='underwear'/>
    </div>
  )
}

export default CreateLooks;
