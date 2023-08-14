//React
import { Route, Routes } from "react-router-dom";
//Routes
import { appRoutes } from "./ListOfRoutes";

const AppRoute = () => {
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} element={route.element} path={route.route}></Route>
      ))}
    </Routes>
  );
};

export default AppRoute;
