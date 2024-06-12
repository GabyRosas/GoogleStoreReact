import { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../public/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data.products)
                setProducts(data.products);
                setLoading(false);
            } catch (error) {
                console.error('There was an error:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-page">
            <ProductImages images={product.images} />
            <ProductDetails details={product.details} />
            <AddToCart price={product.price} />
        </div>
    );
}

export default Products;
