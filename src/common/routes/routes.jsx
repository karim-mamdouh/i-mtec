import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../../pages/ContactUs/ContactUs.component";
import { About, Home, Policy } from "../../pages/index";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<ContactUs />} path="/contact-us"></Route>
      <Route element={<Policy />} path="/vision"></Route>
      <Route element={<Policy />} path="/mission"></Route>
      <Route element={<Policy />} path="/quality"></Route>
    </Routes>
  );
};

export default AppRoute;
