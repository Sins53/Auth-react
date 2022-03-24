import { useState, useEffect } from "react";

const useNewApi = () => {
  const baseUrl = "https://ecom-react-task.herokuapp.com/";
  const isToken = localStorage.getItem("token");

  const [apiData, setApiData] = useState(null);

  var token = null;
  // var apiData = null;
  var message = null;

  function getToken(url, body) {
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
          token = data;
        });
    }
    return token;
  }

  function getData(url) {
    fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + isToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      });
    // console.log(apiData, "----------------------");
  }

  async function delData(url) {
    if (isToken !== null) {
      await fetch(baseUrl + url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + isToken,
        },
        // body: body ? JSON.stringify(body) : null,
        // body: body ? JSON.stringify(body) : undefined,
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          // console.log(data.message);
        });
    }
  }

  function postData(url, body) {
    if (isToken !== null) {
      fetch(baseUrl + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + isToken,
        },
        body: body ? JSON.stringify(body) : null,
        // body: body ? JSON.stringify(body) : undefined,
      })
        .then((response) => response.json())
        .then((data) => {
          // message = data.message;
          // console.log(data.message);
          alert(data.message);
        });
    }
    // return message;
  }

  return { getToken, getData, delData, postData, apiData };
};

export default useNewApi;
