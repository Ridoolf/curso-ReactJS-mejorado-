import { useEffect, useState } from "react";
import { productsInstance } from "../../../api/axiosinstance";

export const Fetching = () => {
  const [products, setProducts] = useState([]);

  // GET ALL

  useEffect(() => {
    const getDatos = productsInstance.get("");
    getDatos
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // GET BY ID

  useEffect(() => {
    const getProductByID = productsInstance.get("/3");
    getProductByID
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  // CREATE PRODUCT

  const createProduct = () => {
    let data = {
      title: "zapatillas creadas con axios",
      description: "Estas son mejores que las otras porque se uso Axios",
      price: 1000,
      stock: 9,
      img: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg",
      category: "deportivas",
    };

    productsInstance.post("", data);
  };

  // PUT

  const cambiarTodoElProducto = () => {
    let data = {
      title: "Modificadooooooo con axios",
      description: "Ahora son malardas estas, no las compressssss",
      price: 90,
      stock: 9,
      img: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg",
      category: "deportivas",
    };

    productsInstance.put("/5", data);

    /* TEORIA
        Cuando realizamos un put tenemos que colocar todo el objeto que vamos a modificar, y cambiar los datos
        que queremos

        porejemplo, en nuestra db tenemos

        user [
            {
                id: 1,
                nombre: 'Lucas',
                edad: 23 
            }
        ]

        ups! nos confundimos y la edad era 24, vamos a cambiarlo

        let data = {
            edad: 24
        }

        realizamos el put y ahora nuestra db queda asi

        user [
            {
                id: 1,
                edad: 24
            }
        ]

        y nuestro nombre? 
        Lo que sucedio es que la data que mandamos en el post no contenia un nombre, y el 
        metodo put cambia el objeto completo, no solo la propiedad que le mandamos, por
        lo que hay que tener cuidado al realizar este metodo ya que no nos devuelve un error, 
        solo lo hace y ya
    */
  };

  // PATCH

  const cambiarParteDelProducto = () => {
    let data = {
      title: "Titulo cambiado mediante un Patch",
    };
    productsInstance.patch("/5", data);
  };

  // DELETE

  const eliminarProducto = () => {
    productsInstance.delete("/5");
  };

  return (
    <div>
      <h1>Lista de zapatillas</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>titulo: {product.title}</li>;
        })}
      </ul>
      <button onClick={createProduct}>Crear Producto</button>
      <button onClick={cambiarTodoElProducto}>Modificar producto id 5</button>
      <button onClick={cambiarParteDelProducto}>
        Modificar parte del producto id 5
      </button>
      <button onClick={eliminarProducto}>Elminiar producto 5</button>
    </div>
  );
};
