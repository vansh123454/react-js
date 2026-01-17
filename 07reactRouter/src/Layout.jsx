import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Header and Footer will remain same and Outlet only changing */}
      <Footer />
    </>
  );
};

export default Layout;
