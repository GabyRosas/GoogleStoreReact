import { useCart } from "../../customHooks/useCart"
import CartProductItem from "./CartProductItem"

const CartProducts = () => {
    
    const {cart} = useCart()
    console.log(cart)

    return (
    <ul className="receipt-component  my-4 w-full max-w-2xl bg-white shadow-md p-4 rounded-md">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((product, index) => (
            <CartProductItem key={index}
            product = {product} />

            ))
          )}
    </ul>
  )
}

export default CartProducts