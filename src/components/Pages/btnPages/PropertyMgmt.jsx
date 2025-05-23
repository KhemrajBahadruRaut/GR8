
import { Link } from "react-router-dom";
import propertyVideo from "../../../../src/assets/About/property.mp4";
import logo from "../../../../src/assets/logowhite.png"; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function PropertyMgmt() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={propertyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <div className="relative z-10 h-full w-full  text-white">
        {/* Navbar */}
        <header className="   flex items-center justify-start text-sm font-medium">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-40" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden absolute md:flex   left-70 top-7 space-x-6">
            <Link to="/home" className="text-white text-[20px] hover:text-[#ce8037]">HOME</Link>
            <Link to="/about" className="text-white text-[20px] hover:text-[#ce8037]">ABOUT US</Link>
            <Link to="/services" className="text-white text-[20px]  hover:text-[#ce8037]">SERVICES</Link>
            <Link to="/resources" className="text-white  text-[20px] hover:text-[#ce8037]">RESOURCES</Link>
            <Link to="/pricing" className="text-white text-[20px]  hover:text-[#ce8037]">PRICING</Link>
          </nav>

          {/* Right Side Links */}
          <div className="  absolute end-40 top-7 flex items-center space-x-6">
            <Link to="/demo" className=" text-white hover:text-[#ce8037]">REQUEST A DEMO</Link>
            <span>|</span>
            <Link to="/login" className="text-white hover:text-[#ce8037]">LOGIN</Link>
          </div>

          {/* Social Icons */}
        <div className="  absolute text-white right-11 flex flex-col space-y-2 top-7 text-xl">
          <FaFacebook className="size-6"/>
          <FaInstagram className="size-6"/>
          <FaYoutube className="size-6"/>
          <FaTiktok className="size-6"/>
          <FaLinkedin className="size-6"/>
        </div>
        </header>

        {/* Heading Content */}
        <div className="flex flex-col   justify-start h-[calc(100vh-64px)] pt-30 px-4">
          <p className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight uppercase">
            Property<br />Management<br />Solution
          </p>
        </div>

        
      </div>
    </div>
  );
}