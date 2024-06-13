/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shippingCost, setShippingCost] = useState(4.90); 
  // const [taxRate, setTaxRate] = useState(0.21);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find((p) => p.id === product.id);

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + quantity,
          subtotal: (existingProduct.quantity + quantity) * existingProduct.price
        };
        console.log(updatedProduct);
        return prevCart.map((p) => p.id === product.id ? updatedProduct : p);
      } else {
        const newProduct = {
          ...product,
          quantity: quantity,
          subtotal: product.price * quantity
        };
        console.log(newProduct);
        return [...prevCart, newProduct];

      }
    });
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart => 
      prevCart.map((product) => 
        product.id === productId 
          ? { ...product, quantity: product.quantity + 1, subtotal: (product.quantity + 1) * product.price } 
          : product
      )
    );
  };

  // const decreaseQuantity = (productId) => {
  //   setCart(prevCart => 
  //     prevCart.map((product) => {
  //       if (product.id === productId) {
  //         if (product.quantity > 1) {
  //           return { ...product, quantity: product.quantity - 1, subtotal: (product.quantity - 1) * product.price };
  //         } else {
  //           return null; 
  //         }
  //       }
  //       return product;
  //     }).filter(product => product !== null)
  //   );
  // };

  const cartTotal = () => {
    // const taxAmount = subtotal * taxRate;
    if (cartSubtotal > 0 ){
      return cartSubtotal + shippingCost;
    } 
    return 0
    
  };


  const removeProduct = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartSubtotal = cart.reduce((total, product) => total + product.subtotal, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        removeProduct,
        clearCart,
        cartSubtotal,
        cartTotal,
        shippingCost
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
