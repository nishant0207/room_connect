// Home.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import LandingArea from "./LandingArea";
import About from "./About";
import Profile from "./Profile";
import HostelInfo from "./HostelInfo";
import WhatsApp from "./WhatsApp";
import TaxiShare from "./TaxiShare";

const Home = () => {

  const [currentPage, setCurrentPage]  = useState('landingPage');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="container" style={{display:'flex', flexDirection:"column", justifyContent:"space-between"}}>
      <div>
        <Navbar onPageChange = {handleNavigation}/>
      </div>
      <br />
      <div>
      {currentPage === "landingPage" && <LandingArea />}
      {currentPage === "aboutPage" && <About />}
      {currentPage === 'profilePage' && <Profile/>}
      {currentPage === 'hostelInfo' && <HostelInfo/>}
      {currentPage === 'whatsApp' && <WhatsApp/>}
      {currentPage === 'taxiShare' && <TaxiShare/>}
      </div>
    </div>
  );
};

export default Home;