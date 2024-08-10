import { Link } from "react-router-dom";
import ProductCard from "../../common/card/ProductCard";
import "./ProductsList.css";

export const ProductsList = ({ items }) => {
  return (
    <>
      <ul className="filter">
        <Link
          to={"/productList"}
          style={{ textDecoration: "none", color: "#fafafa" }}
        >
          <li className="item_filter">Todo</li>
        </Link>
        <Link
          to={"/category/urbano"}
          style={{ textDecoration: "none", color: "#fafafa" }}
        >
          <li className="item_filter">Urbano</li>
        </Link>
        <Link
          to={"/category/deportivas"}
          style={{ textDecoration: "none", color: "#fafafa" }}
        >
          <li className="item_filter">Deportivo</li>
        </Link>
      </ul>
      <div className="cards_container">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
