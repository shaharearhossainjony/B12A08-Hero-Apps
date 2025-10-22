import React from "react";
import { useRouteError } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ErrorImg from '../../assets/error-404.png'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <NavBar />
      <div className='flex justify-center items-center'><img src={ErrorImg}></img></div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
