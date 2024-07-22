export const ProductsList = ({ contador, setContador }) => {
  return (
    <>
      <h1>Aca van los productos</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </>
  );
};
