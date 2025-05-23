import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "/src/assets/GR8 Private Limited Logo.png";

const Footer = () => {
  return (
    <footer className="content-center bg-gradient-to-r h-[100vh] from-gray-700 via-gray-500 to-gray-700 p-1 bg-[url('/src/assets/BG/vertialca.jpg')] bg-cover bg-center h-screen" >
      <div className="max-w-7xl text-black mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 rounded-2xl p-3">
          {/* this is fitst section */}
        {/* Left: Logo and Address */}
        <div className=" ">
          <img src={logo} alt="Logo" className="h-[120px] mb-4 " />
          

        <div className=" ">  
          <div className="w-full h-80">
            <iframe
              title="Company Location"
              className="w-full h-full border-0 rounded-[10px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.897110901293!2d-118.24368428478265!3d34.052234280607065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b9bd50ad27%3A0xc1c9f0b5190c1ef1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-3  flex-column text-center">
            <div>
                283, Aadinath Marga, Bhaisepati,
            </div>
             Lalitpur 18, Nepal
          </div>
        </div>
        </div>
        {/* This is second section of footer */}
        <div className=" flex-col ">
          <div className="flex ">

            <div className=" h-90 space-y-50 pt-14">
              
            </div>
                <div className="">
                  <div className="flex  ">
                    <div className="flex items-center">
                      
                    <img className=" size-9 w-15" src="/src/assets/footerLogo/NEPAL flag.png" alt="" />
                    </div>
                    <p className="text-xl  leading-[1.6] cursor-pointer">
                      <span className="underline "> Greight Private Limited</span> <br />
                      <span className="underline">+977 (970) 533-3552 </span><br />
                      <span className="underline">+977 (01) 592-4173</span>
                      <br />
                      <span className="underline">Bhaisepati, Lalitpur, Nepal</span>
                      <br />
                      <span className="underline">Email: management@gr8nepal.com</span>
                    </p>
                    </div>
                <div className="flex mt-7">
                  <div className=" pr-4 items-center flex ">
                    <img  className=" w-[40px] ml-1 size-6  " src="/src/assets/footerLogo/USA flag.png" alt="" />
                    </div>

                    <p className="text-xl leading-[1.6] cursor-pointer">

              
                      <span className="underline">Phone: +1 (857) 265-4008 </span><br />
                      <span className="underline">Phone: +1 (774) 287-6819</span> <br />
                      <span className="underline">Boston, MA</span>
                    </ p>
                    </div>
                </div>
          </div>
          <div className="">
              <div className=" flex justify-evenly mt-10" >
                <div className=" flex-col justify-center" >
                  <div className="flex  justify-center">
                    
                <img src="/src/assets/GR8 Private Limited Logo.png" alt="" width='100px' height='50px' />
                  </div>
                <p className="font-bold text-[14px]">
                  Digital Solutions
                </p>
                </div>
              <div>
                <div className="flex  justify-center">
                    
                <img src="/src/assets/GR8 Private Limited Logo.png" alt="" width='100px' height='50px' />
                  </div>
                <p className="font-bold text-[14px]">
                  Property Management
                </p>
              </div>
              </div>
          </div>

        </div>

        {/* Right: About & Links */}
        <div className="">
          <p className="underline font-bold text-[20px]">SUPPORT</p>
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
                    <p className="underline font-bold text-[20px] mb-3 mt-3">MY ACCOUNT</p>
          
            <button className="border border-black shadow-lg px-5 py-2 rounded-3 ">
                Login
            </button>

        </div>

        <div className="pt-[200px] relative">
          
          <div className="flex text-black  justify-start mb-2 gap-3">
          
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
            <button className="border border-black shadow-lg px-5 py-2  rounded-3 ">
                SEND US YOUR FEEDBACK
            </button>

        </div>

        </div>

      </div>

      {/* Bottom footer text */}
      <div className="mt-1 text-center text-xs text-gray-700 ">

        © {new Date().getFullYear()} Real Estate Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
