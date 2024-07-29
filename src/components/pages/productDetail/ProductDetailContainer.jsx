import { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 2;

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log("err: ", err));
  }, [id]);

  return <ProductDetail productSelected={productSelected} />;
};

/* status codes: 
  . Todos los status code 200, 201, 204, etc son estados de exito
  . Todos los status code entre 400 y 500 son errores en la comunicacion entre front y back
    . Status code 400: El error proviene del cliente (front-end)
    . Status code 500: El error proviene del servidor (back-end)
  . Todos los status code 300 son redirecciones
*/
