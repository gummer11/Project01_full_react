import React, { useState } from "react";
import "./NavbarPage.css";
const NavbarPage = () => {
  const [mutasd, setMutasd] = useState(true);
  const [mutasd2, setMutasd2] = useState(true);
  return (
    <section className="try">
      <div>
        <section className="section0 ">
          <h1 className="h1navpage ">Navbar 1 2 </h1>
        </section>

        <section className="section1">
          <nav className={`navbar target  ${mutasd ? "" : "change"}`}>
            <a href="#" className="navbar-link">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
            <a href="#" className="navbar-link">
              <i className="fas fa-utensils"></i>
              <span>Meals</span>
            </a>
            <a href="#" className="navbar-link">
              <i className="fas fa-hamburger"></i>
              <span>Burger</span>
            </a>
            <a href="#" className="navbar-link">
              <i className="fas fa-pizza-slice"></i>
              <span>Pizza</span>
            </a>
            <a href="#" className="navbar-link">
              <i className="fas fa-blender-phone"></i>
              <span>Contact</span>
            </a>
          </nav>
          <div
            className={`menu target  ${mutasd ? "" : "change"}`}
            onClick={() => setMutasd(!mutasd)}
          ></div>
        </section>

        <section className="section2 ">
          <div className="container">
            <section className="section-2" id="home">
              <nav className="navbar2">
                <a href="#home" className="navbar-link2">
                  Design
                </a>
                <a href="#customers" className="navbar-link2">
                  Customers
                </a>
                <a href="#team" className="navbar-link2">
                  Team
                </a>
                <a href="#contact" className="navbar-link2">
                  Contact
                </a>
              </nav>
              <div className="floating-bg"></div>
              <h1 className="section-2-heading">Vili teszt</h1>
              <div className="logo">
                <i className="fas fa-bezier-curve"></i>
              </div>
            </section>
          </div>
        </section>

        <section className="section3">
          <h1 className="h1navpage">navbar3</h1>
          <nav
            className={`navbar3  ${mutasd2 ? "" : "change"}`}
            onClick={() => setMutasd2(!mutasd2)}
          >
            <div className="navbar-logo3">
              <a href="#">
                <span>C</span>ode<span>A</span>nd<span>C</span>reate
              </a>
            </div>
            <div className="nav-list3">
              <a href="#" className="nav-link">
                Home
              </a>
              <a href="#" className="nav-link">
                About
              </a>
              <a href="#" className="nav-link">
                Pricing
              </a>
              <a href="#" className="nav-link">
                Blog
              </a>
              <a href="#" className="nav-link">
                Contact
              </a>
            </div>
            <div className="menu3">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </nav>
        </section>

        <h1 className="h1navpage">navbar4</h1>
        <section className="section4">
          <a href="#" className="logo4">
            <i className="fab fa-apple"></i>
          </a>

          <nav className="navbar4">
            <a href="#section-2" className="navbar-link4">
              iPhone 12
            </a>
            <a href="#section-3" className="navbar-link4">
              MacBook Air
            </a>
            <a href="#section-3" className="navbar-link4">
              Watch
            </a>
            <a href="#section-4" className="navbar-link4">
              AirPods
            </a>
          </nav>
        </section>
      </div>
    </section>
  );
};

export default NavbarPage;
