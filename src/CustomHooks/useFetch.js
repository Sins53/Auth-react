import { useState, useEffect } from "react";

const useFetch = (url, method, body) => {
  const [data, setData] = useState(null);
  const baseUrl = "https://ecom-react-task.herokuapp.com/";

  useEffect(() => {
    if (body !== null) {
      fetch(baseUrl + url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [url, method, body]); //if either url or method or body changes it will fire

  return [data];
};

export default useFetch;
