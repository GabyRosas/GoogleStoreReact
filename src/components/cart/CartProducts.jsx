import { useCart } from "../../customHooks/useCart"
import CartProductItem from "./CartProductItem"

const CartProducts = () => {
    
    const {cart} = useCart()

    return (
    <ul className="my-4 w-full max-w-2xl p-4 rounded-[20px] bg-[color:var(--col-bg-accent)]">
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