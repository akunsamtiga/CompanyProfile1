"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // ✅ Cegah animasi berulang

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // ✅ Tandai bahwa animasi sudah berjalan sekali
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]); // ✅ Bergantung pada `hasAnimated`

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 bg-white text-gray-800 max-w-screen overflow-hidden"
    >
      {/* Elemen Bulatan Terminal di Pojok Kanan Atas */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-3 h-3 md:w-5 md:h-5 bg-red-500 rounded-full shadow-md"></div>
        <div className="w-3 h-3 md:w-5 md:h-5 bg-yellow-400 rounded-full shadow-md"></div>
        <div className="w-3 h-3 md:w-5 md:h-5 bg-green-500 rounded-full shadow-md"></div>
      </div>

      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24 mt-8 md:mt-6 lg:mt-18">
        
        {/* Gambar dengan Frame Elegan */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          {/* Frame Utama */}
          <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-[90%] h-[90%] md:w-full md:h-full border-4 border-[#D4B996] rounded-lg"></div>
          <Image
            src="/images/bg1.jpg"
            alt="Tentang Kami"
            width={600}
            height={400}
            className="w-[90%] h-[90%] md:w-full md:h-full rounded-lg shadow-xl relative z-10"
          />

          {/* Bingkai Foto Tambahan 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-8 -right-1 w-24 h-24 border-4 border-[#C5A880] rounded-xl overflow-hidden shadow-lg z-20"
          >
            <Image
              src="/images/bg2.jpg"
              alt="Foto Tambahan 1"
              width={128}
              height={128}
              className="full h-full object-cover"
            />
          </motion.div>

          {/* Bingkai Foto Tambahan 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="absolute top-5 -right-2 w-16 h-16 border-2 border-[#C5A880] rounded-xl overflow-hidden shadow-lg z-20"
          >
            <Image
              src="/images/bg3.jpg"
              alt="Foto Tambahan 2"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Konten */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
          >
            Tentang <span className="text-[#C5A880] font-extrabold">Cissy Coffee</span>
          </motion.h2>

          {/* Divider Premium */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-16 h-1 bg-[#C5A880] my-4 mx-auto md:mx-0"
          ></motion.div>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed px-6 md:px-0"
          >
            Cissy Cafe adalah tempat di mana kopi berkualitas, suasana hangat, dan momen berharga bertemu. Nikmati racikan terbaik kami dalam lingkungan yang cozy dan penuh cerita.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.3, duration: 0.5 }}
            href="/contact"
            className="mt-6 inline-block bg-[#C5A880] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#B39272] transition duration-300"
          >
            Lebih Lanjut
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
