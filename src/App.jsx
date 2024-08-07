import "./App.css";
import "@fontsource/roboto/300.css";
import { ProductsListContainer } from "./components/pages/productList/ProductsListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
// para utilizar react router siempre debemos importar estos 3 componentes
/*
  . BrowserRouter, Routes: Nos sirve para iniciar el sistema de rutas
  . Route: No tiene sistema de cierre por lo que su sentencia es <Route />
  Y debemos ponerlo dependiendo de cuantas rutas queremos
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Este es el home</h1>} />
          <Route path="/productList" element={<ProductsListContainer />} />
          <Route path="/itemDetail" element={<ProductDetailContainer />} />
          <Route path="*" element={<h1>Lo siento, la ruta no existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* Estructura del componente (antes):
    <div className="app-container">
      <Navbar>
        <ProductsListContainer />
        <ProductDetailContainer />
      </Navbar>
    </div>
*/

/* Estructura de rutas basica

    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
*/

/*
  La ruta recibe 2 parametros
    . path: es la ruta del browser que queremos crear
      . Si tenemos un componente carrito su ruta seria "/carrito"
      . Para sentenciar la ruta del home/inicio se pone "/"
      . Para renderizar un elemento en cualquier ruta que no este configurada
      colocamos "*" en el path
*/

/* Layout

Para estructurar nuestra pagina nos creamos un componente layout... el mismo, se va a encargar de esta tarea:

import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

Entonces nuestro app solo posee las rutas a los componentes, y layout los estructura 

*/
