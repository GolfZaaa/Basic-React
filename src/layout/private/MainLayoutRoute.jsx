import React from "react";
import FooterPrivate from "./FooterPrivate";
import HeaderPrivate from "./HeaderPrivate";




const MainLayoutRoute = ({ children}) => {
  return (
    <div>
      <HeaderPrivate/>
      <main id="main" >{children}</main>
      <FooterPrivate/>
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
export default MainLayoutRoute;
