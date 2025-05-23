import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (

     <div className="drawer drawer-end z-11 justify-end border">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content right-[10px] flex ">
    <label htmlFor="my-drawer-4" style={{
        fontFamily: 'Bank Gothic, sans-serif',
        '@font-face': {
          fontFamily: 'Bank Gothic',
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      }} className="drawer-button text-[20px]  cursor-pointer ">
      MENU 
    </label>
  </div>

  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay bg-transparent "></label>
    <ul className="menu bg-base-200 text-base-content text-black min-h-full w-70 p-4">
      <li><Link to="about">Home</Link></li>
      <li><Link to="about">About</Link></li>

      {/* Services with Submenu */}
      <li>
        <details>
          <summary>Services</summary>
          <ul className="pl-4">
            <li><Link to="">Digital Marketing</Link></li>
            <li><Link to="">Property Management</Link></li>
          </ul>
        </details>
      </li>

      {/* Team with Submenu */}
      <li>
        <details>
          <summary>Team</summary>
          <ul className="pl-4">
            <li><Link to="">Meet the team</Link></li>
            <li><Link to="">Join the team</Link></li>
          </ul>
        </details>
      </li>

      <li><Link to="contacts">Contacts</Link></li>

      {/* Social Icons */}
      <div className="flex gap-4 justify-center mt-6">
        <Link><FaFacebook className="size-6" /></Link>
        <Link><FaInstagram className="size-6" /></Link>
        <Link><FaLinkedin className="size-6" /></Link>
        <Link><FaTiktok className="size-6" /></Link>
        <Link><FaYoutube className="size-6" /></Link>
      </div>
    </ul>
  </div>
</div>


  )
}

export default Sidebar
