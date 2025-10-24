import React, { useState, useEffect } from "react";
import useProducts from "../../Hooks/useProducts";
import TrendingAppsCard from "../TrendingAppsCard/TrendingAppsCard";
import ErrorAppsImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router-dom";
import GlobalLoader from "../GlobalLoader/GlobalLoader";

const Apps = () => {
  const { products, loading } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const [filteredApps, setFilteredApps] = useState(products);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = products.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, products]);

  return (
    <div className="max-w-screen-xl mx-auto w-full mt-10 relative">
      {(loading || isSearching) && <GlobalLoader />}
      <div className="mb-10">
        <h1 className="font-extrabold text-5xl text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Our All Applications
        </h1>
        <p className="text-center mt-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mx-5">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            ({filteredApps.length}) Apps Found
          </h1>

          <label className="input input-bordered flex items-center gap-2 w-full sm:w-80">
            <input
              type="search"
              className="grow"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 my-5">
          {filteredApps.map((app) => (
            <TrendingAppsCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 mb-5">
          <img
            src={ErrorAppsImg}
            alt="No apps found"
            className="w-72 h-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-red-500">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="font-bold text-center text-xl my-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            The App you are requesting is not found on our system. please try
            another apps!!
          </p>
          <button
            onClick={() => navigate(0)}
            className="btn my-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl font-bold"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;