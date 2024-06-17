/* eslint-disable react/prop-types */
import { useCart } from '../../../customHooks/useCart';

const RemoveButton = ({ productId }) => {
    const { removeProduct } = useCart();

    const handleRemoveClick = () => {
        removeProduct(productId);
    };

    return (
        <button
            className="text-blue-700 font-bold relative bg-transparent border-none"
            style={{ color: '#1A73E8' }}
            onClick={handleRemoveClick}
        >
            Remove
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-700"></span>
        </button>
    );
};

export default RemoveButton;