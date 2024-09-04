import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { addToCart, getTotalQuantityByID } = useContext(CartContext);

  const { id } = useParams();

  const prodQuantity = getTotalQuantityByID(+id);

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log("err: ", err));
  }, [id]);

  return (
    <ProductDetail
      productSelected={productSelected}
      addToCart={addToCart}
      prodQuantity={prodQuantity}
    />
  );
};
