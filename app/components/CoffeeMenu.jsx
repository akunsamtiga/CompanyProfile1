"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich & bold, made from the finest coffee beans.",
    price: "Rp35.000",
    image: "/images/mn1.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk & a layer of frothy foam.",
    price: "Rp45.000",
    image: "/images/mn2.jpg",
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Japanese green tea with creamy steamed milk.",
    price: "Rp50.000",
    image: "/images/mn3.jpg",
  },
  {
    id: 4,
    name: "Irish Coffee",
    description: "Espresso blended with whiskey & whipped cream.",
    price: "Rp85.000",
    image: "/images/mn4.jpg",
  },
];

const CoffeeMenu = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulasi loading 1.5 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="coffee-menu" className="py-12 md:py-20 bg-gray-200 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-amber-900 mb-4 tracking-wide">
            Best Seller
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {isLoading
            ? // Skeleton Loader
              Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse"
                  >
                    <div className="h-48 sm:h-56 bg-gray-300"></div>
                    <div className="p-3 md:p-4 text-center">
                      <div className="h-5 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
                      <div className="h-4 w-5/6 bg-gray-300 rounded mx-auto mb-2"></div>
                      <div className="h-5 w-1/2 bg-gray-400 rounded mx-auto mt-3"></div>
                    </div>
                  </div>
                ))
            : // Real Data
              coffeeMenu.map((item) => (
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
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm mt-3 md:mt-4 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-amber-900 text-lg md:text-xl font-extrabold mt-2 md:mt-3">
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

export default CoffeeMenu;
