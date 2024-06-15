/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCart } from '../../customHooks/useCart';
import classes from './SmartWatchColorSelect.module.css'

const SmartWatchColorSelect = ({ color, handleClick }) => {
    const [isSelected, setIsSelected] = useState(false);
    const { selectedColor } = useCart();

    useEffect(() => {
        setIsSelected(selectedColor === color.code);
    }, [selectedColor, color.code])

    return (
        <li  className={`border border-[color:var(--col-secondary)] rounded-[5px] border-solid transition-[border-color] duration-[0.3s] ease-[ease] ${isSelected ? classes.selected : ""} `}>
            <button  className="flex flex-col justify-center items-center  h-[106px] w-[20vw] max-w-[130px] min-w-[96px] md:w-[130px]"
                onClick={() => handleClick(color)}
                >
                    <img src={color.image} alt={color} className="h-3/5" />
                    <p>{color.name}</p>
            </button>
        </li>
    )
}
export default SmartWatchColorSelect