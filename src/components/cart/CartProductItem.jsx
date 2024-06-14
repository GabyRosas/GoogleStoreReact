/* eslint-disable react/prop-types */
import DeliveryInfo from '../delivery-info/DeliveryInfo'
import classes from './CartProductItem.module.css'

const CartProductItem = ({ product }) => {
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
        src={product.images[0]}
        alt={product.name}
      />
      <div className="justify-self-start col-[2_/_span_2] px-3">
        <h3 className="text-[length:var(--fs-regular)] ">{product.name}</h3>
        <div className="flex">
          <p >Cant:</p>
          <label className="sr-only">Quantity</label>
          <select id="quantity"
            //onChange={handleQuantityChange}
            className="bg-[color:var(--col-bg-accent)] "
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div>
        <p>€{(product.subtotal).toFixed(2)}</p>
      </div>

      <DeliveryInfo className="  bg-white row-start-2 col-[2_/_span_4] p-5 w-full"/>
    </li>
  )
}

export default CartProductItem