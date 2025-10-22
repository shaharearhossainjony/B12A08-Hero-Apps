
import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadImg from "../../assets/downloadimg.png";
import RatingImg from "../../assets/star.png";

const TrendingAppsCard = ({ app }) => {
  const navigate = useNavigate();

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
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="card bg-base-100  shadow-xl hover:scale-105 transition ease-in-out mb-10 cursor-pointer"
    >
      <figure>
        <img className="p-2 rounded-xl" src={app.image} alt={app.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{app.title}</h2>
        <div className="flex justify-between space-x-2">
          <button className="btn border-[#00D390] text-[#00D390]">
            <img src={DownloadImg} alt="Downloads" />
            {FormatNum(app.downloads)}
          </button>
          <button className="btn border-[#FF8811] text-[#FF8811]">
            <img src={RatingImg} alt="Rating" />
            {app.ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingAppsCard;






