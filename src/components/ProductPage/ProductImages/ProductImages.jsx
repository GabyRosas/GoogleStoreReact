/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useCart } from '../../../customHooks/useCart'; // Importa il contesto del carrello
import Thumbnails from './Thumbnails/Thumbnails';
import MainImage from './MainImage/MainImage';

const ImagesContainer = ({ images, name, category, colors }) => {
    const { selectedColor } = useCart(); 
    const [mainImage, setMainImage] = useState(images[0]);
    useEffect(() => {
        const selectedColorImage = colors.find(color => color.code === selectedColor)?.image;
        if (category === "fitbit" && selectedColorImage) {
            setMainImage(selectedColorImage);
        } else {
            setMainImage(images[0]);
        }
    }, [selectedColor, colors, images, category]);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const filteredImages = images.filter(image => image !== mainImage);

    if (category === 'earbuds') {
        return (
            <div className="grid align-center grid-cols-1 lg:grid-cols-[50px_auto] gap-10 ">
                <ul className="hidden lg:flex lg:flex-col justify-center gap-2.5 max-h-[70%]">
                    {filteredImages.map((image, index) => (
                        <Thumbnails
                            key={index}
                            image={image}
                            onClick={() => handleThumbnailClick(image)}
                        />
                    ))}
                </ul>
                <MainImage mainImage={mainImage} name={name} />
            </div>
        );
    } else {
        return (
            <MainImage mainImage={mainImage} name={name} />
        );
    }
};

export default ImagesContainer;
