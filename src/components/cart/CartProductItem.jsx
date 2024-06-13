/* eslint-disable react/prop-types */


const CartProductItem = ({ product }) => {
  return (
    <li
      className="receipt-product flex justify-between items-center border-b border-gray-200 py-2"

    >
      <div className="flex items-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-500">Cant: {product.quantity}</p>
          <label className="sr-only">Quantity</label>
          <select id="quantity"
            //onChange={handleQuantityChange}
            className="border border-[color:var(--col-secondary)] w-1/5 p-2.5 rounded-[5px] border-solid"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

        </div>
      </div>

      <div className="receipt-price text-right">
        <p>€{(product.subtotal).toFixed(2)}</p>
      </div>

    </li>
  )
}

export default CartProductItem