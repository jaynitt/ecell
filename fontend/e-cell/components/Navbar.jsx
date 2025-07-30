import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("token");
   
    navigate("/login");
     window.location.reload()
  };

  return (
 <>
    <div className="flex items-center justify-between w-screen h-[10vh] px-6 shadow-md">
      {/* Logo */}
      <div
        className="z-40 m-2 bg-cover bg-center w-20 h-16 mt-3 shadow-2xl cursor-pointer hover:w-21"
        style={{ backgroundImage: `url(${logo})` }}
        onClick={() => navigate("/home")}
      ></div>

      {/* Nav Links */}
      <div className="flex gap-9">
        <div className=" text-center font-semibold hover:text-gray-300 cursor-pointer text-2xl "
         onClick={() => navigate("/startup")}>
        Apply for internship
        </div>
      
        
      </div>

      {/* Signout Button */}
      <button
        onClick={handleSignout}
        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700  hover:shadow-md hover:translate-y-[5px]  transition-transform duration-300 ease-out px-4 py-2 rounded-3xl "
      >
        Sign Out
      </button>
      
    </div>
    <div className=" w-screen h-0.5 bg-black "></div>
    </>
  );
}

export default Navbar;
