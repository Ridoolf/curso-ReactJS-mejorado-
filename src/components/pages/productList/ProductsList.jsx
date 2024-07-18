import { CounterContainer } from "../../common/counter/CounterContainer";

export const ProductsList = ({ contador, setContador }) => {
  return (
    <>
      <h1>Aca van los productos</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <CounterContainer />
    </>
  );
};

// El presentacional maneja el HTML y el container maneja la logica... Por convension al archivo container se le
// especifica el 'container' en su nombre, y al presentacional no

// productList.jsx --> archivo presentacional
// productListContainer.jsx --> archivo container
