"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line
} from "recharts";

export default function Analysis() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("analysis-section");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const coffeeSalesData = [
    { name: "Espresso", sales: 4200 },
    { name: "Latte", sales: 3100 },
    { name: "Cappuccino", sales: 5200 },
    { name: "Americano", sales: 2300 },
    { name: "Mocha", sales: 3600 },
  ];

  const coffeePreferenceData = [
    { name: "Arabica", value: 65 },
    { name: "Robusta", value: 20 },
    { name: "Liberica", value: 10 },
    { name: "Excelsa", value: 5 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 6200 },
    { month: "Mar", revenue: 7200 },
    { month: "Apr", revenue: 6900 },
    { month: "May", revenue: 8400 },
    { month: "Jun", revenue: 9100 },
  ];

  const COLORS = ["#4B5563", "#6B7280", "#9CA3AF", "#D1D5DB"];

  return (
    <section id="analysis-section" className="w-full pt-18 pb-4 px-3 md:px-6 text-gray-100 bg-gray-100">
      <motion.div
        className="max-w-6xl mx-auto bg-gray-200 rounded-3xl shadow-lg px-3 pt-8 pb-3 md:px-6 md:pt-6 md:pb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header dan Deskripsi */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
          Survey <span className="text-gray-800 font-extrabold">Analysis</span>
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-center text-gray-800 max-w-3xl mx-auto mb-8">
          Analisis ini menampilkan tren penjualan kopi, preferensi pelanggan terhadap jenis biji kopi, dan pendapatan bulanan. 
          Data ini membantu memahami pola konsumsi serta strategi pemasaran yang lebih efektif.
        </p>

        {/* Statistik Utama */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 text-center mb-8">
          <div className="bg-red-100 p-2 rounded-lg shadow-md">
            <h3 className="text-base font-bold text-red-800">Penjualan Terbaik</h3>
            <p className="text-sm text-gray-700">Cappuccino: 5200 cup</p>
          </div>
          <div className="bg-orange-100 p-2 rounded-lg shadow-md">
            <h3 className="text-base font-bold text-orange-800">Biji Kopi Favorit</h3>
            <p className="text-sm text-gray-700">Arabica: 65%</p>
          </div>
          <div className="bg-green-100 p-2 rounded-lg shadow-md">
            <h3 className="text-base font-bold text-green-800">Pendapatan Tertinggi</h3>
            <p className="text-sm text-gray-700">Juni: $9100</p>
          </div>
        </div>

        {/* Grid Layout for Charts */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {/* Grafik Bar Chart */}
          <motion.div className="bg-gray-700 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-100 text-center mb-4">Top Coffee Sales</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={coffeeSalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9CA3AF" />
                <XAxis dataKey="name" stroke="#F9FAFB" />
                <YAxis stroke="#F9FAFB" />
                <Tooltip />
                <Bar dataKey="sales" fill="#9CA3AF" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Grafik Pie Chart */}
          <motion.div className="bg-gray-700 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-100 text-center mb-4">Coffee Bean Preferences</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={coffeePreferenceData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                  {coffeePreferenceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Grafik Line Chart */}
          <motion.div className="bg-gray-700 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-100 text-center mb-4">Monthly Revenue</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9CA3AF" />
                <XAxis dataKey="month" stroke="#F9FAFB" />
                <YAxis stroke="#F9FAFB" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#9CA3AF" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
