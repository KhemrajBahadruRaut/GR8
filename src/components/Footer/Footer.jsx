import logo from "/src/assets/logowhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 p-10 mt-4" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 rounded-2xl p-6 text-white">
        {/* Left: Logo and Address */}
        <div>
          <img src={logo} alt="Logo" className="h-[120px] mb-4 " />
          <p className="text-sm">
            Greight Private Limited
            <br />
            Bhaisepati, Lalitpur, Nepal
            <br />
            Phone: +977 (970) 533-3552
            <br />
            Email: management@gr8nepal.com
            <br />
            <br />
            <br />
            USA Location Westford, MA
            <br />
            Phone: +1 (857) 265-4008 <br />
            Phone: +1 (774) 287-6819
          </p>
        </div>

        {/* Middle: Map */}
        <div> 
          <h3 className="text-lg font-semibold mb-3">Our Location</h3>
          <div className="w-full h-48">
            <iframe
              title="Company Location"
              className="w-full h-full border-0 rounded-[10px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.897110901293!2d-118.24368428478265!3d34.052234280607065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b9bd50ad27%3A0xc1c9f0b5190c1ef1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right: About & Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/about"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/About"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                FAQs
              </a>
            </li>
            <button className="border px-5 py-2 mt-5 rounded-3 ">
                Subscribe
            </button>
          </ul>

        </div>

        {/* last secton of footer */}
        <div>
          
          <h3 className="text-lg font-semibold mb-3">Updates</h3>
          <ul className="space-y-1 text-sm">
            
            <li>
              <a
                href="/blog"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/news"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="/clientreview"
                className="text-white hover:text-[#ce8037] transition-colors"
              >
                Clent Review
              </a>
            </li>
          </ul>

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
