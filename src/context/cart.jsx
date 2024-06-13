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

      console.log('Adding to cart')
    }

    const increaseQuantity = (product) => {
      product.quantity++;
    };

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
