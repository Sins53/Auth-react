import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage";

const Main = () => {
  let navigate = useNavigate();
  const isToken = localStorage.getItem("token");

  useEffect(() => {
    if (isToken === null) {
      navigate("/login");
    }
  });

  return (
    <>
      <DashboardPage />
    </>
  );
};

export default Main;
