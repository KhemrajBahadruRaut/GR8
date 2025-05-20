import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import LesConnect from "./Pages/btnModals/LesConnect";

const images = [
  "/src/assets/hero1.jpg",
  "/src/assets/hero2.jpg",
  "/src/assets/hero3.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
          src="/src/assets/logowhite.png" 
          alt="Crestonix Solutions Logo" 
          className="h-20 md:h-40 lg:h-45" 
        />
      </div>

      
      {/* socials - Modified for sidebar alignment */}
      <div className={`absolute top-4 md:top-[45px] z-10 text-white sm:right-[100px] md:right-[100px] lg:right-[100px] flex flex-col items-end transition-all duration-300 ${
        isDrawerOpen ? 'd-none' : ''
      }`}>
        <div className="gap-4 p-2 md:gap-4 flex justify-center">
          {/* Facebook */}
          <div className="relative p-2 group">
            <FaFacebook className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-900 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* Twitter */}
          <div className="relative p-2 group">
            <FaTwitter className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-400 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-400 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="relative p-2 group">
            <FaLinkedin className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>

          {/* TikTok */}
          <div className="relative p-2 group">
            <FaTiktok className="text-xl md:text-2xl lg:text-2xl" />
            <div className="absolute rounded-2 inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-75"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out delay-150"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 group-hover:h-full transition-all duration-300 ease-out delay-225"></div>
            </div>
          </div>
        </div>

        {/* lets connect button is here */}
        <div className="mt-2 relative lg:left-[-60px] md:left-[-40px] md:mt-4 ">
           <LesConnect/>
        </div>
      </div>

      {/* sidebar  */}
      <Sidebar/>

      {/* main heading */}
      <div className="z-10 relative top-[380px] transform  md:px-10  text-center">
        <p className="px-4 text-white text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-widest" style={{ fontFamily: 'Impact' }}>
  Crestonix Solutions
</p>
      </div>

      {/* right buttons */}
      <div className="gap-5 flex absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 gap-2 md:gap-5 z-10 flex-wrap justify-center">
        <Link to='digital-soln'>
        <button className="px-8 py-3 md:px-10 md:py-3 rounded text-sm md:text-base text-white font-medium shadow backdrop-blur-sm bg-white/20 hover:bg-white/40 transition-all duration-300">
          Digital Solution
        </button>
        </Link>
          <Link to='prop-mgmt'>
        <button className="px-3 py-3 md:px-6 md:py-3 rounded text-sm md:text-base text-white font-medium shadow backdrop-blur-sm bg-white/20 hover:bg-white/40 transition-all duration-300">
          Property Management
        </button>
          </Link>
      </div>

      {/* Layered background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

   
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
    </div>
  );
};

export default Hero;