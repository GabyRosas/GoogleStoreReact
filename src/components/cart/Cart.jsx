
import React from "react";

const cart = [];

function addToCart(product) {
  const existingProduct = cart.find((p) => p.id === product.id);
  if (existingProduct) {
    increaseQuantity(existingProduct);
  } else {
    product.quantity = 1;
    product.subtotal = product.quantity * product.price;
    cart.push(product);
  }
}

function increaseQuantity(product) {
  product.quantity++;
}

function decreaseQuantity(product) {
  if (product.quantity > 1) {
    product.quantity--;
  } else {
    removeProduct(product);
  }
}

function removeProduct(product) {
  const index = cart.indexOf(product);
  cart.splice(index, 1);
}

function updateSubtotal(product) {
  const subtotal = product.price * product.quantity;
  product.subtotal = subtotal;
}

function cartTotal() {
  return cart.reduce((total, product) => total + product.subtotal, 0);
}

function clearCart() {
  cart.length = 0;
}

function ShowReceipt() {
  return (
    <div id="receipt-container" className="flex flex-col items-center p-8">
      <div className="receipt-component my-4 w-full max-w-2xl">
        <h3 className="receipt-title text-2xl font-bold text-center mb-4">Carrito</h3>
        <div className="receipt-component bg-white shadow-md p-4 rounded-md">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">El carrito está vacío.</p>
          ) : (
            cart.map((product) => (
              <div
                className="receipt-product flex justify-between items-center border-b border-gray-200 py-2"
                key={product.id}
              >
                <div className="flex items-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-gray-500">Cantidad: {product.quantity}</p>
                  </div>
                </div>
                <div className="receipt-price text-right">
                  <h5 className="font-semibold text-lg">€{(product.price * product.quantity).toFixed(2)}</h5>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(product)}
                      className="text-gray-600 hover:text-gray-900 px-2"
                    >
                      -
                    </button>
                    <span className="px-2">{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product)}
                      className="text-gray-600 hover:text-gray-900 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-center gap-4 w-full max-w-2xl">
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
      </div>
    </div>
  );
}

export default ShowReceipt;

export {
  addToCart,
  cartTotal,
  decreaseQuantity,
  increaseQuantity,
  updateSubtotal,
  removeProduct,
  clearCart,
};