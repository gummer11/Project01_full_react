import React, { useState, useEffect } from "react";
import "./SliderPage.css";

const SliderPage = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1697898005341-f2a997934d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D/600x300?text=Kép+1",
    "https://images.unsplash.com/photo-1734375181552-cfa83d404033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D/600x300?text=Kép+2",
    "https://images.unsplash.com/photo-1731902062648-260a1b5067a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D/600x300?text=Kép+3",
    "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500349812227-3264f5f54181?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [index, setIndex] = useState(0);

  // Következő kép (modulo operátorral: ha eléri a hosszát, 0 lesz)
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 másodperc

    // Ez a takarítás: ne felejtsd el kitörölni az időzítőt,
    // ha a komponens leépül (fontos a memóriaszivárgás elkerülése miatt!)
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Előző kép (trükkösebb: hozzáadjuk a hosszt, hogy ne legyen negatív)
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div>
      <h1 className="h1h1sl">Slider</h1>
      <div className="slider-container">
        <button onClick={prevSlide} className="prev-btn">
          Előző
        </button>

        <img
          src={images[index]}
          alt="slider"
          className="slider-image"
          key={index}
        />

        <button onClick={nextSlide} className="next-btn">
          Következő
        </button>
      </div>
    </div>
  );
};

export default SliderPage;
