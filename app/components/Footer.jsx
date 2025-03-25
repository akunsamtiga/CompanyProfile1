"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Navigasi */}
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li><a href="/about" className="hover:text-white">Tentang</a></li>
            <li><a href="/services" className="hover:text-white">Layanan</a></li>
            <li><a href="/contact" className="hover:text-white">Kontak</a></li>
          </ul>
        </nav>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center gap-4 mb-4 text-gray-200">
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
            <FaLinkedinIn size={16} />
          </a>
        </div>

        {/* Hak Cipta */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Perusahaan Anda. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
