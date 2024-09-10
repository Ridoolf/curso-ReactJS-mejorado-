import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Loader } from "../../common/loader/Loader";

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { addToCart, getTotalQuantityByID } = useContext(CartContext);

  const { id } = useParams();

  const prodQuantity = getTotalQuantityByID(+id);

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 2000);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log("err: ", err));
  }, [id]);

  if (productSelected.id) {
    return (
      <ProductDetail
        productSelected={productSelected}
        addToCart={addToCart}
        prodQuantity={prodQuantity}
      />
    );
  } else {
    return <Loader />;
  }
};
