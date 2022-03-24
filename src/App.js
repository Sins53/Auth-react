import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

function App() {
  const routes = [
    { link: "/", name: Main },
    { link: "/login/", name: LoginPage },
    { link: "/home/", name: HomePage },
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
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
