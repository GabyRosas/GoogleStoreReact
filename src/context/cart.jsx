/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shippingCost, setShippingCost] = useState(4.90);
  const [selectedColor, setSelectedColor] = useState('');

  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const addToCart = (product, quantity, colorCode) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find((p) => p.id === product.id && p.selectedColor === colorCode);

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + quantity,
          subtotal: (existingProduct.quantity + quantity) * existingProduct.price
        };
        return prevCart.map((p) => (p.id === product.id && p.selectedColor === colorCode) ? updatedProduct : p);
      } else {
        const newProduct = {
          ...product,
          quantity: quantity,
          subtotal: product.price * quantity,
          selectedColor: colorCode,
          cartId: generateUUID()
        };
        return [...prevCart, newProduct];
      }
    });
  };

  const updateQuantity = (productCartId, quantity) => {
    if (quantity === 0) {
      console.error('Quantity must be positive');
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartId === productCartId
          ? { ...item, quantity, subtotal: quantity * item.price }
          : item
      )
    );
  };

  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== productId));
  };

  const cartSubtotal = cart.reduce((total, product) => total + product.subtotal, 0);

  const cartTotal = () => {
    if (cartSubtotal > 0) {
      return cartSubtotal + shippingCost;
    }
    return 0;
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
        removeProduct,
        cartTotal,
        clearCart,
        getTotalItems,
        shippingCost,
        cartSubtotal,
        setShippingCost,
        setSelectedColor,
        selectedColor // Aggiungi selectedColor al valore del contesto
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
