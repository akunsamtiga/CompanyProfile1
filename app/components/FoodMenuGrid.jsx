"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaPizzaSlice,
  FaHamburger,
  FaDrumstickBite,
  FaHotdog,
  FaBacon,
  FaFish,
  FaIceCream,
  FaCookieBite,
  FaCandyCane,
  FaWineGlassAlt,
  FaGlassWhiskey,
  FaCoffee,
} from "react-icons/fa";

const foodMenu = [
  { id: 1, category: "food", name: "Pepperoni Pizza", price: "Rp95.000", image: "/images/m1.jpg", icon: <FaPizzaSlice className="text-red-500 text-2xl" /> },
  { id: 2, category: "food", name: "Cheese Burger", price: "Rp70.000", image: "/images/m2.jpg", icon: <FaHamburger className="text-yellow-600 text-2xl" /> },
  { id: 3, category: "food", name: "Crispy Chicken", price: "Rp82.500", image: "/images/m3.jpg", icon: <FaDrumstickBite className="text-orange-500 text-2xl" /> },
  { id: 4, category: "food", name: "Hotdog Deluxe", price: "Rp67.500", image: "/images/m4.jpg", icon: <FaHotdog className="text-red-400 text-2xl" /> },
  { id: 5, category: "food", name: "Bacon & Eggs", price: "Rp75.000", image: "/images/m5.jpg", icon: <FaBacon className="text-pink-600 text-2xl" /> },
  { id: 6, category: "food", name: "Grilled Salmon", price: "Rp120.000", image: "/images/m6.jpg", icon: <FaFish className="text-blue-500 text-2xl" /> },
  { id: 7, category: "dessert", name: "Vanilla Ice Cream", price: "Rp45.000", image: "/images/m7.jpg", icon: <FaIceCream className="text-blue-400 text-2xl" /> },
  { id: 8, category: "dessert", name: "Chocolate Cookies", price: "Rp37.500", image: "/images/m8.jpg", icon: <FaCookieBite className="text-gray-800 text-2xl" /> },
  { id: 9, category: "dessert", name: "Candy Cane", price: "Rp25.000", image: "/images/m9.jpg", icon: <FaCandyCane className="text-red-500 text-2xl" /> },
  { id: 10, category: "drink", name: "Classic Red Wine", price: "Rp250.000", image: "/images/m10.jpg", icon: <FaWineGlassAlt className="text-purple-600 text-2xl" /> },
  { id: 11, category: "drink", name: "Whiskey on the Rocks", price: "Rp300.000", image: "/images/m11.jpg", icon: <FaGlassWhiskey className="text-amber-700 text-2xl" /> },
  { id: 12, category: "drink", name: "Caramel Latte", price: "Rp52.500", image: "/images/m12.jpg", icon: <FaCoffee className="text-brown-500 text-2xl" /> },
];

const FoodMenuGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulasi loading 1.5 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="food-menu" className="py-4 bg-gray-100 relative">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {isLoading
            ? // Skeleton Loading
              Array(12)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse"
                  >
                    {/* Skeleton Gambar */}
                    <div className="h-32 md:h-38 lg:h-44 bg-gray-300"></div>
                    
                    {/* Skeleton Konten */}
                    <div className="p-3 md:p-4 lg:p-6 text-center">
                      <div className="h-5 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
                      <div className="h-4 w-5/6 bg-gray-300 rounded mx-auto mb-2"></div>
                      <div className="h-5 w-1/2 bg-gray-400 rounded mx-auto mt-3"></div>
                    </div>
                  </div>
                ))
            : // Real Data
              foodMenu.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 relative"
                >
                  {/* Gambar Menu */}
                  <div className="relative h-32 md:h-38 lg:h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                  </div>

                  {/* Label Kategori */}
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs md:text-sm lg:text-base font-semibold uppercase rounded-lg ${
                      item.category === "food" ? "bg-red-500 text-white" :
                      item.category === "dessert" ? "bg-blue-500 text-white" :
                      "bg-green-500 text-white"
                    }`}
                  >
                    {item.category}
                  </span>

                  {/* Konten */}
                  <div className="p-2 md:p-4 lg:p-6 text-center">
                    <div className="flex items-center justify-center my-2">
                      {item.icon}
                    </div>
                    <h3 className="text-base text-amber-900 leading-5 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-amber-800 text-lg font-bold mt-2">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenuGrid;
