import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
export class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand">
            <Link to="/"> My App</Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/product">Home</Link>
                {/* <a className="nav-link" href="/#">
                  Home
                </a> */}
              </li>
            </ul>
            <div className="cart-logo">
              <Link to="/cart">
                <ShoppingCart size={32} />
              </Link>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  //render this in index.js
}
