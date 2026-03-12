import React, { useState, useEffect } from "react";
import "./ApiPage.css";

const ApiPage = () => {
  // 1. Állapot a vicc tárolására
  const [joke, setJoke] = useState("Betöltés...");
  // 2. Opcionális: állapot a betöltés jelzésére
  const [loading, setLoading] = useState(false);

  const API = "https://icanhazdadjoke.com/";
  // 3. A függvény, ami lekéri az adatot (ugyanaz az async logika)
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(API, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Hiba történt a vicc lekérésekor. :(");
    }
    setLoading(false);
  };

  // 4. useEffect: ez fut le egyszer, amikor az oldal betöltődik
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <section className="s1a">
        <h1 className="h1h1a">Api</h1>
        <div className="containera">
          <h1 className="h1h1a2">Bad Jokes Generator</h1>
          {loading ? <em>Gondolkodom egy viccen...</em> : joke}
          <p id="jokea" class="jokea"></p>
          <button
            id="get-joke-btna"
            className="btna"
            onClick={fetchJoke}
            disabled={loading}
          >
            {loading ? "Kérem várjon..." : "Új viccet kérek!"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApiPage;
