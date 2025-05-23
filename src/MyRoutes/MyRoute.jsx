import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import About from '../components/Pages/About'
import Contacts from '../components/Pages/Contacts'
import Blog from '../components/Pages/Blog'
import Service from '../components/Pages/Service'
import DigitalSolutions from '../components/Pages/btnPages/DigitalSolutions'
import PropertyMgmt from '../components/Pages/btnPages/PropertyMgmt'
import LesConnect from '../components/Pages/btnModals/LesConnect'
import Nav from '../components/layout/Nav'

const MyRoute = () => {
  return (
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="services" element={<Service/>}/>
            
            {/* digital solution and property management */}
            <Route path="digital-soln" element={<DigitalSolutions/>}/>
            <Route path="prop-mgmt" element={<PropertyMgmt/>}/>
            <Route path="test" element={<LesConnect/>}/>
            <Route path="nav"  element={<Nav/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default MyRoute
