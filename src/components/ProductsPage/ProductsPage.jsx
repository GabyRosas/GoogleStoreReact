/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
<<<<<<<< HEAD:src/components/ProductPage/ProductPage.jsx
import ProductImages from './ProductImages/ProductImages';
import AddToCart from '../AddToCart/AddToCart';
import DetailsLink from '../DetailsILink/DetailsLink';
import { useCart } from '../../customHooks/useCart'; 

const ProductPage = ({ category }) => {
========
import ProductImages from './ImagesContainer/ImagesContainer';
import AddToCart from './AddToCart/AddToCart';
import DetailsLink from '../DetailsLink/DetailsLink';
import { useCart } from '../../customHooks/useCart'; 

const ProductsPage = ({ category }) => {
>>>>>>>> 70f3103751f60b5697ec6e8084b146d0f16b40c7:src/components/ProductsPage/ProductsPage.jsx
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productId } = useParams();
    const { setSelectedColor, selectedColor } = useCart(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredProducts = data.products.filter(product => product.category === category);
                setProducts(filteredProducts);
                setLoading(false);
            } catch (error) {
                console.error('There was an error:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    useEffect(() => {
        if (products.length > 0) {
            const defaultProduct = productId ? products.find(p => p.id === parseInt(productId)) : products[0];
            if (defaultProduct) {
                setSelectedColor(defaultProduct.colors[0].code); 
            }
        }
    }, [products, productId, setSelectedColor]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const product = productId ? products.find(p => p.id === parseInt(productId)) : products[0];

    if (!product) return <p>Product not found</p>;

    return (
        <>
            <DetailsLink />
            <main className="grid gap-5 lg:grid-cols-[auto_35%] grid-cols-1 px-[22px] h-full">
                <ProductImages images={product.images} name={product.name} category={product.category} colors={product.colors} />
                <div>
                    <ProductDetails product={product} />
                    <AddToCart product={product} selectedColor={selectedColor} />
                </div>
            </main>
        </>
    );
}

<<<<<<<< HEAD:src/components/ProductPage/ProductPage.jsx
export default ProductPage;
========
export default ProductsPage;
>>>>>>>> 70f3103751f60b5697ec6e8084b146d0f16b40c7:src/components/ProductsPage/ProductsPage.jsx
