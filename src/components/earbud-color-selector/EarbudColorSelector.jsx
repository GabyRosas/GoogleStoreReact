/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCart } from '../../customHooks/useCart';
import classes from './EarbudsColorSelector.module.css'

const EarbudColorSelector = ({ color, handleClick }) => {
    const [isSelected, setIsSelected] = useState(false);
    const { selectedColor } = useCart();

    useEffect(() => {
        setIsSelected(selectedColor === color.code);
    }, [selectedColor, color.code])
    
    return (
        <li className={`transition-[border-color] duration-[0.3s] ease-[ease] border-2 border-solid rounded-[50%] border-transparent p-1 ${isSelected ? classes.selected : ""}`}>
            <button
                className={`w-9 h-9 border border-[color:var(--col-secondary)] rounded-[50%] border-solid cursor-pointer
                `}
                style={{ backgroundColor: color.code }}
                aria-label={color.name}
                onClick={() => handleClick(color)}
            >
                <span className='sr-only'>{color.name}</span>
            </button>
        </li>
    );
}

export default EarbudColorSelector;