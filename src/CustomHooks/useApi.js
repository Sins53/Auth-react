import { useState } from "react";

var qwe = null;
const useApi = (url) => {
  const [token, setToken] = useState(null);
  const [apiData, setApiData] = useState(null);

  const baseUrl = "https://ecom-react-task.herokuapp.com/";

  const isToken = localStorage.getItem("token");
  // console.log(isToken);

  function getToken(body) {
    if (body !== null) {
      fetch(baseUrl + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      })
        .then((response) => response.json())
        .then((data) => {
          setToken(data);
        });
    }
  }
  function getData(method, body) {
    if (isToken !== null && method !== null) {
      fetch(baseUrl + url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + isToken,
        },
        body: body ? JSON.stringify(body) : null,
        // body: body ? JSON.stringify(body) : undefined,
      })
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
          qwe = data;
        });
    }
    // console.log(qwe);
    return qwe;
  }

  return { token, apiData, getToken, getData };
};

export default useApi;
