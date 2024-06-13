import { useCart } from "../../customHooks/useCart";


const CartOrderSummary = () => {

  const { cartTotal, cartSubtotal, shippingCost } = useCart();

  return (
    <div className="flex justify-center gap-4 w-full max-w-2xl">
      <div className="receipt-component bg-white shadow-md p-4 rounded-md w-full">
        <h3 className="receipt-title text-xl font-bold mb-4">Order Summary</h3>
        <div className="order-summary text-gray-700">
          <p className="flex justify-between py-1">
            <span>Subtotal:</span>
            <span>€{cartSubtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between py-1">
            <span>Shipping costs:</span>
            <span>€{shippingCost.toFixed(2)}</span>
          </p>
          <p className="flex justify-between py-1">
            <span>IVA (21%):</span>
            <span>Including</span>
          </p>
          <hr className="my-2" />
          <h4 className="flex justify-between py-1 font-bold text-lg">
            <span>Total estimated:</span>
            <span>€{cartTotal().toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default CartOrderSummary