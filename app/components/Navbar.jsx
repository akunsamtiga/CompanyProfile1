"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HomeIcon, UserIcon, CogIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const sections = ["home", "about", "services", "contact"];

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsNavbarFixed(scrollY > 80);

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el && scrollY >= el.offsetTop - 80) {
              setActiveSection(section);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "anticipate" }}
      className={`fixed bg-black/40 top-3 md:top-4 lg:top-5 left-1/2 -translate-x-1/2 p-3 rounded-full flex space-x-4 md:space-x-5 lg:space-x-6 z-50 transition-all duration-300${
        isNavbarFixed ? "bg-black backdrop-blur-sm" : "bg-black backdrop-blur-sm"
      }`}
    >
      {navItems.map((item, index) => (
        <NavItem key={item.id} {...item} isActive={activeSection === item.id} delay={index * 0.4} />
      ))}
    </motion.nav>
  );
}

// Data menu navbar
const navItems = [
  { id: "home", label: "Home", icon: <HomeIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" /> },
  { id: "about", label: "About", icon: <UserIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" /> },
  { id: "services", label: "Services", icon: <CogIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" /> },
  { id: "contact", label: "Contact", icon: <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" /> },
];

// Komponen NavItem dengan efek masuk yang lebih smooth
const NavItem = ({ id, label, icon, isActive, delay }) => {
  return (
    <motion.a
      href={`#${id}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.55 }}
      className={`relative p-2 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400 ${
        isActive ? "text-orange-200" : "hover:bg-orange-200 hover:text-black"
      }`}
      aria-label={label}
    >
      {icon}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-orange-200 rounded-full"
        />
      )}
    </motion.a>
  );
};
