import { ItemCount } from "../../common/counter/ItemCount";
import "./ProductDetail.css";

export const ProductDetail = ({ productSelected, addToCart }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data);
  };

  return (
    <>
      <div className="product_detail_container">
        <h3>{productSelected.title}</h3>
        <img src={productSelected.img} alt={productSelected.title} />
        {productSelected.stock > 0 ? (
          <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
        ) : (
          <h4>No hay Stock</h4>
        )}
      </div>
    </>
  );
};
