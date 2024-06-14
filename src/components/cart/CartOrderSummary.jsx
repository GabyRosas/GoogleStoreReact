import { useCart } from "../../customHooks/useCart";
import Button from "../button/Button";


const CartOrderSummary = () => {

  const { cartTotal, cartSubtotal, shippingCost } = useCart();

  return (

    <div className=" p-10 rounded-[20px]  bg-[color:var(--col-bg-accent)] w-full  max-w-2xl lg:w-auto ">
      <h3 className="font-[number:var(--fw-bold)] text-[length:var(--fs-regular) mb-4">Order Summary</h3>
      <div>
        <p className="flex justify-between py-1">
          <span className="font-[number:var(--fw-bold)]">Subtotal:</span>
          <span>€{cartSubtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between py-1">
          <span className="font-[number:var(--fw-bold)]">Shipping costs:</span>
          <span>€{shippingCost.toFixed(2)}</span>
        </p>
        <p className="flex justify-between py-1">
          <span className="font-[number:var(--fw-bold)]">IVA (21%):</span>
          <span>Including</span>
        </p>
        <hr className="my-2 border-t-1 border-t-[black] border-solid" />
        <p className="flex justify-between py-1 my-4">
          <span className="font-[number:var(--fw-bold)]">Total estimated:</span>
          <span>€{cartTotal().toFixed(2)}</span>
        </p>
        <Button text="Complete Purchase" className="max-w-full"/>
      </div>
    </div>

  )
}

export default CartOrderSummary