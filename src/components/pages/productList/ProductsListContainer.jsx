import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ProductsList } from "./ProductsList";
import { useParams } from "react-router-dom";

export const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    let productosFiltrados = products.filter((e) => e.category == categoryName);

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return <ProductsList items={items} />;
};
