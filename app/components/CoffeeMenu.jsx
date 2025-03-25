"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCoffee, FaMugHot, FaLeaf, FaGlassWhiskey } from "react-icons/fa";

const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich & bold, made from the finest coffee beans.",
    price: "$3.50",
    image: "/images/mn1.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk & a layer of frothy foam.",
    price: "$4.50",
    image: "/images/mn2.jpg",
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Japanese green tea with creamy steamed milk.",
    price: "$5.00",
    image: "/images/mn3.jpg",
  },
  {
    id: 4,
    name: "Irish Coffee",
    description: "Espresso blended with whiskey & whipped cream.",
    price: "$6.50",
    image: "/images/mn4.jpg",
  },
];

const CoffeeMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="h-96 flex justify-center items-center text-amber-700">Loading menu...</div>;

  return (
    <section id="menu" className="py-12 md:py-20 bg-gray-200 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-amber-900 mb-4 tracking-wide">
            Our Coffee Menu
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {coffeeMenu.map((item) => (
            <div
              key={item.id}
              className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 relative"
            >
              {/* Background Blur Layer */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt="Blur Background"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover blur-lg opacity-30 scale-125"
                  priority
                />
              </div>

              {/* Menu Image (Front Layer) */}
              <div className="relative h-48 sm:h-56 overflow-hidden flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              </div>

              {/* Content */}
              <div className="p-3 md:p-4 text-center relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">{item.name}</h3>
                <p className="text-gray-700 text-xs sm:text-sm mt-3 md:mt-4 line-clamp-2">{item.description}</p>
                <p className="text-amber-900 text-lg md:text-xl font-extrabold mt-2 md:mt-3">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;