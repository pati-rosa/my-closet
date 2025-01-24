import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { fetchImages } from '../firebase'; 
interface ImageGalleryProps {
  clothingType: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ clothingType }) => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const getImages = async () => {
      const urls: string[] | undefined = await fetchImages(clothingType);
      if (urls) {
        setImages(urls);
      }
    };

    getImages();
  }, [clothingType]);

  return (
    <div>
      {images.map((url, index) => (
        <img draggable="false" key={index} src={url} alt={`Image ${index}`} style={{ width: 200, height: 200, margin: 10 }} />
      ))}
    </div>
  );
};

export default ImageGallery;
