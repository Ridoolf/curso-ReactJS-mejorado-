import { useEffect, useState } from "react";

export const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let data = fetch(endpoint);
    data
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("error: ", err));
  }, [endpoint]);

  return [data];
};
