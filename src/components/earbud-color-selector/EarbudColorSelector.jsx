/* eslint-disable react/prop-types */


const EarbudColorSelector = ({ color, key }) => {
    console.log(color.code);
    return (

            <li key={key}>
                <button className={`w-9 h-9 border border-[color:var(--col-secondary)] rounded-[50%] border-solid bg-[${color.code}]`}>
                    <span className='sr-only'>{color.name}</span>
                </button>
            </li>
    )
}
export default EarbudColorSelector