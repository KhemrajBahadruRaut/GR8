import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import LesConnect from "../Pages/btnModals/LesConnect";
import Sidebar from "../Pages/Sidebar";

const Nav = () => {
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
    <div className=" z-100 w-full overflow-hidden">
      {/* Navbar */}
      <div className=" grid grid-cols-12 items-center p-4">
        {/* Logo - Left side */}
        <div className="col-span-6 z-100 md:col-span-3 lg:col-span-2">
          <img
            src="/src/assets/GR8 Private Limited Logo.png"
            alt="Crestonix Solutions Logo"
            className="h-16 md:h-24 lg:h-28"
          />
        </div>

        {/* Right side content */}
        <div className="col-span-6 z-100 md:col-span-9 lg:col-span-10 flex justify-end items-center gap-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center gap-4">

            {/* lets conect button import gareko */}
            <LesConnect />
            
            {/* Social Icons */}
            <div className={`flex gap-2 ${isDrawerOpen ? "opacity-0" : "opacity-100"}`}>
              {[
                { icon: <FaFacebookF className="text-xl" />, color: "bg-blue-500" },
                { icon: <FaInstagram className="text-xl" />, color: "bg-blue-400" },
                { icon: <FaYoutube className="text-xl" />, color: "bg-blue-500" },
                { icon: <FaTiktok className="text-xl" />, color: "bg-blue-500" },
                { icon: <FaLinkedinIn className="text-xl" />, color: "bg-blue-600" },
              ].map((social, index) => (
                <div key={index} className="relative border p-2 group border border-black rounded-full">
                  {social.icon}
                  <div className="absolute rounded-full inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out" style={{ backgroundColor: social.color }}></div>
                    <div className="absolute top-0 right-0 w-0.5 h-0 group-hover:h-full transition-all duration-300 ease-out delay-75" style={{ backgroundColor: social.color }}></div>
                    <div className="absolute bottom-0 right-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out delay-150" style={{ backgroundColor: social.color }}></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-0 group-hover:h-full transition-all duration-300 ease-out delay-225" style={{ backgroundColor: social.color }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sidebar  */}
            <div className="relative z-100"> {/* Added z-50 to ensure it's on top */}
              <Sidebar />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;