"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const testimonials = [
  {
    name: "Seo Yejin",
    position: "Coffee Enthusiast",
    review:
      "Kopi di sini benar-benar luar biasa! Aromanya begitu kaya, dan setiap tegukan terasa seperti seni.",
    rating: 5,
    image: "/images/pp1.png",
  },
  {
    name: "Park Minji",
    position: "Food Blogger",
    review:
      "Interiornya elegan, baristanya ramah, dan kopinya? Sempurna! Cissy Cafe benar-benar menghadirkan pengalaman mewah.",
    rating: 4.5,
    image: "/images/pp2.png",
  },
  {
    name: "Kim Seoyeon",
    position: "Coffee Connoisseur",
    review:
      "Espresso mereka memiliki keseimbangan sempurna antara kekuatan dan kehalusan. Sangat direkomendasikan!",
    rating: 5,
    image: "/images/pp3.png",
  },
  {
    name: "Choi Hana",
    position: "Interior Designer",
    review:
      "Saya jatuh cinta dengan atmosfer di sini. Perpaduan antara desain klasik dan modern yang sempurna!",
    rating: 5,
    image: "/images/pp4.png",
  },
  {
    name: "Jeon Nayoung",
    position: "Frequent Traveler",
    review:
      "Pernah mencoba banyak coffee shop di berbagai negara, tapi ini salah satu yang terbaik.",
    rating: 4,
    image: "/images/pp5.png",
  },
];


export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("testimonials-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="testimonials-section"
      className="relative w-full py-12 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Efek Background Dinamis */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gray-700 opacity-10 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-50 to-amber-100 drop-shadow-lg"
        >
          What Our Guests Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto italic"
        >
          Setiap cangkir kopi memiliki cerita. Inilah pengalaman para tamu kami yang merasakan kemewahan di Cissy Cafe.
        </motion.p>

        {/* Carousel Testimoni */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="px-6"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-xl p-8 flex flex-col items-center text-center border border-white/20 transition-transform duration-300 hover:scale-95 hover:shadow-2xl"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    className="rounded-full w-18 h-18 object-cover mb-4 border-2 border-amber-100 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-amber-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400">{testimonial.position}</p>
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-300 italic line-clamp-3">"{testimonial.review}"</p>

                {/* Rating dengan ikon dari React Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-4 flex"
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    i < Math.floor(testimonial.rating) ? (
                      <AiFillStar key={i} className="text-[#f5c518] w-5 h-5 mx-0.5" />
                    ) : (
                      <AiOutlineStar key={i} className="text-[#f5c518] w-5 h-5 mx-0.5 opacity-40" />
                    )
                  ))}
                </motion.div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          href="#reviews"
          className="mt-10 inline-block bg-gray-100 text-[#1e120d] font-semibold py-3 px-8 rounded-lg hover:bg-amber-200 transition duration-300 shadow-xl transform hover:scale-105"
        >
          Ulasan lainnya
        </motion.a>
      </div>
    </section>
  );
}
