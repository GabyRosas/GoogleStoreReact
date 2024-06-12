/* eslint-disable react/prop-types */
// import { useState } from "react"
import EarbudColorSelector from "../earbud-color-selector/EarbudColorSelector"
import SmartWatchColorSelect from "../smartwatch-color-select/SmartWatchColorSelect"


const ColorSelectorContainer = ({ colors, category, image }) => {
    // const [color, setColor ] = useState(colors[0]);

    // console.log(color);
    return (
        <div className="md:mb-[30px]">
            <h3 className="text-[length:var(--fs-regular)] font-[number:var(--fw-regular)] mb-2.5">Choose a color</h3>
            {
                category === 'earbuds' ?
                    <ul className="flex items-center gap-[5px]">
                        {colors.map((color, index) => (
                            <EarbudColorSelector
                                key={index}
                                color={color}

                            // onClick={() => setColor(color)}
                            />
                        ))}</ul>
                    :

                    <ul className="flex flex-wrap justify-between md:justify-start md:gap-2.5">
                        {colors.map((color, index) => (
                            <SmartWatchColorSelect
                                key={index}
                                color={color}
                                image={image[index]}

                            // onClick={() => setColor(color)}
                            />
                        ))}</ul>

            }

        </div>
    )
}
export default ColorSelectorContainer