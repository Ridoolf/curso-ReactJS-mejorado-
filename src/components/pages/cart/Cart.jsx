/*
Para consumir un contexto primero importamos el hook
*/
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  // CartContext: para consumirlo lo unico que nos pide es que especifiquemos que context vamos a usar
  /* { cart }: aqui nos llega lo que en nuestro contexto tenemos como value, si nos fijamos en el return
    nosotros estamos devolviendo un objeto data el cual dentro tiene una propiedad cart y otra addToCart...
    Para este caso solo nos importa consumir la propiedad cart.
  */

  console.log("carrito:", cart);
  return (
    <>
      <h1>Carritooo</h1>
    </>
  );
};
