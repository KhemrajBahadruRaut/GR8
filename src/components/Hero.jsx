import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import LesConnect from "./Pages/btnModals/LesConnect";

const images = [
  "/src/assets/BG/background.png",
];

const Hero = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const drawer = document.getElementById('my-drawer-4');
    const handleChange = () => {
      setIsDrawerOpen(drawer?.checked || false);
    };
    
    drawer?.addEventListener('change', handleChange);
    return () => drawer?.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute md:left-[30px] top-2 z-10">
        <img
          width="223.3px"
          height="148.2px"
          src="/src/assets/Flogo.png"
          alt="Crestonix Solutions Logo"
          className="h-20 md:h-40 lg:h-45"
        />
      </div>

      {/* socials - Modified for sidebar alignment */}
      <div
        className={`relative  top-4 md:top-[45px] z-10 text-white sm:right-[100px] md:right-[100px] lg:right-[100px] flex flex-col items-end transition-all duration-300 ${
          isDrawerOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="gap-1 p-2 md:gap-4 flex justify-center">
          {/* Facebook */}
          <div className="relative p-2 group">
            <FaFacebook className="text-xl text-black md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-900 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* Instagram */}
          <div className="relative p-2 group">
            <FaInstagram className="text-black text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-400 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-400 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* Youtube */}
          <div className="relative text-black p-2 group">
            <FaYoutube className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* TikTok */}
          <div className="relative text-black p-2 group">
            <FaTiktok className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="relative text-black p-2 group">
            <FaLinkedin className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>
        </div>

        {/* lets connect button is here */}
        <div className="mt-2 relative lg:left-[-60px] md:left-[-40px] md:mt-4 ">
          <LesConnect />
        </div>
      </div>

      {/* sidebar  */}
      <Sidebar />

      <div className="z-10 relative top-[310px] transform md:px-10 text-start">
        <p
          className="px-4 text-[#453f35] 
             [text-shadow:3px_2px_19px_rgba(0,0,0,0.3)] 
             sm:[text-shadow:4px_3px_24px_rgba(0,0,0,0.35)]
             text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
             tracking-[4.5px] font-bricolage "
        >
          GR8 Private Limited
        </p>
        <p
          className="px-4 text-uppercase text-[#453f35] 
              [text-shadow:3px_1px_4px_rgba(0,0,0,0.3)]
              text-xl sm:text-1xl md:text-2xl lg:text-3xl tracking-[2px]"
        >
          A Pioneer Initiative by GR8 Realtors USA
        </p>
      </div>

      {/* right buttons */}
      <div className="gap-5 flex  absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 gap-2 md:gap-5 z-10 flex-wrap justify-center">
        <Link to="digital-soln">
          <button className="px-8 py-3  md:px-10 md:py-3 rounded text-sm md:text-base text-white font-medium backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300">
            Digital Solution
          </button>
        </Link>
        <Link to="prop-mgmt">
          <button className="px-3 py-3 md:px-6 md:py-3  rounded text-sm md:text-base text-white font-medium backdrop-blur-sm  bg-black/40 hover:bg-black/60 transition-all duration-300">
            Property Management
          </button>
        </Link>
      </div>

      {/* Layered background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center ease-in-out     }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export default Hero;