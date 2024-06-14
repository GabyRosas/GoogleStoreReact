/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
    const addToCart = (product, quantity) => {
      const existingProduct = cart.find((p) => p.id === product.id);
      if (existingProduct) {
          updateQuantity(existingProduct.id, quantity);
      } else {
          product.quantity = quantity;
          product.subtotal = product.quantity * product.price;
          setCart((prevCart) => [...prevCart, product]);
      }
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity, subtotal: quantity * item.price }
                    : item
            )
        );
    };

    const increaseQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + quantity, subtotal: (item.quantity + quantity) * item.price }
                    : item
            )
        );
    };

    const removeProduct = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const cartTotal = () => {
        return cart.reduce((total, product) => total + product.subtotal, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
      return cart.reduce((total, product) => total + product.quantity, 0);
    };
  

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                increaseQuantity,
                removeProduct,
                cartTotal,
                clearCart,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
}