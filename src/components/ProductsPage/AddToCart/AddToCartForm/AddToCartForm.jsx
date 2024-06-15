/* eslint-disable react/prop-types */
import Button from "../button/Button";
import { useCart } from "../../../../customHooks/useCart";
import { useState } from "react";

const QuantityForm = ({ product, selectedColor }) => {
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
            <Button text="Add to Cart" handleClick={handleAddToCart} />
        </form>
    );
};

export default QuantityForm;
