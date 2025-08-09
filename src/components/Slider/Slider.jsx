import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Athletic Event Coordination",
    description: "We manage large-scale sporting events with precision, energy, and world-class organization to ensure an unforgettable experience.",
    image: "https://i.ibb.co/F4W1pRyP/img-1.jpg",
  },
  {
    id: 2,
    title: "Venue & Logistics Setup",
    description: "From track layouts to audience seating, we provide seamless planning and flawless execution for any scale of event.",
    image: "https://i.ibb.co/4RNYQ6GN/img-8-min.jpg",
  },
  {
    id: 3,
    title: "Team & Athlete Support",
    description: "We deliver tailored support for athletes and teams, ensuring peak performance and a smooth competitive journey.",
    image: "https://i.ibb.co/1G6vrytm/img-5-min.jpg",
  },
];

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [page]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      let newPage = prevPage + newDirection;
      if (newPage < 0) newPage = slides.length - 1;
      else if (newPage >= slides.length) newPage = 0;
      return [newPage, newDirection];
    });
  };

  const currentSlide = slides[page];

  return (
    <div
      className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background Images */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
          />
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Card style */}
      <div className="relative z-10 flex items-center h-full px-4 lg:px-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container w-full mx-auto"
        >
          <div className="lg:flex lg:items-start lg:justify-between">
            {/* Text content card */}
            <div className="lg:w-1/2 lg:pr-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-white text-left bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg"
                >
                  <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
                  >
                    {currentSlide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-10 drop-shadow-md leading-relaxed"
                  >
                    {currentSlide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <Link to='/all-events' className="btn btn-outline text-white border-white hover:bg-white hover:text-black px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-medium">
                      View Events
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Optional: Additional content on right side for large screens */}
            <div className="hidden lg:block lg:w-1/2"></div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/40 text-white shadow-lg border border-white/30 transition-all"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/40 text-white shadow-lg border border-white/30 transition-all"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
