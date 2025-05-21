import logo from "/src/assets/logowhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="content-center bg-gradient-to-r h-[100vh] from-gray-700 via-gray-500 to-gray-700 p-1 bg-[url('/src/assets/BG/vertialca.jpg')] bg-cover bg-center h-screen" >
      <div className="max-w-7xl text-black mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl p-3">
        {/* Left: Logo and Address */}
        <div className="pl-[100px]">
          <img src={logo} alt="Logo" className="h-[120px] mb-4 " />
          <p className="text-sm">
            Greight Private Limited <br />
            +977 (970) 533-3552 <br />
            +977 (01) 592-4173
            <br />
            Bhaisepati, Lalitpur, Nepal
            <br />
            Email: management@gr8nepal.com
            <br />
            <br />
            <br />
            Phone: +1 (857) 265-4008 <br />
            Phone: +1 (774) 287-6819 <br />
            Boston, MA
          </p>
        </div>

        {/* Middle: Map */}
        <div className="">  
                    <p className="underline font-bold mb-3 mt-3">OUR LOCATION</p>
          <div className="w-full h-80">
            <iframe
              title="Company Location"
              className="w-full h-full border-0 rounded-[10px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.897110901293!2d-118.24368428478265!3d34.052234280607065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b9bd50ad27%3A0xc1c9f0b5190c1ef1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-3">

          <p className="justify-center flex ">
          283, Aadinath Marga,
          </p>
          <p className="justify-center flex ">
            Bhaisepati, Lalitpur 18, Nepal
            </p>
          </div>
        </div>

        {/* Right: About & Links */}
        <div className=" pl-[100px]">
          <p className="underline font-bold mt-3">SUPPORT</p>
          <ul className=" text-black text-sm relative top-[-15px] right-[30px]">
            <li>
              <a
                href="/About"
                className=" hover:text-[#ce8037] transition-colors"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className=" hover:text-[#ce8037] transition-colors"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className=" hover:text-[#ce8037] transition-colors"
              >
                FAQs
              </a>
            </li>
          </ul>

        <div className="mt-5">
                    <p className="underline font-bold mb-3 mt-3">MY ACCOUNT</p>
          
            <button className="border border-black shadow-lg px-5 py-2 rounded-3 ">
                Login
            </button>

        </div>

        <div className="pt-[200px] relative right-10">
          
          <div className=" flex justify-between" >
            <div className=" flex-col justify-center" >
              <div className="flex  justify-center">
                
            <img src="/src/assets/gr8logo.png" alt="" width='50px' height='50px' />
              </div>
            <p className="font-bold text-[14px]">
              Digital Solutions
            </p>
            </div>
           <div>
            <div className="flex justify-center">
                
            <img src="/src/assets/gr8logo.png" alt="" width='50px' height='50px' />
              </div>
            <p className="font-bold text-[14px]">
              Property Management
            </p>
           </div>
          </div>
            <button className="border border-black shadow-lg px-5 py-2  rounded-3 ">
                SEND US YOUR FEEDBACK
            </button>

        </div>

        </div>

      </div>

      {/* Optional Bottom Text */}
      <div className="mt-1 text-center text-xs text-gray-400">

        © {new Date().getFullYear()} Real Estate Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
