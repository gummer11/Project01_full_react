/*  navbar 1  */

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});
/* navbar 1 */

// Navbar3
const menu = document.querySelector(".menu3");
const navbar = document.querySelector(".navbar3");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});
// AI megoldás
import { useState } from "react";

function MenuComponent() {
  // 1. Definiáljuk az állapotot: alapértelmezésben false (nem nyitott)
  const [isOpen, setIsOpen] = useState(false);

  // 2. Az eseménykezelő csak átváltja az állapotot true/false között
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 3. A "menü" kattintása átváltja a state-et */}
      <div className="menu" onClick={handleToggle}>
        Menu
      </div>

      {/* 4. A target elemek osztályát dinamikusan állítjuk be */}
      <div className={`target ${isOpen ? "change" : ""}`}>Target 1</div>
      <div className={`target ${isOpen ? "change" : ""}`}>Target 2</div>
      <div className={`target ${isOpen ? "change" : ""}`}>Target 3</div>
    </div>
  );
}
// End of Navbar 3

//Navbar5
//window.onload = () => {
//setTimeout(() => {
//document.querySelector("body").classList.add("display");
//}, 4000);
//};

// document.querySelector(".hamburger-menu5").addEventListener("click", () => {
//	document.querySelector(".container5").classList.toggle("change");
//  });

// document.querySelector(".scroll-btn").addEventListener("click", () => {
//	document.querySelector("html").style.scrollBehavior = "smooth";
//	setTimeout(() => {
//	  document.querySelector("html").style.scrollBehavior = "unset";
//	}, 1000);
//});
//Navbar 5 end
