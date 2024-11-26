import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  );
};
