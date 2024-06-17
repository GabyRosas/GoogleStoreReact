/* eslint-disable react/prop-types */

<<<<<<<< HEAD:src/components/ProductPage/ProductDetails/ProductDetails.jsx
import ColorSelectorContainer from "../../ColorSelectorContainer/ColorSelectorContainer";
========
import ColorSelectorContainer from "./ColorSelectorContainer/ColorSelectorContainer";
>>>>>>>> 70f3103751f60b5697ec6e8084b146d0f16b40c7:src/components/ProductsPage/ProductDetails/ProductDetails.jsx
import ProductsHeader from "./ProductsHeader/ProductsHeader";

const ProductDetails = ({ product }) => {
    const { name, price, description } = product;
    return (
        <section className="grid grid-cols-[1fr] gap-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr]">
            <ProductsHeader
                name={name}
                description={description}
                price={price}
            />
            <ColorSelectorContainer product={product} />
        </section>
    );
};

export default ProductDetails;