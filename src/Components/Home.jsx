import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import LandingArea from "./LandingArea";
const Home = () => {
  return (
    <div className="container" style={{display:'flex', flexDirection:"column", justifyContent:"space-between"}}>
      <div>
        <Navbar/>
      </div>
      <br />
      <div>
        <LandingArea/>
      </div>
    </div>
  );
};

export default Home;