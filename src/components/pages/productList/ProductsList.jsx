import ProductCard from "../../common/card/ProductCard";

export const ProductsList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </>
  );
};
