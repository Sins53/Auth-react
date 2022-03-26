import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import CreateUser from "./Pages/adminPages/CreateUser";
import RoleSetting from "./Pages/adminPages/RoleSetting";
import ScreenSetup from "./Pages/adminPages/ScreenSetup";

function App() {
  const routes = [
    { link: "/", name: Main },
    { link: "/login/", name: LoginPage },
    { link: "/home/", name: HomePage },
  ];

  const outletRoutes = [
    { link: "user/", name: CreateUser },
    { link: "screens/", name: ScreenSetup },
    { link: "roles/", name: RoleSetting },
  ];
  return (
    <>
      <Routes>
        {routes.map((item) => {
          return (
            <Route
              key={"DynamicRoutes"}
              path={item.link}
              exact
              element={<item.name />}
            >
              {item.link === "/" ? (
                <>
                  {outletRoutes.map((item) => {
                    return (
                      <Route
                        key={"DynamicRoutes"}
                        path={item.link}
                        exact
                        element={<item.name />}
                      />
                    );
                  })}

                  {/* <Route path="createuser" element={<CreateUser />} />
                  <Route path="rolesetting" element={<RoleSetting />} />
                  <Route path="screen" element={<ScreenSetup />} /> */}
                </>
              ) : null}
            </Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
