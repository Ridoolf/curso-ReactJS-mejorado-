import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductsListContainer } from "./components/pages/productList/ProductsListContainer";
import "./App.css";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <ProductsListContainer />
    </div>
  );
}

export default App;
