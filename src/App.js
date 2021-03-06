import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import CreateUser from "./Pages/adminPages/CreateUser";
import RoleSetting from "./Pages/adminPages/RoleSetting";
import ScreenSetup from "./Pages/adminPages/ScreenSetup";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Components/Products/SingleProduct";
import PrivilegeSetup from "./Pages/adminPages/PrivilegeSetup";
import UserRoleMap from "./Pages/adminPages/UserRoleMap";

function App() {
  const routes = [
    { link: "/", name: Main },
    { link: "/login/", name: LoginPage },
    { link: "/home/", name: HomePage },
  ];

  const outletRoutes = [
    { link: "user/", name: CreateUser },
    { link: "/user/:id", name: UserRoleMap },
    { link: "screens/", name: ScreenSetup },
    { link: "roles/", name: RoleSetting },
    { link: "/roles/:id", name: PrivilegeSetup },
    { link: "products/", name: ProductsPage },
    { link: "/products/:id", name: SingleProduct },
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
