import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    if (isInCart(newProduct.id)) {
      let newArray = cart.map((prod) => {
        if (prod.id === newProduct.id) {
          return {
            ...prod,
            quantity: newProduct.quantity,
          };
        } else {
          return prod;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((e) => e.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProdByID = (id) => {
    const newArray = cart.filter((prod) => prod.id !== id);
    setCart(newArray);
  };

  const getTotalQuantityByID = (id) => {
    let product = cart.find((e) => e.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProdByID,
    getTotalQuantityByID,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};
