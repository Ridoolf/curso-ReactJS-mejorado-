import { useState } from "react";

export const useCount = (initial, stock) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > initial) setCount(count - 1);
  };

  return { increment, decrement, count };
};
