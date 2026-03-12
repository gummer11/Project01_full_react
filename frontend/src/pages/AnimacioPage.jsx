import React from "react";
import "./AnimacioPage.css";
//rafce Page template
//https://www.youtube.com/watch?v=GfeWtZkLFwo
//https://www.youtube.com/watch?v=6-2YWLyCcVU
//https://www.youtube.com/watch?v=6xNcXwC6ikQ
//https://www.youtube.com/watch?v=aswRKAjjWuE&list=PLNCevxogE3fjQIL36HhmmZNV8kxN_KAyb&index=1

const AnimacioPage = () => {
  return (
    <div className="animmaine">
      <h1 className="h1anim">Animáció</h1>
      <div className="animdiv">
        <section className="button1">
          <button
            className="b1"
            onclick="document.getElementById('demo').innerHTML = Date()"
          >
            Show date
          </button>
          <p id="demo"></p>
        </section>
        <section className="button2">
          <div className="b2">
            <button>Hover me</button>
            <span></span>
            <span></span>
          </div>
        </section>
        <section className="button3">
          <div className="b3">
            <a href="#" className="neon-button">
              Neon
            </a>
          </div>
        </section>
        <section className="button4">
          <div className="b4">
            <a href="#" className="snake">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Button
            </a>
          </div>
        </section>
        <section className="button5">
          <div className="b5">
            <nav className="navb5">
              <a href="#home" className="ab5">
                Underline link
              </a>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimacioPage;
