import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ProductsList } from "./ProductsList";
import { useParams } from "react-router-dom";
import { Loader } from "../../common/loader/Loader";

export const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter((e) => e.category == categoryName);

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  /*
  If con return temprano:
    Nosotros sabemos que no puede haber mas de 1 return en una funcion,
    pero podemos hacer que haya 1 return dependiendo de que condicion suceda
    en el componente.
  */

  if (items.length == 0) {
    return <Loader />;
  } else {
    return <ProductsList items={items} />;
  }

  /*
  Otra tecnica para realizar lo mismo:

  return <div>
  {
    items.length == 0 (
      return <h1>Cargando...</h1>
    ) : (
      return <ProductsList items={items} />
    )
  }
  </div>  
*/
};
