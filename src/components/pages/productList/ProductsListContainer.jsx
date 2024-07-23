import { useEffect, useState } from "react";
import { products } from "../../../productsMock";

export const ProductsListContainer = () => {
  // Ejemplo 2

  const [items, setItems] = useState([]);
  console.log(items);

  // recordemos que la peticion a la API debe estar dentro de un useEffect para que no se realice cada vez que se actualiza el componente
  useEffect(() => {
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000); // --> Como las peticiones suelen tener un minimo de demora aleatorio (1 segundo, 2, 4, 5 milesimas, etc) simulamos esta demora con un setTimeOut
    });

    // Ejemplo con then & catch
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // Ejemplo 1

    // // para crear una promesa
    // const tarea = new Promise((resolve, reject) => {
    //   // la promesa recibe 2 parametros, resolve para cuando la promesa se resuelve de manera correcta, y reject para cuando no se resuelve
    //   resolve("la promesa se resolvio");
    // }); // --> Para este ejemplo crearemos una promesa en el front y la resolveremos en el front (cosa que en un caso real no tiene sentido y solamente es por fines practicos)

    // tarea
    //   .then((res) => {
    //     console.log("then: ", res);
    //   }) // toma el resolve de la promesa
    //   .catch((err) => {
    //     console.log("catch: ", err);
    //   }); // toma el reject de la promesa

    // // Ejemplo con async & await

    // const getDatos = async () => {
    //   // // creamos una funcion con la palabra reservada 'async'
    //   // let res = await tarea; // especificamos a que promesa hay que 'esperar'
    //   // setFrase(res); // una vez resuelta la promesa seteamos el resolve en la frase

    //   // forma correcta para el manejo de errores
    //   try {
    //     // intenta hacer esto
    //     let res = await tarea;
    //     setFrase(res);
    //   } catch (err) {
    //     // si no se puede hace esto (algo asi como un if...else)
    //     console.log(err);
    //   }
    // };

    // getDatos(); // ejecutamos la funcion
  }, []);

  return;
};

// una promesa es el resultado de la peticion a una API
