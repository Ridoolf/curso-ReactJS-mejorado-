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

  const getTotalItems = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.price * e.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProdByID,
    getTotalQuantityByID,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};
