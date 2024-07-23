import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ProductsList } from "./ProductsList";

export const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <ProductsList items={items} />;
};
