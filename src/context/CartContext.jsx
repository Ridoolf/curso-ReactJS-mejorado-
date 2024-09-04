/* 
Los contextos son componentes que poseen estados que se pueden consumir
de manera global
*/

// Para crear un contexto primero importamos el hook
import { useState } from "react";
import { createContext } from "react";

// Una vez importado se lo asignamos una variable
export const CartContext = createContext();

// Luego creamos el componente proveedor de este contexto
export const CartContextProvider = ({ children }) => {
  // creamos el estado y el seter del mismo
  const [cart, setCart] = useState([]);

  // creamos una funcion que reciba el nuevo producto a agregar
  const addToCart = (newProduct) => {
    // si el producto ya existe en el carrito
    if (isInCart(newProduct.id)) {
      // creamos un nuevo array que recorra el carrito buscando el producto 'duplicado'
      let newArray = cart.map((prod) => {
        // cuando encontremos el producto
        if (prod.id === newProduct.id) {
          // retornamos ese mismo producto con la cantidad que el usuario pide
          return {
            ...prod,
            quantity: newProduct.quantity,
          };
        } else {
          // hasta que nuestro mapeo encuentre el producto retornamos
          return prod;
        }
      });
      // una vez finalizado el mapeo seteamos el nuevo array a nuestro carrito
      setCart(newArray);
    } else {
      // si no hay productos duplicados seteamos el array original
      setCart([...cart, newProduct]);
    }
  };

  // creamos una funcion que valide si el producto seleccionado ya existe en nuestro carrito
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
    return product?.quantity; // --> A este operador se lo conoce como optional chaining y sirve para
    // que la funcion no nos devuelva un error si llega a suceder que la propiedad quantity es undefined
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
