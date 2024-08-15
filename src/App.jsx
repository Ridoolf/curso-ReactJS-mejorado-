import "./App.css";
import { ProductsListContainer } from "./components/pages/productList/ProductsListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Cart } from "./components/pages/cart/Cart";
import { Home } from "./components/pages/home/Home";
import { Form } from "./components/pages/form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductsListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ProductsListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          <Route path="*" element={<h1>Lo siento, la ruta no existe</h1>} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
