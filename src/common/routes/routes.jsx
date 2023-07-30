import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Home } from "../../pages/index";
import { ContactUs } from "../../pages/ContactUs/ContactUs.component";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<ContactUs />} path="/contact-us"></Route>
    </Routes>
  );
};

export default AppRoute;
