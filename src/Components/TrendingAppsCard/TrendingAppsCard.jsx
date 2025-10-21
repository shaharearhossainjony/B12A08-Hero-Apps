import React from "react";
import DownloadImg from '../../assets/downloadimg.png'
import RatingImg from '../../assets/star.png'


const TrendingAppsCard = ({ app }) => {
  console.log(app);
  return (
    <div className="">
      <div  className="w-70  rounded-xl shadow-2xl hover:scale-105 transition ease-in-out">
        <img src={app.image} className="rounded-2xl p-2"></img>
        <h1 className="font-bold text-2xl text-center">{app.title}</h1>

        <div className='flex justify-between px-5 mt-5 gap-2'>

          <div className='flex items-center btn border-[#00D390] mb-5'>
            <img className='h-5' src={DownloadImg}></img>
            <button className='text-[#00D390] mb-2'> {app.downloads}</button>
            </div>

             <div className='flex items-center  btn border-[#FF8811] '>
            <img className='h-5' src={RatingImg}></img>
            <button className=' text-[#FF8811] mb-2'> {app.ratingAvg}</button>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default TrendingAppsCard;
