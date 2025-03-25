"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Cover() {
  const [isClient, setIsClient] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fungsi untuk scroll ke About Section dengan efek smooth
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isClient) return null; // Hindari render sebelum client siap

  return (
    <section id="home" className="relative w-full max-w-screen h-screen flex items-center justify-center overflow-hidden">

      {/* Skeleton Loader */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover max-w-screen transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/videos/vd1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 backdrop-blur-[2px]"></div>

      {/* Konten Cover */}
      <motion.div
        className="relative z-10 text-center text-white px-6 md:px-12 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide"
          role="heading"
          aria-level="1"
        >
          Selamat Datang<br />di{" "}
          <span className="bg-gradient-to-r from-orange-200 to-white/40 bg-clip-text text-transparent">
            Cissy Coffee
          </span>
        </motion.h1>

        {/* Paragraf */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-lg md:max-w-xl lg:max-w-3xl mx-auto px-6 md:px-4 line-clamp-3 md:line-clamp-5"
        >
          Dari biji kopi pilihan, racikan tangan barista berpengalaman, hingga
          suasana yang cozy dan instagrammable. Temukan kenikmatan dalam setiap
          tegukan!
        </motion.p>

        {/* Tombol CTA */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FACC15",
            color: "#000",
          }}
          href="#about-section"
          className="mt-8 inline-block bg-orange-200 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Lihat Menu Kami
        </motion.a>
      </motion.div>

      {/* Scroll Indicator dengan Smooth Scroll */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDownIcon
            className="h-8 w-8 text-orange-200 cursor-pointer animate-bounce"
            onClick={scrollToAbout} // Tambahkan fungsi scroll smooth
          />
        </motion.div>
      </div>
    </section>
  );
}
