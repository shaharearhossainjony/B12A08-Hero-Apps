import React, { useState, useEffect } from "react";
import {
  loadInstalledAppList,
  removeFromAppList,
} from "../../Utilities/LocalStorage";
import DownloadImg from "../../assets/downloadimg.png";
import RatingImg from "../../assets/star.png";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Installation = () => {
  const [appList, setAppList] = useState(() => loadInstalledAppList());
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const sorted = sortApps(appList, sortOrder);
    setAppList(sorted);
  }, [sortOrder]);

  const sortApps = (apps, order) => {
    if (order === "download-asc") {
      return [...apps].sort((a, b) => a.downloads - b.downloads);
    } else if (order === "download-desc") {
      return [...apps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return apps;
    }
 
  };


  const handleUninstall = (id, title) => {
    removeFromAppList(id);
    const updated = appList.filter((app) => app.id !== id);
    setAppList(updated);
    toast.success(`${title} successfully uninstalled!`);
  };

  const FormatNum = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M+";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
    } else {
      return number.toString();
    }
  };

  return (
    <div className="min-h-screen px-5">
     
      <div className="my-10 text-center">
        <h1 className="font-extrabold text-5xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Your Installed Apps
        </h1>
        <p className="mt-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Explore All Apps You Have Installed
        </p>
      </div>

     
      <div className="flex justify-between py-5 items-center border-b border-[#632EE3]">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          {appList.length} App{appList.length !== 1 && "s"} Found
        </h1>

        <select
          className="select select-bordered w-full max-w-xs"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by Download</option>
          <option value="download-asc">Low → High</option>
          <option value="download-desc">High → Low</option>
        </select>
      </div>

     
      <div className="flex flex-col gap-5 my-10">
        {appList.length === 0 ? (
          <p className="text-center text-[#632EE3]">No apps installed yet!</p>
        ) : (
          appList.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all"
            >
            
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-md object-cover"
              />

             
              <div className="flex-1 mx-4">
                <h2 className="text-xl font-bold text-gray-800">{app.title}</h2>
                <div className="text-sm text-gray-500 flex gap-4 mt-1">
                  <div className="flex gap-2 text-black">
                    {" "}
                    <img className="h-5" src={DownloadImg}></img>
                    <span>{FormatNum(app.downloads)}</span>
                  </div>
                  <div className="flex gap-2 text-black">
                    {" "}
                    <img className="h-5" src={RatingImg}></img>
                    <span>{app.ratingAvg}</span>
                  </div>

                  <span className="text-black">{app.size} MB</span>
                </div>
              </div>

              
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn bg-[#00D390] hover:bg-red-600 text-white font-bold rounded-md px-4 py-2"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Installation;
