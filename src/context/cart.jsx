import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      increaseQuantity(existingProduct);
    } else {
      //   product.subtotal = product.quantity * product.price;
      setCart((prevState) => [
        ...prevState,
        {
          ...prevState,
          quantity: 1,
          subtotal: quantity * price,
        },
      ]);

      console.log("Adding to cart");
    }

    const increaseQuantity = (product) => {
      product.quantity++;
    };

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
      setCart([]);
    }

    return (
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
}
