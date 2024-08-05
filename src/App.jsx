import { Navbar } from "./components/layout/navbar/Navbar";
// import { ProductsListContainer } from "./components/pages/productList/ProductsListContainer";
import "./App.css";
import "@fontsource/roboto/300.css";
// import { Users } from "./components/Users";
// import { Comments } from "./components/Comments";
// import { Post } from "./components/Post";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";

function App() {
  return (
    <div className="app-container">
      <Navbar>
        {/* <ProductsListContainer /> */}
        <ProductDetailContainer />
        {/* <Users /> */}
        {/* <Comments /> */}
        {/* <Post /> */}
      </Navbar>
    </div>
  );
}

export default App;
