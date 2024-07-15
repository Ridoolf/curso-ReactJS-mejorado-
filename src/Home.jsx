import styles from "./Home.module.css";

export const Home = () => {
  let nombre = "Lucas";
  let mascota = {
    tipo: "perro",
    nombre: "benji",
    edad: 7,
    raza: "calle",
  };

  return (
    <>
      <p className={styles.texto_home}>
        {nombre} tiene un {mascota.tipo} que se llama {mascota.nombre}, tiene{" "}
        {mascota.edad} años y es raza {mascota.raza}
      </p>
    </>
  );
};

/*
Que son los modulos de css?

    Es una froma de trabajar con estilos en la que en vez de importar la hoja de estilos de forma convensional, lo importamos
    como si fuera un objeto (en este caso llamado 'styles') y a la hora de aplicarle estilos a nuestros elementos accedemos a cada propiedad 
    de la hoja de estilos. Por ejemplo, si tenemos un div class container y en nuestro css tenemos un .container, ese .container pasa a ser una propiedad del objeto styles y podemos asignarle los estilos a nuestro div asi: <div className={styles.container}>

Que ventajas nos otorga esto?

    Retomando el ejemplo anterior, cuando inspeccionamos el elemento en nuestro navegador nos damos cuenta de que el className que asignamos ahora tiene un hash que nosotros no colocamos, algo asi como class="_container_12xut_3" ese hash seria como un id UNICO que nos crea esta forma de trabajo con modulos y, nos permite crear otro .container en otro componente y que no se pisen los estilos ya que cada uno va a tener algo asi como un ID unico

*/
