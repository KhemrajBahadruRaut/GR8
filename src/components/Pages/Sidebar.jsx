import { Menu } from "lucide-react"
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (

      <div className=" drawer drawer-end z-11 justify-end top-[13px] absolute">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content right-[10px] flex mr-6">
          <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer text-white">
            <Menu className="size-9" />
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay "></label>
          <ul className="menu bg-base-200 text-base-content text-black min-h-full w-70 p-4">
            <li><Link to='about'>About</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='contacts'>Contacts</Link></li>
            <li><Link to='blog'>Blog</Link></li>
                     {/* social icons */}
        <div className="z-10  gap-4 flex justify-center absolute top-[47rem] ">
        <Link><FaFacebook className="size-6"/></Link>
        <Link><FaInstagram className="size-6"/></Link>
        <Link><FaLinkedin className="size-6"/></Link>
        <Link><FaTiktok className="size-6"/></Link>
        <Link><FaYoutube className="size-6"/></Link>
        </div>
          </ul>

        </div>

        
      </div>

  )
}

export default Sidebar
