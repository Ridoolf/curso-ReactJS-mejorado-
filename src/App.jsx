import { Navbar } from "./components/layout/navbar/Navbar";
import "./App.css";
import "@fontsource/roboto/300.css";
import { ProductsListContainer } from "./components/pages/productList/ProductsListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";

function App() {
  return (
    <div className="app-container">
      <Navbar>
        <ProductsListContainer />
        <ProductDetailContainer />
      </Navbar>
    </div>
  );
}

export default App;
