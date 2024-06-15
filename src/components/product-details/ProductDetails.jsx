/* eslint-disable react/prop-types */

import ColorSelectorContainer from "../color-selector-container/ColorSelectorContainer";
import ProductsHeader from "../products-header/ProductsHeader";

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