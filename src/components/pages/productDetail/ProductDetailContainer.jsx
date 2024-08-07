import { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log("err: ", err));
  }, [id]);

  return <ProductDetail productSelected={productSelected} />;
};

/* UseParams

El use params toma lo que nosotros pongamos como dinamico en la ruta
Por ejemplo, en nuestro app tenemos:

  <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />

Ese :id indica que el itemDetail va a tener un /algo... que puede ser cualquier cosa, a esa ruta dinamica
la llamamos id

El use params toma ese valor y nos devuelve un objeto el cual desesctructuramos y llamamos id

  const { id } = useParams();

Pero que sucede? 
  Este id viene desde el useParams en formato string, y nosotros en el .find estamos
intentando comparar un valor numerico id al string id de nuestro useParams, por lo que hay que convertirlo a 
string... eso es tan simple como colocarle un + antes de llamarlo: +id
*/
