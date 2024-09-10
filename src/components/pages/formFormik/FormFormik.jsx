import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormFormik = () => {
  // tanto handleSubmit, handleChange, initialValues y onSubmit son propiedades de formik

  /*
    handleSubmit: funcion que nos retorna formik para asignarle a nuestro form
    
    onSubmit: cuando consumimos el useFormik nos pide initialValues y onSubmit, este, es la 
    funcion que queremos ejecutar cuando nuestro form se envie, osea, cuando ejecute nuestro 
    handleSubmit... aqui iria la conexion con el back ej

    handleChange: funcion que nos retorna formik para asignarle a cada imput

    initialValues: son los valores iniciales de nuestros inputs, que, cuando se ejecuta la funcion 
    handleChange, asigna el valor de cada input a las propiedades, en este caso, nombre / email / telefono

  */

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (datos) => {
      console.log(datos);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatiorio")
        .min(3, "El campo debe tener al menos 3 caracteres"),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatiorio"),
    }),
  });

  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};
