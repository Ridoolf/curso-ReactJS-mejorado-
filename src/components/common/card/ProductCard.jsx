const ProductCard = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>quedan: {item.stock}</p>
    </div>
  );
};

export default ProductCard;
