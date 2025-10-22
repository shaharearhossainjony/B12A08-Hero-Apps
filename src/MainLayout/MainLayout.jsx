import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import GlobalLoader from "../Components/GlobalLoader/GlobalLoader";


const MainLayout = () => {


const { products, loading } = useProducts()
if (loading) return <GlobalLoader></GlobalLoader>
  return (

    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
