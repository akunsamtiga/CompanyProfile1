"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Data Services
const services = [
  {
    icon: "/images/sv1.png",
    title: "Coffee Business Consulting",
    description: "Strategi eksklusif untuk meningkatkan kualitas, pelayanan, dan profitabilitas café Anda.",
  },
  {
    icon: "/images/sv2.png",
    title: "Luxury Branding & Marketing",
    description: "Membangun identitas premium dan meningkatkan daya tarik café dengan strategi pemasaran eksklusif.",
  },
  {
    icon: "/images/sv3.png",
    title: "Signature Menu Curation",
    description: "Kreasi menu khas dengan cita rasa autentik dan presentasi berkelas untuk pengalaman tak terlupakan.",
  },
];

export default function BestService() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.2,
      }
    );
    const section = document.getElementById("best-service-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="best-service-section"
      className="relative w-full pb-4 pt-14 px-3 md:px-8 lg:px-10 bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white overflow-hidden"
    >
      {/* Efek Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C5A880] opacity-10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400"
        >
          Our Premium Services
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-20 h-1 bg-gray-100 my-6"
        ></motion.div>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl"
        >
          Kami menawarkan layanan eksklusif dengan kualitas terbaik untuk memenuhi kebutuhan bisnis Anda. 
          Dari konsultasi profesional hingga strategi digital, semuanya dirancang untuk kesuksesan Anda.
        </motion.p>

        {/* List Services */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-10 my-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.7 }}
              className="relative bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-2 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={70}
                  height={70}
                />
              </div>
              <h3 className="text-base font-semibold text-gray-100">
                {service.title}
              </h3>

              {/* Efek Dekoratif */}
              <div className="absolute -top-5 -right-1 w-10 h-10 bg-[#C5A880] rounded-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#C5A880] rounded-full opacity-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-2"
        >
          <Link
            href="/services"
            className="inline-block bg-white text-[#1E293B] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Lihat Semua Layanan
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
