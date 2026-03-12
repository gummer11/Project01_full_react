import React, { useState, useEffect, useRef } from "react";
import "./DropdmPage.css";
//https://www.youtube.com/watch?v=iLmIx2HHQwU

const DropdmPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const menuItems = ["Home", "Settings", "Logout"];
  return (
    <div>
      <h1 className="h1navpage ">Drop-down menu </h1>
      <div className="dropdown-container  mx-auto py-4" ref={dropdownRef}>
        <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
          Opciók {isOpen ? "▲" : "▼"}
        </button>
        {isOpen && (
          <div className="mt-2 bg-white rounded-md">
            {menuItems.map((item) => (
              <a
                className="text-gray-700 block px-4 py-2 hover:bg-gray-100 duration-200 rounded-md w-full text-left"
                key={item}
                href={item}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdmPage;
