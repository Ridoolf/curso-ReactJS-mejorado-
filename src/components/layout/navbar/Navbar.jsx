import { useState } from "react";
import "./Navbar.css";
import "@fontsource/roboto/300.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Inicio");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav_logo">
          <img
            src="https://marketplace.canva.com/EAFfTlMRgUE/1/0/1600w/canva-logo-para-tienda-de-ropa-y-accesorios-beige%2C-rosa-y-verde-ScIVINIWL_E.jpg"
            alt="logo de la tienda 'Astra'"
          />
        </div>
        <div className="menu_responsive">
          <MenuIcon className="menu_icon" />
        </div>
        <ul className="nav_lista">
          <Link to={"/"}>
            <li
              className={`nav_lista_item ${
                activeItem === "Inicio" ? "actual" : ""
              }`}
              onClick={() => handleItemClick("Inicio")}
            >
              Inicio
            </li>
          </Link>
          <Link to={"/products"}>
            <li
              className={`nav_lista_item ${
                activeItem === "Tienda" ? "actual" : ""
              }`}
              onClick={() => handleItemClick("Tienda")}
            >
              Tienda
            </li>
          </Link>
          <li
            className={`nav_lista_item ${
              activeItem === "Sucursales" ? "actual" : ""
            }`}
            onClick={() => handleItemClick("Sucursales")}
          >
            Sucursales
          </li>
        </ul>
        <ul className="nav_perfil">
          <li
            className={`nav_perfil_item ${
              activeItem === "Contacto" ? "actual" : ""
            }`}
            onClick={() => handleItemClick("Contacto")}
          >
            Contacto
          </li>
          <li
            className={`nav_perfil_item ${
              activeItem === "Perfil" ? "actual" : ""
            }`}
            onClick={() => handleItemClick("Perfil")}
          >
            Perfil
          </li>
        </ul>
      </nav>
    </>
  );
};
