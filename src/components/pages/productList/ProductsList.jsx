import ProductCard from "../../common/card/ProductCard";
import "./ProductsList.css";

export const ProductsList = ({ items }) => {
  return (
    <div className="cards_container">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};
