/* eslint-disable react/prop-types */



const CircleImages = ({ image, onClick }) => {
    return (
        <li>
            <button className="h-[50px] w-[50px] border border-[color:var(--col-secondary)] flex items-center justify-center rounded-[50%] border-solid" onClick={onClick}>
                <img src={image} alt="Thumbnail" />
            </button>
        </li>
    );
};

export default CircleImages;