import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";

export const ProductsListContainer = () => {
  const [contador, setContador] = useState(0);

  console.log("El componente fue montado");

  useEffect(() => {
    console.log("Realizamos la peticion a la API");
  }, []);

  return <ProductsList contador={contador} setContador={setContador} />;
};
