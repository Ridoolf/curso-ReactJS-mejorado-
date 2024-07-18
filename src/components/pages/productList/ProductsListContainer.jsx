import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";

export const ProductsListContainer = () => {
  const [contador, setContador] = useState(0);

  console.log("El componente fue montado");

  useEffect(() => {
    console.log("Realizamos la peticion a la API");
  }, []);

  /*
    Cuando el componente se monte va a relizar las peticiones a la API, pero que sucede?
    El contador, cada vez que cambie su valor va a actualizar nuestro componente, por lo que 
    las peticiones a la API se van a realizar cuantas veces cambie el contador.
  */

  return <ProductsList contador={contador} setContador={setContador} />;
};

// El container maneja la logica y el presentacional maneja el HTML... Por convension al archivo container se le
// especifica el 'container' en su nombre, y al presentacional no

// productListContainer.jsx --> archivo container
// productList.jsx --> archivo presentacional

/*  

  Ciclos de vida de los componentes:

    El ciclo de vida no es mas que una serie de estados por los que todo componente pasa a lo largo de su existencia

    1. El montaje: Se produce la primera vez que un componente va a generarse, incluyendose en el DOM

    2. La actualizacion: Se produce cuando el componente ya generado se esta actualizando

    3. El desmontaje: Se produce cuando el componente se elimina del DOM

  UseEffect:

    Nos sirve para manipular que partes de nuestro componente se van a actualizar unicamente cuando el componente 
    sea montado, y que partes se van a actualizar cada vez que escuchen un cambio del componente... teniendo en 
    cuenta el ejemplo de arriba, las peticiones a la API solo necesitamos que se ejecute cuando el componente sea montado
    y no cada vez que el usuario le de click al boton 'sumar' del contador.

    Sentencia:

      useEffect( () => {
          console.log("Realizar las peticiones a la API")
        }, [] );

      . Como primer parametro recibe un callBack, dentro del mismo se ejecuta la accion que solo queremos 
      realizar cuando sea montado el componente
      . Como segundo parametro recibe un array el cual se lo llama arreglo de dependencias que:
        .. Si no esta: El useEffect no va a cumplir ninguna funcion.
        .. Si esta vacio []: El useEffect se va a ejecutar SOLAMENTE cuando se monte el componente
        .. Si esta con una variable dentro [contador]: Significa que solo una actualizacion en el valor de esa
        variable va a poder volver a accionar el useEffect. Dentro del arreglo puedo poner la cantidad de variables
        que yo quiera.
*/
