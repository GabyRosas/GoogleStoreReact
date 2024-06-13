/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CircleImages from '../circle-images/CircleImages';
import MainImage from '../main-image/MainImage';

const ProductImages = ({ images, name, category }) => {
    const [mainImage, setMainImage] = useState(images[0]);
    const filteredImages = images.filter(image => image !== mainImage);

    useEffect(() => {
        setMainImage(images[0]);
    }, [images]);

    if (category === 'earbuds') {
        return (
            <div className="grid align-center grid-cols-1 lg:grid-cols-[50px_auto] gap-10">
                <ul className="flex lg:flex-col justify-center gap-2.5">
                    {filteredImages.map((image, index) => (
                        <CircleImages
                            key={index}
                            image={image}
                            onClick={() => setMainImage(image)}
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

export default ProductImages;
