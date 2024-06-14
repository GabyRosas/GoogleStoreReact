
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";


function Cart() {
  return (
    <>
      <header className="p-8">
        <h1 className=" text-[length:var(--fs-title)] text-center">Cart</h1>
        <p className="text-center  text-[length:var(--fs-subtitle)]">Items</p>
      </header>
      <main className="flex flex-col items-center px-10 lg:flex-row justify-center gap-5">
        <CartProducts />
        <CartOrderSummary />
      </main>
    </>
  );
}

export default Cart;
