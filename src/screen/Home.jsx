import React from "react";
import Topnav from "../compenents/Topnav";
import Navbars from "../compenents/Navbars";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../compenents/Hero";
import Servises from "../compenents/Servises";
import About from "../compenents/About";
import HomeServise from "../compenents/HomeServise";
import OurServises from "../compenents/OurServises";

const Home = () => {
  return (
    <div className="w-100 m-0">
 
 
          <Topnav />
   
    
    
          <Navbars />
     
          
   
        <Hero />
     <Servises/>
     <About/>
     <HomeServise/>
     <OurServises/>

    </div>
  );
};

export default Home;
