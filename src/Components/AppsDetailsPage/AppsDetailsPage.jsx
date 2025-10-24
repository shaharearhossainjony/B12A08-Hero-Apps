import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import DownloadImg from "../../assets/downloadimg.png";
import RatingImg from "../../assets/star.png";
import ReviewImg from "../../assets/review.png";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import GlobalLoader from '../GlobalLoader/GlobalLoader'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  updateInstalledAppList,
  loadInstalledAppList,
} from "../../Utilities/LocalStorage";
import AppError from "../AppError/AppError";

const AppsDetailsPage = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const app = products.find((p) => p.id === Number(id));
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = loadInstalledAppList();
    const isInstalled = installedApps.some((p) => p.id === Number(id));
    setInstalled(isInstalled);
  }, [id]);

  if (loading) return <GlobalLoader></GlobalLoader>
  if (!app) return <AppError></AppError>

  const handleInstall = () => {
    updateInstalledAppList(app);
    setInstalled(true);
    toast.success(`${app.title} successfully installed!`);
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
    <div className="m-10">
      <div className="flex  border-b-2 pb-10 border-[#9F62F2]">
        <div>
          <img className="rounded-2xl" src={app.image} alt={app.title} />
        </div>
        <div className="ml-10">
          <div className="border-b-2 pb-5 border-[#9F62F2]">
            <h1 className="font-extrabold pb-3 text-5xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {app.title}
            </h1>
            <p className="font-semibold text-xl pt-3 text-[#9F62F2]">
              Developed by:{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>
          </div>

          <div className="flex gap-5 mt-5">
            <div>
              <p className="bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent font-semibold">
                Downloads
              </p>
              <div className="flex items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent">
                  {FormatNum(app.downloads)}
                </h1>
                <img className="pl-2 h-6" src={DownloadImg} alt="Downloads" />
              </div>
            </div>

            <div>
              <p className="bg-gradient-to-r from-[#FFB347] to-[#FF8811] bg-clip-text text-transparent font-semibold">
                Average Ratings
              </p>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#FFB347] to-[#FF8811] bg-clip-text text-transparent">
                  {app.ratingAvg}
                </h1>
                <img className="pl-2 h-6" src={RatingImg} alt="Rating" />
              </div>
            </div>

            <div>
              <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                Total Reviews
              </p>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  {FormatNum(app.reviews)}
                </h1>
                <img className="pl-2 h-6" src={ReviewImg} alt="Reviews" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={handleInstall}
              className={`btn font-bold  text-white text-xl transition-all duration-300 ${
                installed ? "bg-[#28a745]" : "bg-[#00D390]"
              }`}
              disabled={installed}
            >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-extrabold text-4xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Ratings
        </h1>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={[...app.ratings].reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Bar dataKey="count" barSize={30} fill="#FF8811">
              <LabelList dataKey="count" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h1 className="font-extrabold text-4xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Description
        </h1>
        <p className="mt-3 text-gray-500">{app.description}</p>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AppsDetailsPage;
