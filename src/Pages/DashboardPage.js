import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateUser from "./adminPages/CreateUser";
import RoleSetting from "./adminPages/RoleSetting";
import ScreenSetup from "./adminPages/ScreenSetup";
import profilePic from "../assets/images/profile-pic.jpg";

const DashboardPage = () => {
  const [display, setDisplay] = useState("none");
  const [num, setNum] = useState(0);
  let navigate = useNavigate();

  const DisplayPage = [
    { id: 0, name: CreateUser },
    { id: 1, name: RoleSetting },
    { id: 2, name: ScreenSetup },
  ];

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
                  <button className="btn" onClick={() => setNum(0)}>
                    Create User
                  </button>
                </li>
                <li>
                  <button className="btn" onClick={() => setNum(1)}>
                    Role Setting
                  </button>
                </li>
                <li>
                  <button className="btn" onClick={() => setNum(2)}>
                    Screen Setup
                  </button>
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
          {DisplayPage.map((item) => {
            return item.id === num ? (
              <div>
                <item.name />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
