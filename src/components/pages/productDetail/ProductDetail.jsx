import { ItemCount } from "../../common/counter/ItemCount";

export const ProductDetail = ({ productSelected }) => {
  console.log(productSelected);
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log(data);
  };

  return (
    <>
      <div>
        <h3>{productSelected.title}</h3>
      </div>
      <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
    </>
  );
};
