import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Footer } from "./Footer";

function App() {
  // --> la funcion app la llamamos en el main

  // por encima del return colocamos toda la logica

  return (
    // dentro del return va todo nuestro XML
    <>
      <Navbar />
      <Home />
      <Footer />
    </>

    /* 
    para retornar mas de un elemento tenemos que colocarlo dentro de un div,
    para no tener el problema de tener crear un div por cada componente ponemos <> </>
    y tambien nos va a permitir retornar varios elementos
    
    forma 1:

    return <h1> retornando 1 solo elemento </h1>
    
    forma 2:

    return (
    <div>
      <h1> retornando este elemento </h1>
      <p> y este elemento <span> dentro de un div </span> </p>
    </div>
    )

    forma 3:

    return(
    <>
      <h1> retornando este elemento </h1>
      <p> y este elemento <span> sin la necesidad de crear div </span> </p>
    </>
    )
    */
  );
}

export default App;

/*
Teoria: 
  . Que es JSX? 
    Es una tecnologia que nos permite mezclar JavaScript con XML
  . Que es un componente?
    Es una funcion que retorna html
*/
