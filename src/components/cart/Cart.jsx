import CartProducts from "./CartProducts";
import CartItemCount from './CartItemCount';

function Cart() {
    return (
    <div  className="flex flex-col items-center p-8">
      <h1 className="receipt-title text-2xl font-bold text-center mb-4">Cart</h1>
      <h2>Items</h2> <CartItemCount/>
      <CartProducts/>
       
      {/* <div className="flex justify-center gap-4 w-full max-w-2xl">
        <div className="receipt-component bg-white shadow-md p-4 rounded-md w-full">
          <h3 className="receipt-title text-xl font-bold mb-4">Resumen del pedido</h3>
          <div className="order-summary text-gray-700">
            <p className="flex justify-between py-1">
              <span>Subtotal:</span>
              <span>€{cartTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between py-1">
              <span>Costes de envío:</span>
              <span>€4.90</span>
            </p>
            <p className="flex justify-between py-1">
              <span>IVA (21%):</span>
              <span>€{(cartTotal() * 0.21).toFixed(2)}</span>
            </p>
            <hr className="my-2" />
            <h4 className="flex justify-between py-1 font-bold text-lg">
              <span>Total estimado:</span>
              <span>€{(cartTotal() + 4.90 + cartTotal() * 0.21).toFixed(2)}</span>
            </h4>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Cart;
