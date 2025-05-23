import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./layout/Nav";
import propertyVideo from "../../src/assets/BG/GR8 Nepal footer logo2.mp4";

const images = [
  "/src/assets/BG/GR8 Nepal footer logo.mp4",
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
    <>
         {/* Layered background images */}
      <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover opacity-40"
            >
              <source src={propertyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Navbar */}
    <Nav/>

    {/* hero section */}
      <div className="z-10 relative mt-60! transform md:px-10 text-start">
        <p style={{
        fontFamily: 'centurygothic, sans-serif',
        '@font-face': {
          fontFamily: 'Centurygothic',
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      }}
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
          A Pioneer Initiative by GR8 Realtors Group
        </p>
      </div>

      {/* right buttons */}
      <div className="gap-5 flex absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 gap-2 md:gap-5 z-10 flex-wrap justify-center">
        <Link to="digital-soln z-100">
          <button className="px-8 py-3 z-100 md:px-10 md:py-3 rounded text-sm md:text-base text-white font-medium backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300">
            Digital Solution
          </button>
        </Link>
        <Link to="prop-mgmt">
          <button className="px-3 py-3 md:px-6 md:py-3  rounded text-sm md:text-base text-white font-medium backdrop-blur-sm  bg-black/40 hover:bg-black/60 transition-all duration-300">
            Property Management
          </button>
        </Link>
      </div>

 
      
    </div>
        </>

  );
};

export default Hero;