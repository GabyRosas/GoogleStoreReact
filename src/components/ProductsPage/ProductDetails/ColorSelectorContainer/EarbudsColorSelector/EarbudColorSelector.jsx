/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
<<<<<<<< HEAD:src/components/ColorSelectorContainer/EarbudsColorSelector/EarbudColorSelector.jsx
import { useCart } from '../../../customHooks/useCart';
========
import { useCart } from '../../../../../customHooks/useCart';
>>>>>>>> 70f3103751f60b5697ec6e8084b146d0f16b40c7:src/components/ProductsPage/ProductDetails/ColorSelectorContainer/EarbudsColorSelector/EarbudColorSelector.jsx
import classes from './EarbudsColorSelector.module.css'

const EarbudColorSelector = ({ color, handleClick }) => {
    const [isSelected, setIsSelected] = useState(false);
    const { selectedColor, setSelectedColor } = useCart(); 
    useEffect(() => {
        setIsSelected(selectedColor === color.code);
    }, [selectedColor, color.code])

    const handleButtonClick = () => {
        setSelectedColor(color.code); 
        handleClick(color);
    };

    return (
        <li className={`transition-[border-color] duration-[0.3s] ease-[ease] border-2 border-solid rounded-[50%] border-transparent p-1 ${isSelected ? classes.selected : ""}`}>
            <button
                className={`w-9 h-9 border border-[color:var(--col-secondary)] rounded-[50%] border-solid cursor-pointer`}
                style={{ backgroundColor: color.code }}
                aria-label={color.name}
                onClick={handleButtonClick}
            >
                <span className='sr-only'>{color.name}</span>
            </button>
        </li>
    );
}

export default EarbudColorSelector;
