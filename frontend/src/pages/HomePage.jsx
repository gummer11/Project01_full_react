import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../lib/axios.js"; //../..//node_modules//axios//lib//axios.js
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import { Link, useNavigate } from "react-router";
import "./HomePage.css";
//import axios from "axios";    comment <Link to="/fff"></Link>

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="section-0">
        <h1 className="homepageh1">Web teszt by Vili</h1>
      </section>
      <div>
        <div className="section-1">
          <div>
            <h2 className="color-title homepageh2" id="red">
              Nav bar
            </h2>

            <Link to="/np">
              <img
                src="../images/canva-MAEJzozMhVk.jpg"
                alt="red"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="blue">
              Icode
            </h2>
            <Link to="/ip">
              <img
                src="../public/images/it11.jpg" //"./assets/images/it11.jpg"
                alt="blue"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="orange">
              Js
            </h2>
            <Link to="/jp">
              <img
                src="../public/images/it222.jpg"
                alt="orange"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="reacthp">
              React
            </h2>
            <Link to="/bb">
              <img
                src="../public/images/reactok.png"
                alt="yellow"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="yellow">
              Api
            </h2>
            <Link to="/ap">
              <img
                src="../public/images/api.jpg"
                alt="yellow"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="green">
              Animáció
            </h2>
            <Link to="/animp">
              <img
                src="../public/images/it33.jpg"
                alt="green"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="yellow">
              Footer
            </h2>
            <Link to="/fp">
              <img
                src="../public/images/it4.jpg"
                alt="yellow"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="yellow">
              Hamburger menu
            </h2>
            <Link to="/hp">
              <img
                src="../public/images/hamburger_11102184.png"
                alt="yellow"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="yellow">
              Dropdown menu
            </h2>
            <Link to="/dp">
              <img
                src="../public/images/ddown.png"
                alt="yellow"
                className="imghp"
              />
            </Link>
          </div>
          <div>
            <h2 className="color-title homepageh2" id="yellow">
              Slider
            </h2>
            <Link to="/sp">
              <img
                src="../public/images/slider.png"
                alt="yellow"
                className="imghp"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
