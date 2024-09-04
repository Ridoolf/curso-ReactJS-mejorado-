import CartWidget from "../../common/cartWidget/CartWidge";
import { ItemCount } from "../../common/counter/ItemCount";
import "./ProductDetail.css";

export const ProductDetail = ({ productSelected, addToCart, prodQuantity }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data);
  };

  return (
    <div>
      <CartWidget />
      <div className="product_detail_container">
        <h3>{productSelected.title}</h3>
        <img src={productSelected.img} alt={productSelected.title} />
        {productSelected.stock > 0 ? (
          <ItemCount
            stock={productSelected.stock}
            initial={prodQuantity}
            onAdd={onAdd}
          />
        ) : (
          <h4>No hay Stock</h4>
        )}
      </div>
    </div>
  );
};
