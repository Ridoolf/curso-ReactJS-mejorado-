import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <img src="" alt="logo tienda" />
      <div className="lista_nav">
        <ul>
          <li>Home</li>
          <li>Tienda</li>
          <li>Nosotros</li>
        </ul>
      </div>
      <div className="carrito">
        <BsFillCartCheckFill color="#0a0a0a" size="40px" />
        <span>2</span>
      </div>
    </div>
  );
};

export default Navbar;
