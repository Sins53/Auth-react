import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import profilePic from "../assets/images/profile-pic.jpg";

const DashboardPage = () => {
  const [display, setDisplay] = useState("none");
  let navigate = useNavigate();

  const toggleDisplay = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  const clearToken = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className=" DashboardPage">
        <div className="DashboardPage-sidebar">
          <div className=" text-center">
            <img className="img-responsive" src={profilePic} alt="" />
          </div>
          <div className="mt-4">
            <Link style={{ color: "black", textDecoration: "none" }} to="/home">
              <h2>Home</h2>
            </Link>
            <button
              className="btn mt-2"
              onClick={toggleDisplay}
              style={{ padding: 0 }}
            >
              <h2>User Setting</h2>
            </button>
            <div className="DashboardPage-sidebar-links" style={{ display }}>
              <ul>
                <li>
                  <Link to="user/">Create User</Link>
                </li>
                <li>
                  <Link to="roles/">Role Setting</Link>
                </li>
                <li>
                  <Link to="screens/">Screen Setup</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-danger" onClick={clearToken}>
              Logout
            </button>
          </div>
        </div>
        <div className="DashboardPage-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
