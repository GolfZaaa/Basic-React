import React from "react";
import FooterPrivate from "./FooterPrivate";
import HeaderPrivate from "./HeaderPrivate";
import MainPrivate from "./MainPrivate";




const MainLayoutRoute = ({ children}) => {

    <div>
      <main id="main" >{children}</main>

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

    return (
      <div id="wrapper">
        <MainPrivate/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
          <HeaderPrivate/>
            <div id="main">{children}</div>
          </div>
          <FooterPrivate/>
        </div>
      </div>
    );
  };


export default MainLayoutRoute;
