// import React from 'react'

import { CiTimer } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
 <>
  {/* Top Bar */}
  <div className="bg-black py-3 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">

    {/* Logo Section (Left) */}
    <div className="flex-shrink-0">
      <img
        src="/src/assets/logo.png" 
        alt="Logo"
        className="h-10 w-auto"
      />
    </div>

    {/* Right Contents */}
    <div className=" flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full justify-end">

      <div className="flex flex-col mx-3 sm:flex-row gap-4 sm:gap-6 items-start sm:items-center text-white text-sm">
        <span className="inline-flex items-center gap-2 ">
          <CiTimer />
          Mon to Fri: 9:00 am to 6:00 pm
        </span>
        <span className="inline-flex items-center gap-2">
          <FaWhatsapp />
          977(970) 533 3552
        </span>
      </div>

      <button
        className="px-4 py-2 rounded border-0  text-sm"
        style={{ backgroundColor: "#ce8037", color: "white" }}
      >
        GET IN TOUCH
      </button>
    </div>
  </div>

  {/* Main Nav */}
  <div className="flex justify-center">

 <ul className="flex gap-8 mt-3 px-1 text-[17px] font-medium">
  <li>
    <Link
      to="/home"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to="/Propmgmt"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      Properties Management
    </Link>
  </li>
  <li>
    <Link
      to="/digsoln"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      Digital Solutions
    </Link>
  </li>
  <li>
    <Link
      to="/proplist"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      Property Listing
    </Link>
  </li>
  <li>
    <Link
      to="/blogs"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      Blogs
    </Link>
  </li>
  <li>
    <Link
      to="/contacts"
      className="text-black hover:text-[#ce8037] transition-colors duration-300 ease-in-out"
    >
      Contacts
    </Link>
  </li>
</ul>
  </div>


</>


  );
};

export default Navbar;
