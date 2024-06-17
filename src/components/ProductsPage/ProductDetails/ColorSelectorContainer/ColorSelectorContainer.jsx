/* eslint-disable react/prop-types */
import EarbudColorSelector from "./EarbudsColorSelector/EarbudColorSelector";
<<<<<<<< HEAD:src/components/ColorSelectorContainer/ColorSelectorContainer.jsx
import SmartWatchColorSelect from "./SmartWatchColorSelect/SmartWatchColorSelect";
import { useCart } from '../../customHooks/useCart';
========
import SmartWatchColorSelect from "./SmartwatchColorSelector/SmartWatchColorSelector";
import { useCart } from '../../../../customHooks/useCart';
>>>>>>>> 70f3103751f60b5697ec6e8084b146d0f16b40c7:src/components/ProductsPage/ProductDetails/ColorSelectorContainer/ColorSelectorContainer.jsx


const ColorSelectorContainer = ({ product }) => {
    const { colors, category } = product;
    const { setSelectedColor } = useCart();


    const handleColorSelect = (colorCode) => {
        setSelectedColor(colorCode);
    };


    return (
        <div className="md:mb-[30px]">
            <h3 className="text-[length:var(--fs-regular)] font-[number:var(--fw-regular)] mb-2.5">Choose a color</h3>
            {category === 'earbuds' ? (
                <ul className="flex items-center gap-[5px]">
                    {colors.map((color, index) => (
                        <EarbudColorSelector
                            key={index}
                            color={color}
                            handleClick={() => handleColorSelect(color.code)}
                        />
                    ))}
                </ul>
            ) : (
                <ul className="flex flex-wrap justify-between md:justify-start md:gap-2.5">
                    {colors.map((color, index) => (
                        <SmartWatchColorSelect
                            key={index}
                            color={color}
                            handleClick={() => handleColorSelect(color.code)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ColorSelectorContainer;
