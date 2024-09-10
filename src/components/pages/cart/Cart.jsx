import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { DeleteOutline, CleaningServices } from "@mui/icons-material";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, deleteProdByID, getTotalPrice } =
    useContext(CartContext);

  let totalPrice = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Esta seguro de que desea vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado con exito", "", "succes");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div className="cart_container">
      <h1>CARRITO</h1>

      <button className="clear_cart" onClick={limpiar}>
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
      <div>
        <p>
          Total: <span>{totalPrice}</span>
        </p>
      </div>
    </div>
  );
};
