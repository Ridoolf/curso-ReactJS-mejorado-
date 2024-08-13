import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <h3>- ASTRA SHOPPING -</h3>
      <div className="redes">
        <GitHub />
        <LinkedIn />
        <Instagram />
      </div>
      <div className="line"></div>
      <p>Copyright 2024© | Todos los derechos reservados</p>
    </div>
  );
};
