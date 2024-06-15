/* eslint-disable react/prop-types */
const PrimaryButton = ({ text, handleClick, className }) => {
    return (
        <button type ="button"
            className={`block bg-[color:var(--col-primary)] text-[white] w-[280px] h-[50px] text-base cursor-pointer rounded-[10px] border-[none] transition-opacity duration-[0.3s] ease-[ease] hover:opacity-80 ${className}`}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
export default PrimaryButton