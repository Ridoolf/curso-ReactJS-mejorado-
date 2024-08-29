import { Link } from "react-router-dom";
import ProductCard from "../../common/card/ProductCard";
import "./ProductsList.css";
import { menuFilter } from "../../../routes/menuFilter";
import CartWidget from "../../common/cartWidget/CartWidge";

export const ProductsList = ({ items }) => {
  return (
    <>
      <div className="filter_container">
        <ul className="filter">
          {menuFilter.map(({ id, path }) => {
            return (
              <Link
                key={id}
                to={path}
                style={{ textDecoration: "none", color: "#fafafa" }}
              >
                <li className="item_filter">{id}</li>
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      <div className="cards_container">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
