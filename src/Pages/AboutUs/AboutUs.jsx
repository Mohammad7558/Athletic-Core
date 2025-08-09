import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaCalendarAlt,
  FaUsers,
  FaStopwatch,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Arena</h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Your all-in-one solution for athletic event management — fast,
            efficient, and built for athletes and organizers.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Why Choose Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform translate-y-5"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <FaRunning className="w-full h-full p-3" />,
              title: "Athlete-Focused",
              desc: "Built for runners, cyclists, swimmers, and multi-sport competitors.",
            },
            {
              icon: <FaCalendarAlt className="w-full h-full p-3" />,
              title: "Smart Scheduling",
              desc: "Seamlessly manage event dates, registration, and logistics.",
            },
            {
              icon: <FaUsers className="w-full h-full p-3" />,
              title: "Community Hub",
              desc: "Connect clubs, athletes, and teams — all in one place.",
            },
            {
              icon: <FaStopwatch className="w-full h-full p-3" />,
              title: "Live Timing",
              desc: "Real-time results & leaderboard updates during the event.",
            },
            {
              icon: <FaBullseye className="w-full h-full p-3" />,
              title: "Our Mission",
              desc: "To streamline and elevate the way sports events are experienced.",
            },
            {
              icon: <FaEye className="w-full h-full p-3" />,
              title: "Our Vision",
              desc: "A future where every athletic event is easy to run and fun to join.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline / Journey */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              Our Journey
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform translate-y-5"></span>
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle bg-blue-600 text-white p-3 rounded-full">
                  🏁
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-bold text-blue-600">2022</time>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">The Beginning</h3>
                  <p className="text-gray-600">Idea born to simplify local race registrations & timing.</p>
                </div>
                <hr className="bg-blue-200" />
              </li>
              <li>
                <div className="timeline-middle bg-blue-600 text-white p-3 rounded-full">
                  🚀
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-bold text-blue-600">2023</time>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">Platform Launch</h3>
                  <p className="text-gray-600">Launched MVP used by 20+ events across 3 cities.</p>
                </div>
                <hr className="bg-blue-200" />
              </li>
              <li>
                <div className="timeline-middle bg-blue-600 text-white p-3 rounded-full">
                  🌐
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-bold text-blue-600">2024</time>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">Global Expansion</h3>
                  <p className="text-gray-600">Serving 100+ events with real-time features & support.</p>
                </div>
                <hr className="bg-blue-200" />
              </li>
              <li>
                <div className="timeline-middle bg-blue-600 text-white p-3 rounded-full">
                  🏆
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-bold text-blue-600">Today</time>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">The Future</h3>
                  <p className="text-gray-600">Constantly improving — with you on the track.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="text-center py-20 px-4 bg-gradient-to-r from-blue-50 to-white"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Join the Movement
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Be part of the revolution in athletic event management. Host, join, or follow events like never before.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
              Explore Events
            </button>
            <button className="btn btn-outline btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;