import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../../pages/ContactUs/ContactUs.component";
import { About, Home, Policy } from "../../pages/index";
import IndustrialSolutions from "../../pages/IndustrialSolutions/IndustrialSolutions.component";
import Career from "../../pages/Career/Career.component";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<ContactUs />} path="/contact-us"></Route>
      <Route element={<Policy />} path="/vision"></Route>
      <Route element={<Policy />} path="/mission"></Route>
      <Route element={<Policy />} path="/quality"></Route>
      <Route
        element={<IndustrialSolutions />}
        path="/industrial-solutions"
      ></Route>
      <Route element={<Career />} path="/career"></Route>
    </Routes>
  );
};

export default AppRoute;
