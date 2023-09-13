//React
import { Route, Routes } from "react-router-dom";
//Routes
import { appRoutes } from "./ListOfRoutes";
import { Home2 } from "../../pages";

const AppRoute = () => {
  console.log(appRoutes);
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} element={route.element} path={route.route}></Route>
      ))}
      <Route element={<Home2 />} path={"/home2"}></Route>
    </Routes>
  );
};

export default AppRoute;
