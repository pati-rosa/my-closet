import React, { useEffect, useState } from 'react';
import { createLooksContainer } from './style';
import Carousel from '../../components/Carousel';
import { Typography } from '@mui/material';
import useFirebaseFetch from '../../hooks/useFirebaseFetch';
import { useQuery } from 'react-query';
import { fetchImages } from '../../utils/firebase';


const CreateLooks: React.FC = () => {

  const { data: topClothes, status: statusTopClothes } = useQuery('top-clothes', () => fetchImages('top-clothes'));
  const { data: underwear, status: statusUnderwear } = useQuery('underwear', () => fetchImages('underwear'));
  return (
    <div style={createLooksContainer}>
      <Typography variant='h6'>Crie seu look passando pelas suas camisetas, calças ou shorts</Typography>
      <Carousel images={topClothes!} imageState={statusTopClothes}/>
      <Carousel images={underwear!} imageState={statusUnderwear}/>
    </div>
  )
}

export default CreateLooks;
