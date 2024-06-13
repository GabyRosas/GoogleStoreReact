/* eslint-disable react/prop-types */
const Button = ({ text, handleClick }) => {
    return (
        <button
            className="block bg-[color:var(--col-primary)] text-[white] w-[280px] h-[50px] text-base cursor-pointer rounded-[10px] border-[none] hover:bg-[color:var(--col-primary-hover)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:-translate-y-0.5;
            transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s  hover:text-[black]"
            onClick={() => handleClick}
        >
            {text}
        </button>
    )
}
export default Button