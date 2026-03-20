import React, { useState, useEffect } from "react";
import NavbarWebshop from "../../components/NavbarWebshop";
import CategoryItem from "../../components/CategoryItem";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];
const HomePageWebshop = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
          </div>
        </div>
        <div className="relative z-50 pt-20">
          <NavbarWebshop />
          <div className="relative min-h-screen text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
                Explore Our Categories
              </h1>
              <p className="text-center text-xl text-gray-300 mb-12">
                Discover the latest trends in eco-friendly fashion
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <CategoryItem category={category} key={category.name} />
                ))}
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default HomePageWebshop;
