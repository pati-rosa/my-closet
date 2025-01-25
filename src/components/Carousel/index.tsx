import React, { useState } from 'react';
import { carouselContainer, imageContent, button } from './style';

interface CarouselProps {
    images: string[];
    imageState: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, imageState }) => {
    const [curentIndex, setCurentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleNextClick = () => {
        setCurentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
    };

    return(
        <div style={carouselContainer}>
            {imageState === 'loading' && <p>Carregando...</p>}
            {imageState === 'error' && <p>Erro ao carregar as imagens</p>}
            {imageState === 'success' && (
            <>
                <button style={button} onClick={handlePrevClick}>{'<'}</button>
                <img src={images[curentIndex]} style={imageContent}/>
                <button style={button} onClick={handleNextClick}>{'>'}</button>
            </>)
            }
        </div>
    )
   
};

export default Carousel;
