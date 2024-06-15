/* eslint-disable react/prop-types */
import { useCart } from '../../customHooks/useCart';
import DeliveryInfo from '../delivery-info/DeliveryInfo';
import RemoveButton from '../button/RemoveButton';
import classes from './CartProductItem.module.css';

const CartProductItem = ({ product }) => {
  const { updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(product.cartId, newQuantity);
  };

  const selectedColor = product.colors.find(color => color.code === product.selectedColor);
  const selectedImage = selectedColor ? selectedColor.image : product.images[0];

  return (
    <li
      className={`
        grid 
        place-items-center
        items-center 
        py-4 grid-cols-4
        grid-row-2
        ${classes.cartItem}
        `}
    >
      <img
        className="max-h-[100px]"
        src={selectedImage}
        alt={product.name}
      />
      <div className="justify-self-start col-[2_/_span_2] px-3">
        <h3 className="text-[length:var(--fs-regular)] ">{`${product.name} in ${selectedColor.name} `}</h3>
        <div className="flex">
          <p>Cant:</p>
          <label className="sr-only">Quantity</label>
          <select
            id="quantity"
            value={product.quantity}
            onChange={handleQuantityChange}
            className="bg-[color:var(--col-bg-accent)] "
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
      <div>
        <p className="my-5">€{(product.subtotal).toFixed(2)}</p>
        <RemoveButton productId={product.cartId} />
      </div>
      <DeliveryInfo className="bg-white row-start-2 col-[span_5] md:col-[2_/_span_4] p-5 w-full" />
    </li>
  );
}

export default CartProductItem;
