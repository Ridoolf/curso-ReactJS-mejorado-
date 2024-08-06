import { useCount } from "./hooks/useCount";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};
