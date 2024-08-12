import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const Navigate = useNavigate();

  const realizarCompra = () => {
    console.log("comprado");
    Navigate("/");
  };

  return (
    <>
      <h1>Carritooo</h1>
      <button onClick={realizarCompra}>Comprar</button>
    </>
  );
};
