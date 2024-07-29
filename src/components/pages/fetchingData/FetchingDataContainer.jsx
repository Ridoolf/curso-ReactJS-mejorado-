import { useState, useEffect } from "react";
import { FetchingData } from "./FetchingData";

export const FetchingDataContainer = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log("err: ", err));
  }, []);

  const createUser = () => {
    let data = {
      name: "Lucas Ridolfi",
      userName: "Lucas",
      email: "lucasg.ridolfi@gmail.com",
    };

    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });

    promise
      .then((res) => res.json())
      .then((data) => console.log("Usuario creado: ", data))
      .catch((err) => console.log("Ocurrio un error: ", err));
  };

  return <FetchingData users={users} createUser={createUser} />;
};
