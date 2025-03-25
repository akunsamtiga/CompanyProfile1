"use client";
import React, { useState, useEffect } from "react";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

const Menu = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuMembers = [
    {
      id: 1,
      name: "Giovanni Russo",
      role: "Master Barista",
      video: "/videos/vd2.mp4",
      size: "col-span-2 row-span-2", // Besar
      social: { instagram: "#", linkedin: "#", twitter: "#" },
    },
    {
      id: 2,
      name: "Alessia Bianchi",
      role: "Pastry Chef",
      video: "/videos/vd3.mp4",
      size: "col-span-1 row-span-1", // Kecil
      social: { instagram: "#", linkedin: "#", twitter: "#" },
    },
    {
      id: 3,
      name: "Marco Conti",
      role: "Cafe Manager",
      video: "/videos/vd4.mp4",
      size: "col-span-1 row-span-2", // Tinggi
      social: { instagram: "#", linkedin: "#", twitter: "#" },
    },
    {
      id: 4,
      name: "Luca Romano",
      role: "Beverage Specialist",
      video: "/videos/vd1.mp4",
      size: "col-span-2 row-span-1", // Lebar
      social: { instagram: "#", linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <section id="menu" className="py-16 px-4 md:px-6 relative bg-white">
      <div
        className="container mx-auto max-w-6xl p-4 md:p-6 lg:p-10 rounded-2xl md:rounded-3xl bg-gray-100"
        style={{
          backgroundImage: `url("/bbblurry3.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-6 mt-2">
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-6 lg:gap-10 h-[600px] md:h-[800px]">
          {menuMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`relative overflow-hidden rounded-xl shadow-lg ${member.size}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              whileHover={{ scale: 0.97, y: -5 }}
            >
              {/* Video hanya dirender di client */}
              {isClient && (
                <video
                  src={member.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-opacity duration-300 hover:opacity-100" />

              {/* Info Box */}
              <motion.div
                className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-amber-400">{member.role}</p>
              </motion.div>

              {/* Social Icons */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <a href={member.social.instagram} className="text-white hover:text-amber-400">
                    <FiInstagram size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-white hover:text-amber-400">
                    <FiLinkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-white hover:text-amber-400">
                    <FiTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
