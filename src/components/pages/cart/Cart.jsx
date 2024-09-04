/*
Para consumir un contexto primero importamos el hook
*/
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { DeleteOutline, CleaningServices } from "@mui/icons-material";

export const Cart = () => {
  const { cart, clearCart, deleteProdByID } = useContext(CartContext);
  // CartContext: para consumirlo lo unico que nos pide es que especifiquemos que context vamos a usar
  /* { cart }: aqui nos llega lo que en nuestro contexto tenemos como value, si nos fijamos en el return
    nosotros estamos devolviendo un objeto data el cual dentro tiene una propiedad cart y otra addToCart...
    Para este caso solo nos importa consumir la propiedad cart.
  */
  return (
    <div className="cart_container">
      <h1>CARRITO</h1>
      <button className="clear_cart" onClick={() => clearCart()}>
        <CleaningServices className="cleaning_icon" />
        Limpiar Carrito
      </button>
      {cart.map((prod) => {
        return (
          <div key={prod.id} className="item_cart_container">
            <h2 className="prod_title">{prod.title}</h2>
            <h3>{prod.price}</h3>
            <h4>{prod.quantity}</h4>
            <button
              className="btn_delete_ID"
              onClick={() => deleteProdByID(prod.id)}
            >
              <DeleteOutline className="trash_icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
