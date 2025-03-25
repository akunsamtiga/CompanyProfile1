"use client";
import { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("founder-section");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="founder-section"
      className="relative w-full py-20 px-6 md:px-12 text-white bg-white max-w-screen overflow-hidden"
    >
      {/* Container Card */}
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl shadow-[0px_4px_20px_rgba(255,165,0,0.6)] md:shadow-[0px_8px_30px_rgba(255,140,0,0.5)] p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-gray-700 relative z-10">

        {/* Dynamic Island Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 md:w-60 md:h-10 bg-gray-800 rounded-b-[25px] shadow-lg border border-gray-700 flex justify-center items-center">
          {/* Kamera Notch */}
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-900 border border-gray-700 rounded-full flex justify-center items-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/gggyrate.svg')] bg-no-repeat bg-cover bg-center opacity-10 z-[-1]"></div>

        {/* Kiri: Konten Founder */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo & Social Media */}
          <div className="flex justify-between items-center mb-4 text-gray-400 text-sm">
            <Image
              src="/images/logo1.jpg"
              alt="Founder Logo"
              width={430}
              height={240}
              className="w-24 h-14 object-cover rounded-2xl"
            />
            <div className="flex space-x-3">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gold hover:text-white">
                <i className="fab fa-facebook"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gold hover:text-white">
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gold hover:text-white">
                <i className="fab fa-instagram"></i>
              </motion.a>
            </div>
          </div>

          {/* Judul & Tagline */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-snug z-5">
            Ingin Bertemu <span className="text-gold">Owner Kami?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-orange-200 mt-2 pr-4 md:pr-2">
            Membentuk Kerja Sama Bisnis di Masa Depan
          </p>

          {/* Deskripsi */}
          <p className="mt-4 text-gray-300 text-xs md:text-base leading-relaxed">
            Dengan pengalaman bertahun-tahun dalam inovasi dan kepemimpinan, pendiri kami mendorong menuju keunggulan dan kesuksesan.
          </p>

          {/* Info Kontak */}
          <p className="mt-6 text-gray-400 text-sm md:text-base lg:text-lg font-normal">
            Untuk pertanyaan: <span className="text-green-500">+ 089 8765 4321</span>
          </p>

            {/* CTA Button */}
            <a
            href="https://wa.me/628987654321"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center bg-white w-fit text-black font-medium px-4 py-2 rounded-md hover:bg-green-100 transition gap-2"
            >
            Hubungi Kami
            <FaWhatsapp className="text-green-500 text-2xl" />
            </a>
        </motion.div>

        {/* Kanan: Foto Founder */}
        <motion.div
          className="mt-6 md:mt-0 mb-6 md:mb-0 w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            style={{ y }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Frame Gold */}
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-white rounded-xl"></div>
            <Image
              src="/images/founder2.jpg"
              alt="Founder"
              width={200}
              height={200}
              className="rounded-xl w-64 h-32 md:w-56 md:h-full lg:w-54 lg:h-full object-cover relative z-10"
            />

            {/* Bingkai Foto Tambahan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="absolute -bottom-8 -right-8 w-24 h-24 md:w-30 md:h-30 lg:w-34 lg:h-34 border-2 border-white rounded-full overflow-hidden shadow-lg z-20"
            >
              <Image
                src="/images/founder.jpg"
                alt="Foto Tambahan 1"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
