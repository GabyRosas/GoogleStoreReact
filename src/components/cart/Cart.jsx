import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";
import CartItemCount from './CartItemCount';

function Cart() {
  return (
    <div  className="flex flex-col items-center p-8">
      <h1 className="receipt-title text-2xl font-bold text-center mb-4">Cart</h1>
      <h2>Items</h2> <CartItemCount/>
      <CartProducts/>
      <CartOrderSummary/>
    </div>
  );
}

export default Cart;
