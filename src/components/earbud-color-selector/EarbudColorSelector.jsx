/* eslint-disable react/prop-types */


const EarbudColorSelector = ({ color }) => {
    return (
        <li>
            <button
                className={`w-9 h-9 border border-[color:var(--col-secondary)] rounded-[50%] border-solid cursor-pointer`}
                style={{ backgroundColor: color.code }}
                aria-label={color.name}
                >
                <span className='sr-only'>{color.name}</span>
            </button>
        </li>
    );
}

export default EarbudColorSelector;