/* eslint-disable react/prop-types */
import { useCart } from '../../customHooks/useCart';
import RemoveButton from '../button/RemoveButton';


const CartProductItem = ({product}) => {
    const { updateQuantity } = useCart();

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        updateQuantity(product.cartId, newQuantity);
    };

 return (
        <li className="receipt-product flex justify-between items-center border-b border-gray-200 py-2">
            <div className="flex items-center">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover mr-4"
                />
                <div>
                    <h3 className="font-semibold text-lg">{`${product.name} in ${product.selectedColor.name} `} </h3>
                    <p className="text-gray-500">Cant: {product.quantity}</p>
                    <label className="sr-only">Quantity</label>
                    <select
                        id="quantity"
                        value={product.quantity}
                        onChange={handleQuantityChange}
                        className="border-[color:var(--col-secondary)] w-1/5 p-2.5 rounded-[5px]"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        
                    </select>
                </div>
            </div>
            <RemoveButton productId={product.cartId} />
        </li>
    );
};

export default CartProductItem