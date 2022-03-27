import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  navigate("/");
  return (
    <>
      <div>HomePage</div>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};

export default HomePage;
