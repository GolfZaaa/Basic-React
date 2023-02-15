import React from "react";
import { NavLink } from "react-router-dom";

const FooterPrivate = () => {
  return (
    <div>
       {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © Your Website 2021</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
  );
};
export default FooterPrivate;
