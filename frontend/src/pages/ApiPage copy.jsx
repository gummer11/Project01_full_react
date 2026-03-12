import React from "react";
import "./ApiPage.css";

const ApiPage = () => {
  return (
    <div>
      <section className="s1a">
        <h1 className="h1h1a">Api</h1>
        <div className="containera">
          <h1>Dad Jokes Generator</h1>
          <p id="jokea" class="jokea"></p>
          <button id="get-joke-btna" className="btna">
            Get Another Joke
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApiPage;
