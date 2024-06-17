/* eslint-disable react/prop-types */
<<<<<<<< HEAD:src/components/AddToCart/AddToCartForm/AddToCartForm.jsx
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import { useCart } from "../../../customHooks/useCart";
========
import Button from "../button/Button";
import { useCart } from "../../../../customHooks/useCart";
>>>>>>>> 70f3103751f60b5697ec6e8084b146d0f16b40c7:src/components/ProductsPage/AddToCart/AddToCartForm/AddToCartForm.jsx
import { useState } from "react";

const AddToCartForm = ({ product, selectedColor }) => {
    const { addToCart } = useCart(); 
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedColor); 
    };

    return (
        <form className="flex flex-col gap-2.5">
            <label className="sr-only">Quantity</label>
            <select
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-[color:var(--col-secondary)] w-1/5 p-2.5 rounded-[5px] border-solid"
            >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <PrimaryButton text="Add to Cart" handleClick={handleAddToCart} />
        </form>
    );
};

export default AddToCartForm;
