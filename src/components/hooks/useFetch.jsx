import { useEffect, useState } from "react";

export const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let data = fetch(endpoint);
    data
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("error: ", err));
  }, [endpoint]);

  return [data];
};

/*
Ahora, en vez de crear el fetch con datos hardcodeados, creamos datos los
cuales vamos a enviar como parametros desde los archivos en los que utilicemos este hook

Nuesto useState puede recibir como valor inicial un array, un objeto, un int, etc, por lo que
le colocamos una variable initial la cual especificaremos cuando lo llamemos en un componente

Nuestro useEffect posee como arreglo de dependencias el endpoint, para que cada vez que llamemos
a este hook con un endpoint distinto se ejecute el useEffect

Por ultimo retornamos un objeto... pero, vimos anteriormente que los objetos se retornan como clave: valor 
y en este caso estamos retornando {data} y no {data: data}. Sucede que cuando el valor posee el mismo nombre que la
clave, podemos obviar la sentencia y poner solo {data} (nuestro codigo por dentras interpreta el {data: data})

Un ultimo cambio:
    En vez de retornar un objeto data, retornemos un array data, para que?
    Para que cuando lo llamemos en nuestro componente, podemos renombrar el valor de retorno
    y que sea mas legible el codigo
*/
