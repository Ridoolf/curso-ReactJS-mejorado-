import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = () => {
  const [contador, setContador] = useState(0);
  return <Counter contador={contador} setContador={setContador} />;
};
