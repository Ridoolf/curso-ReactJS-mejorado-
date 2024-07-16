import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
    </div>
  );
};

/*
Estados: 
    Los estados permiten que un componente "recuerde" información entre renders y 
    se actualice dinámicamente en respuesta a eventos.
UseState:
    Es un hook que te permite agregarle estado a un componente funcional.
    Se utiliza de la siguiente forma:

    1. Lo importamos al componente: 
        import { useState } from 'react';

    2. Inicializamos el estado:
        const [ contador, setContador ] = useState(0);

        . el useState devuelve un array de 2 elementos, primero una variable (que seria el estado actual) 
        y luego la funcion que va a modificar esa variable
        en este caso:
            . contador es la variable de estado que almacena el valor actual
            . setContador (por convencion se antepone set al nombre de la variable, si la variable es nombre la 
            funcion es setNombre, etc): es la funcion que va a actualizar el valor de contador.
            . Por defecto, el estado actual de useState (el primer elemento) es undefined, por lo que si nosotros
            vamos a desarrollar un contador, necesitamos que este inicialice en 0... ese valor se coloca entre los 
            parentesis de la ejecucion del useState(): useState(0);
*/
