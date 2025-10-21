import React from "react";
import PlayStoreLogo from "../../assets/PSlogo.png";
import AppleStoreLogo from "../../assets/AppleLogo.png";
import HeroImage from "../../assets/hero.png";
import useProducts from "../../Hooks/useProducts";
import TrendingAppsCard from "../TrendingAppsCard/TrendingAppsCard";
import DownloadImg from '../../assets/downloadimg.png'
import RatingImg from '../../assets/star.png'



const Home = () => {
const {loading , error, products}= useProducts()

const trendingApps = products.slice(0, 8)
console.log(trendingApps);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
        <h1 className="font-bold text-7xl text-center">We Build</h1>
        <h1 className="font-bold text-7xl text-center">
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            Productive
          </span>{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            Apps
          </span>
        </h1>
        <p className="text-center pt-5 text-xl italic">
          At <span className="font-bold italic ">HERO.IO</span> , we craft
          innovative apps designed to make everyday life simpler,<br></br>{" "}
          smarter, and more exciting. Our goal is to turn your ideas into
          digital experiences that <br></br> truly make an impact
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://play.google.com/store" target="_blank">
          <button className="btn">
            <img src={PlayStoreLogo}></img> Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <button className="btn">
            <img src={AppleStoreLogo}></img>App Store
          </button>
        </a>
      </div>
      {/* image div of hero */}
      <div className="max-w-screen-xl mx-auto my-auto w-full px-4 md:px-8 lg:px-12 pt-10  flex-1">
        <img src={HeroImage}></img>
      </div>

      {/* hero trusted section */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full h-full">
        <div>
          <h1 className="font-bold text-5xl text-white text-center py-5">
            Trusted by Millions, Built for You
          </h1>
        </div>

        <div className="flex justify-evenly items-center md: mb-10 p-10">
          <div className="text-center">
            <h6 className="pt-2 text-white">Total Downloads</h6>
            <h1 className="pt-2 text-white font-extrabold text-6xl">29.6M</h1>
            <h6 className="pt-2 text-white">21% more than last month</h6>
          </div>

          <div className="text-center">
            <h6 className="pt-2 text-white">Total Reviews</h6>
            <h1 className="pt-2 text-white font-extrabold text-6xl">906K</h1>
            <h6 className="pt-2 text-white">46% more than last month</h6>
          </div>

          <div className="text-center">
            <h6 className="pt-2 text-white">Active Apps</h6>
            <h1 className="pt-2 text-white font-extrabold text-6xl">132+</h1>
            <h6 className="pt-2 text-white">31 more will Launch</h6>
          </div>
        </div>
      </div>







      {/* trending app section */}
      <div>
        <div>
          <h1 className="font-bold text-5xl text-center text-[#632EE3]">
            Trending Apps
          </h1>
          <p className="font-bold text-xl text-center text-[#9F62F2] pt-3 pb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* card for apps section */}
        <div>
          {/* {
            trendingApps.map( app => <TrendingAppsCard key={app.id} app={app}></TrendingAppsCard>)
          } */}
          {
            trendingApps.map(app=> <div  className='flex flex-cols-4'>
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
                    <button className='btn'>Show All</button>
            </div>) 
            }  
          
        </div>

      </div>
    </div>
  );
};

export default Home;
