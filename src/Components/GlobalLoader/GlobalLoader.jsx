
import React from 'react';
import { Infinity } from 'ldrs/react';
import 'ldrs/react/Infinity.css';  

const GlobalLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-200 z-50">
      <Infinity
        size="100"
        stroke="8"
        strokeLength="0.15"
        bgOpacity="0.5"
        speed="1"
        color="#632ee3"
      />
    </div>
  );
};

export default GlobalLoader;
