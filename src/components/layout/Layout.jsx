import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import "./Layout.css";

export const Layout = () => {
  return (
    <div id="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
