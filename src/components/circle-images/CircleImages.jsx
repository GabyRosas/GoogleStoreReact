/* eslint-disable react/prop-types */
const CircleImages = ({ image, onClick, key }) => {
    return (
        <li key={key}>
            <button className="h-[50px] w-[50px] border border-[color:var(--col-secondary)] flex items-center justify-center rounded-[50%] border-solid" onClick={onClick}>
                <img src={image} alt="Thumbnail" />
            </button>
        </li>
    );
};

export default CircleImages;