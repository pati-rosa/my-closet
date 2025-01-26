import React, { useRef, useState } from 'react';
import { carouselContainer, imageContent, button } from './style';

interface CarouselProps {
    images: string[];
    imageState: string;
    clothType: 'top-clothes' | 'underwear';
}

const Carousel: React.FC<CarouselProps> = ({ images, imageState, clothType }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTouch, setStartTouch] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartTouch(e.clientX); 
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        console.log('mouse up',e.clientX);
        if (!isDragging) return;
        const endTouch = e.clientX;
        if (endTouch - startTouch > 50) {
            handlePrevClick(); 
        } else if (startTouch - endTouch > 50) {
            handleNextClick();
        }
        setIsDragging(false);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const endTouch = e.clientX;
        if (endTouch - startTouch > 50) {
            handlePrevClick();
        } else if (startTouch - endTouch > 50) {
            handleNextClick();
        }
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartTouch(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endTouch = e.changedTouches[0].clientX;
        if (endTouch - startTouch > 50) {
            handlePrevClick();
        } else if (startTouch - endTouch > 50) {
            handleNextClick();
        }
        setIsDragging(false);
    };

    return(
        <div 
            style={carouselContainer}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}  
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {imageState === 'loading' && <p>Carregando...</p>}
            {imageState === 'error' && <p>Erro ao carregar as imagens</p>}
            {imageState === 'success' && images.length > 0? (
            <>
                <button style={button} onClick={handlePrevClick}>{'<'}</button>
                <img draggable={false} src={images[currentIndex]} style={imageContent}/>
                <button style={button} onClick={handleNextClick}>{'>'}</button>
            </>) : <p>Você ainda não cadastrou {clothType === 'top-clothes' && 'suas blusinhas'} {clothType === 'underwear' && 'suas calças e shorts'} </p>
            }
        </div>
    )
   
};

export default Carousel;
