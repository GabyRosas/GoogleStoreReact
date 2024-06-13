/* eslint-disable react/prop-types */

const SmartWatchColorSelect = ({ image, color }) => {
    return (
        <li >
            <button  className="flex flex-col justify-center items-center border border-[color:var(--col-secondary)] h-[106px] w-[20vw] max-w-[130px] min-w-[96px] rounded-[5px] border-solid  md:w-[130px]">
                    <img src={image} alt={color} className="h-3/5" />
                    <p>{color.name}</p>
            </button>
        </li>
    )
}
export default SmartWatchColorSelect