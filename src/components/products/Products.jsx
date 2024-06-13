/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../product-details/ProductDetails';
import ProductImages from '../product-images/ProductImages';
import AddToCart from '../add-to-cart/AddToCart';
import DetailsLink from '../details-link/DetailsLink';



const Products = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/data.json'); // Corretto il percorso
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const product = productId ? products.find(p => p.id === parseInt(productId)) : products[0];

    if (!product) return <p>Product not found</p>;

    return (
        <>
            <DetailsLink />
            <main className="grid gap-5 lg:grid-cols-[auto_35%] grid-cols-1 px-[22px] h-full ">
                <ProductImages images={product.images} name={product.name} category={product.category} />
                <div>
                    <ProductDetails product={product} />
                    <AddToCart product={product} />
                </div>
            </main>
        </>
    );
}

export default Products;
