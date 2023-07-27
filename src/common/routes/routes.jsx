import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/index";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<p>About</p>} path="/about"></Route>
      <Route element={<p>Contact Us</p>} path="/contact-us"></Route>
    </Routes>
  );
};

export default AppRoute;
