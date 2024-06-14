/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CartContext = createContext();

export function CartContextProvider({ children }) {

  const [cart, setCart] = useState([])
  const [shippingCost, setShippingCost] = useState(4.90); 
 

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

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity, subtotal: quantity * item.price }
                    : item
            )
        );
    };

    
    const removeProduct = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const cartSubtotal = cart.reduce((total, product) => total + product.subtotal, 0);

    const cartTotal = () => {
      if (cartSubtotal > 0 ){
        return cartSubtotal + shippingCost;
      } 
      return 0
      
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
                setShippingCost
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
  

