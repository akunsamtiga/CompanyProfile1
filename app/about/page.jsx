"use client";
import React from "react";
import Link from "next/link"; // Import Link untuk navigasi cepat
import { HomeIcon } from "@heroicons/react/24/solid"; // Import icon rumah dari Heroicons
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animation";

export default function About() {
  // Data untuk perjalanan Cissy Cafe
  const milestones = [
    { year: "2015", title: "Awal Mula Cissy Cafe", description: "Cissy Cafe berdiri dengan misi menghadirkan pengalaman ngopi terbaik di kota." },
    { year: "2017", title: "Inovasi Menu Kopi", description: "Menambahkan berbagai varian kopi spesial dan camilan artisan untuk pelanggan setia." },
    { year: "2019", title: "Ekspansi Cabang", description: "Membuka cabang baru di beberapa kota dan semakin dikenal oleh para pecinta kopi." },
    { year: "2021", title: "Penghargaan & Komunitas", description: "Diakui sebagai coffee shop favorit dan menjadi tempat berkumpulnya komunitas kreatif." },
  ];

  // Data tim Cissy Cafe
  const team = [
    { name: "Minji", role: "Head Barista", image: "/images/pp1.png" },
    { name: "Jisoo", role: "R&D Specialist", image: "/images/pp2.png" },
    { name: "Sora", role: "Operational Manager", image: "/images/pp3.png" },
    { name: "Yuna", role: "Marketing & Branding", image: "/images/pp4.png" },
    { name: "Eunji", role: "Sustainability Coordinator", image: "/images/pp5.png" },
    { name: "Haeun", role: "Quality Control", image: "/images/pp6.png" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-100 pt-16 text-gray-800">
      {/* Tombol Navigasi Home */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/">
          <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg">
            <HomeIcon className="w-6 h-6 mr-2" />
            Home
          </button>
        </Link>
      </div>

      {/* Background Pattern */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 600">
          <rect width="800" height="600" fill="#E5E7EB" /> {/* Warna abu-abu */}
          <circle cx="200" cy="150" r="80" fill="#9CA3AF" opacity="0.5" />
          <circle cx="600" cy="450" r="120" fill="#6B7280" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10 px-6 lg:px-16 py-10 lg:py-16">
        {/* Overview Section */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight">
            Tentang Cissy Cafe
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Cissy Cafe lahir dari kecintaan terhadap kopi dan suasana yang nyaman. Dengan bahan berkualitas dan pelayanan terbaik, kami menciptakan pengalaman ngopi yang tak terlupakan.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
            Perjalanan Kami
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative flex flex-col md:flex-row items-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 p-6 bg-white rounded-xl shadow-lg">
                    <h4 className="text-2xl font-bold text-gray-800">{milestone.title}</h4>
                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 max-w-6xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Tim Profesional Kami
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
