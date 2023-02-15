import React from "react";
import Header from './Header'
import Footer from "./Footer";
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Portfolio from "../pages/Portfolio";
import FAQ from '../pages/FAQ'
import Team from '../pages/Team'
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import ContactTest from "../pages/ContactTest";



const Main = ({ children}) => {
  return (
    <div>
      <Header/>
      <main id="main" >{children}</main>
      <Footer/>
    </div>

    // <div>
    //   <Header/>
    //     <Home/>   
    //     <Service/>   
    //     <About/>
    //     <Portfolio/>
    //     <FAQ/>
    //     <Team/>
    //     <Clients/>
    //     {/* <Contact/> */}
    //     <ContactTest/>
    //   <Footer/>
    // </div>


  );
};
export default Main;
