import { useCount } from "../../hooks/useCount";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="item_count_container">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};
