import Navbar from "./components/layout/navbar/Navbar";
import { ProductsLists } from "./components/pages/productsLists/ProductsLists";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState("Lucas");

  const [esOscuro, setEsOscuro] = useState(false);

  console.log(esOscuro);

  let edad = 22;

  return (
    <>
      <Navbar />
      <ProductsLists usuario={usuario} edad={edad} />
      <button onClick={() => setUsuario("Pepito")}>Cambiar nombre</button>
      <button
        onClick={() => {
          setEsOscuro(!esOscuro);
        }}
      >
        Cambiar a {esOscuro ? "claro" : "oscuro"}
      </button>
    </>
  );
}

export default App;

/*  
  Para enviar informacion desde un componente padre a un componente hijo hay que recordar que los componentes de react son FUNCIONES de JS
  que retornan HTML. Si tenemos en cuenta que el envio de parametros a una funcion convencional de JS seria asi:

    miFuncion(parametro);

  Con react no cambia mucho, pero nuestros parametros ahora se llaman props

    <MiFuncion prop1={prop1}/>

  Si queremos enviar mas de una prop es simple:

    <MiFuncion prop1={prop1} prop2={prop2} />

  Ahora bien, para ver como se reciben estas props en nuestro componente hijo, vayamos a nuestro componente ProductsList

*/
