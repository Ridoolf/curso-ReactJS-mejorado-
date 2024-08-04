import { useFetch } from "./hooks/useFetch";

export const Users = () => {
  /*
  Si en cada archivo tenemos que repetir la sentencia del fetching de datos:

  const [user, setUser] = useState({});

  useEffect( ()=>{
        const users = fetch("url");
        users
            .then(res => res.json())
            .then(res => setUser(res))
            .catch(err => console.log(err))
    }, [] )

  Se va a tornar repetitivo, por lo que lo mas conveniente es crear un custom hook reutilizable

  Para ello creamos una carpeta que se llame hooks y creamos el archivo con un nombre que haga referencia
  a lo que vamos a hacer anteponiendo la palabra use. Como en este caso haremos siempre un fetch, nuestro
  archivo de custom hook se va a llamar useFetch.
  */

  const [users] = useFetch({}, "https://jsonplaceholder.typicode.com/users");

  console.log(users);

  return <h1>user</h1>;
};
