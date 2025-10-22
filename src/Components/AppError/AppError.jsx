import React from "react";
import { useRouteError, useNavigate } from "react-router-dom"; 
import AppErrorImg from '../../assets/App-Error.png';

const AppError = () => {
  const error = useRouteError();
  const navigate = useNavigate();  

  const toHome = () => navigate("/");
  const toApps = () => navigate("/apps");

  return (
    <div className="my-10">
  
      <div className='flex justify-center items-center'>
        <img src={AppErrorImg} alt="App Not Found" />
      </div>

      <div className="error-message text-center mt-5">
        <h2 className="text-3xl font-bold pb-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">App Not Found!!</h2>
        <p className="text-gray-500">Sorry, the app you are looking for might be removed, renamed, or is temporarily unavailable.<br></br> Please try again later.</p>
      </div>
  
      <div className="flex justify-center space-x-4 my-6">
        <button 
          onClick={toHome} 
          className="btn bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go to Home
        </button>
        <button 
          onClick={toApps} 
          className="btn hover:btn-primary border-[#632EE3] text-[#632EE3] hover:text-white text-blue py-2 px-4 rounded"
        >
          Go to Apps
        </button>
      </div>
    </div>
  );
};

export default AppError;
