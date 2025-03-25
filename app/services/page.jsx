"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Pembuatan Website", description: "Kami membuat website profesional & responsif." },
  { title: "Digital Marketing", description: "Strategi pemasaran digital untuk meningkatkan bisnis Anda." },
  { title: "Branding & Desain", description: "Identitas visual yang menarik untuk bisnis Anda." },
];

export default function Services() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold text-primary text-center">Layanan Kami</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-primary">{service.title}</h3>
            <p className="mt-2 text-secondary">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
