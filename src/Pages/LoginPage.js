import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";

const LoginPage = () => {
  const [body, setBody] = useState(null);
  const [token] = useFetch("auth/login", "POST", body);

  let navigate = useNavigate();
  const name = useRef(null);
  const pswd = useRef(null);

  const isToken = localStorage.getItem("token");

  const checkApi = () => {
    var email = name.current.value;
    var password = pswd.current.value;
    setBody({
      email,
      password,
    });
  };

  useEffect(() => {
    if (token !== null) {
      if (token?.success && token.data?.token) {
        localStorage.setItem("token", token.data.token);
      } else {
        alert(token.message);
      }
    }
    if (isToken !== null) {
      navigate("/");
    }
  }, token);

  return (
    <>
      <div className="LoginPage">
        <form>
          <div className="box">
            <h1>LOGIN</h1>
            <input ref={name} type="text" name="" placeholder="Email" />
            <input ref={pswd} type="password" name="" placeholder="Password" />
            <button
              className="btn btn-primary"
              onClick={checkApi}
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {token?.success ? <Navigate to="/" /> : null}
    </>
  );
};

export default LoginPage;
