import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.email.includes("@")) {
      console.log("El campo email no es valido");
      return;
    }

    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastname,
      emailUsuario: userData.email,
    };
    console.log(data);
  };

  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Este es el form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastname"
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleData}
        />
        <button>Enviar</button> {/* Por default es type submit */}
      </form>
    </div>
  );
};
