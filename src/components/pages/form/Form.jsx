import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
  });
  // En vez d crear un estado por cada input, creamos un estado que contenga un objeto con los datos del usuario

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastname,
    };
    console.log(data);
  };

  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    {
      /*
        Ahora, como queremos que esto sea escalable creamos un solo handle que en vez de tener hardcodeada la propiedad
        que queremos cambiar por nuestro value del input, tomamos el nombre del input y le decimos que, coloque el target.value
        en el target.name que se este modificando
        Por ultimo, realizamos un spread del objeto userData, para que no se modifique de manera erronea el objeto y respete los
        datos del usario anteriormente creados
    */
    }
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
        <button>Enviar</button> {/* Por default es type submit */}
      </form>
    </div>
  );
};

// Forma 1 (No escalable)
// --> Que sucede? Si por cada input tenemos que crear un estado y un handle se hace muy tedioso el hecho de crear
// formularios...
// export const Form = () => {
//   const [name, setName] = useState("");
//   const [lastname, setLastname] = useState("");

//   const handleSubmit = (e) => {
//     {
//       /* Handle: Por convencion a las funciones asignadas a los form se les llama handleAlgoMas */
//       /* Event: Al llamar una funcion desde un onSubmit, react nos va a enviar un parametro por default, a este parametro
//       habitualmente se lo llama evento / event / e */
//     }
//     e.preventDefault();
//     let data = {
//       nombreUsuario: name,
//       apellidoUsuario: lastname,
//     };
//     console.log(data);
//   };

//   const handleName = (e) => {
//     setName(e.target.value);
//   };

//   const handleLastname = (e) => {
//     setLastname(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Este es el form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ingrese su nombre"
//           name="nombre"
//           onChange={handleName}
//         />
//         <input
//           type="text"
//           placeholder="Ingrese su apellido"
//           name="apellido"
//           onChange={handleLastname}
//         />
//         <button>Enviar</button> {/* Por default es type submit */}
//       </form>
//     </div>
//   );
// };
