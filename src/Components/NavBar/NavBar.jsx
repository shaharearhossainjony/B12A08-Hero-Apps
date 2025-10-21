import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faHouse } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Logo from "../../../src/assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className=" hover:border-b border-[#632EE3] mr-2">
              <Link
                to="/"
                className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
              >
                {" "}
                <FontAwesomeIcon icon={faHouse} className="text-[#632EE3]" />
                Home
              </Link>
            </li>
            <li className="hover:border-b border-[#632EE3] mr-2">
              <Link
                to="apps"
                className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faAppStoreIos}
                  className="text-[#632EE3] mr-1"
                />
                Apps
              </Link>
            </li>
            <li className="hover:border-b border-[#632EE3]">
              <Link
                to="installation"
                className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
              >
                <FontAwesomeIcon icon={faDownload} className="text-[#632EE3]" />{" "}
                Installation
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center ">
          <img src={Logo} className="h-8"></img>
          <span className=" font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            HERO.IO
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className=" hover:border-b border-[#632EE3] mr-2">
            <Link
              to="/"
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
            >
              {" "}
              <FontAwesomeIcon icon={faHouse} className="text-[#632EE3]" />
              Home
            </Link>
          </li>
          <li className="hover:border-b border-[#632EE3] mr-2">
            <Link
              to="apps"
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
            >
              {" "}
              <FontAwesomeIcon
                icon={faAppStoreIos}
                className="text-[#632EE3] mr-1"
              />
              Apps
            </Link>
          </li>
          <li className="hover:border-b border-[#632EE3]">
            <Link
              to="installation"
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
            >
              <FontAwesomeIcon icon={faDownload} className="text-[#632EE3]" />{" "}
              Installation
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/shaharearhossainjony"
          className="btn font-semibold font-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
