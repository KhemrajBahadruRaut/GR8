import { Link } from "react-router-dom";
import logo from "../../../../src/assets/Flogo.png"; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function PropertyMgmt() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <img src="/src/assets/BG/digitalsolution.png" alt="" className="absolute w-full h-full object-fit" />
       
      

      {/* Overlay and Content */}
      <div className="relative z-10 h-full w-full  text-black">
        {/* Navbar */}
        <header className="flex   items-center justify-between p-4 md:p-6 lg:p-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-20   md:h-28 lg:h-32 xl:h-40" />
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden   md:flex flex-grow justify-start pl-10 mt-[-80px]  space-x-4 lg:space-x-6 xl:space-x-8">
            <Link to="/home" className=" text-black text-lg lg:text-xl xl:text-[20px] hover:text-[#ce8037] transition-colors">HOME</Link>
            <Link to="/about" className=" text-black text-lg lg:text-xl xl:text-[20px] hover:text-[#ce8037] transition-colors">ABOUT US</Link>
            <Link to="/services" className=" text-black text-lg lg:text-xl xl:text-[20px] hover:text-[#ce8037] transition-colors">SERVICES</Link>
            <Link to="/resources" className=" text-black text-lg lg:text-xl xl:text-[20px] hover:text-[#ce8037] transition-colors">RESOURCES</Link>
            <Link to="/pricing" className=" text-black text-lg lg:text-xl xl:text-[20px] hover:text-[#ce8037] transition-colors">PRICING</Link>
          </nav>

          {/* Right Side Links */}
          <div className="hidden md:flex   mr-[40px] items-center mt-[-80px] space-x-4 lg:space-x-6">
            <Link to="/demo" className=" text-white text-sm lg:text-base hover:text-[#ce8037] transition-colors">REQUEST A DEMO</Link>
            <span className=" text-whitew">|</span>
            <Link to="/login" className=" text-white text-sm lg:text-base hover:text-[#ce8037] transition-colors">LOGIN</Link>
          </div>

          {/* Social Icons - Hidden on mobile */}
          <div className="hidden flex-col md:flex items-center space-y-1.5 mt-[-90px]   ml-4">
            <FaFacebook className=" text-white w-3 h-3 lg:w-6 lg:h-4 hover:text-[#ce8037]  transition-colors" />
            <FaInstagram className=" text-white w-3 h-3 lg:w-6 lg:h-4 hover:text-[#ce8037] transition-colors" />
            <FaYoutube className=" text-white w-3 h-3 lg:w-6 lg:h-4 hover:text-[#ce8037] transition-colors" />
            <FaTiktok className=" text-white w-3 h-3 lg:w-6 lg:h-4 hover:text-[#ce8037] transition-colors" />
            <FaLinkedin className=" text-white w-3 h-3 lg:w-6 lg:h-4 hover:text-[#ce8037] transition-colors" />
          </div>
        </header>

      

        {/* Heading Content */}
        <div className="flex flex-col ml-6 mt-[-50px] justify-center h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] lg:h-[calc(100vh-128px)] px-4 md:px-6 lg:px-8   md:pt-16 lg:pt-1">
          <p className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight uppercase">
            Digital<br />Solutions
          </p>
          <p className="mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-[30px] max-w-2xl">
            We auto-post daily content tailored for <br />
            you on your social media platforms.
          </p>
        </div>
      </div>
    </div>
  );
}