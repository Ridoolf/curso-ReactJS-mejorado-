import { Counter } from "../../common/counter/Counter";

export const ProductsLists = ({ usuario, edad }) => {
  return (
    <>
      <h4>
        Usuario: {usuario} || Edad: {edad}
      </h4>
      <div>
        <h3>Vista app</h3>
      </div>
      <Counter />
    </>
  );
};

/*

export const ProductsLists = () => {
  return (
    <div>ProductsLists</div>
  )
}

Esta es la forma de crear un componente de react sin props...
Para agregar props a nuestro componente hay que saber que al recibirlos, estas props se convierten en un objeto y
es tan simple como colocar entre los parentesis de nuestra arrow function 
el nombre que queremos del objeto de las props recibidas
Por ejemplo:

Si enviamos una prop desde nuestro componente padre 

export const ProductsLists = (usuario) => {
  console.log(usuario); --> Este clg imprime {usuario:'Lucas'} 

  return ( <> </> );
};

Si desde nuestro componente padre enviamos 2 props:

export const ProductsLists = (props) => {
  console.log(props); --> Este clg imprime {usuario:'Lucas', prop2:'prop2'} 

  return ( <> </> );
};

Para mejorar la legibilidad del codigo, si recibimos mas de una prop es conveniente desestructurar el objeto para no tener 
que estar llamando siempre a nuestro objeto.prop1, objeto.prop2, etc...

para esto realizamos la desestructuaracion de objetos convencional

export const ProductsLists = (props) => {
    const {prop1, prop2, prop3} = props; 

    return ( 
        <>
            <p>{prop1}</p>
            <p>{prop2}</p>
            <p>{prop3}</p>
        </> 
    );
};

ahora, otra mejor practica es desestrucutar el objeto ni bien lo estamos colocando como prop de nuestro componente

export const ProductsLists = ({prop1, prop2, prop3}) => {

    return ( 
        <>
            <p>{prop1}</p>
            <p>{prop2}</p>
            <p>{prop3}</p>
        </> 
    );
};

*/
