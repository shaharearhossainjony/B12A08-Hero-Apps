import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
