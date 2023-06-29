import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo">Logo</div>
        <div className="navbar-frame">
          <div className="about">About</div>
          <div className="pricing">Pricing</div>
          <div className="review">Review</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
