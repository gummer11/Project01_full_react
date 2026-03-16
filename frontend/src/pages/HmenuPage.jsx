import React, { useState } from "react";
import "./HmenuPage.css";
//import "../hmenu.js";

const HmenuPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hmenu">
      <div className="menu-container">
        <h1 className="h1navpage ">Hamburger menu</h1>

        {/* Hamburger gomb */}
        <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
        {/* Oldalsó menü */}
        <nav className={`side-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">Kezdőlap</a>
            </li>
            <li>
              <a href="#about">Rólunk</a>
            </li>
            <li>
              <a href="#services">Szolgáltatások</a>
            </li>
            <li>
              <a href="#contact">Kapcsolat</a>
            </li>
          </ul>
        </nav>

        {/* Háttér homályosítás (opcionális, de ajánlott) */}
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      </div>
    </div>
  );
};

export default HmenuPage;
