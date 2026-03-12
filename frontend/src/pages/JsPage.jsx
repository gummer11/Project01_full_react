import React, { useState } from "react";
import "./JsPage.css";
//import "../js.js";

const JsPage = () => {
  const [mutasd, setMutasd] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const gombSzin = mutasd
    ? isHovered
      ? "#efc3c3"
      : "white"
    : isHovered
    ? "#eea5a6"
    : "#f55153";
  return (
    <div>
      <h1 className="h1h18">Hello Js!</h1>

      <section className="s18">
        <button
          id="btn8"
          className="btns18"
          onClick={() => setMutasd(!mutasd)}
          // Eseményfigyelők a hoverhez:
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: gombSzin,
            color: !mutasd ? "white" : "#f55153",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease", // Ettől lesz lágy az átmenet
          }}
        >
          {!mutasd ? "Mutasd a titkot!" : "Nincs titok!"}
        </button>
      </section>
    </div>
  );
};

export default JsPage;
