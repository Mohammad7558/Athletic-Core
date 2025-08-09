import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebookF, FaQuoteLeft } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mohammad Babu",
    role: "Founder & Lead Organizer",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Ayesha Khan",
    role: "Event Coordinator",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Tanvir Ahmed",
    role: "Tech Lead",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Sarah Islam",
    role: "Marketing Head",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
];

const values = [
  {
    title: "Passion",
    desc: "We live and breathe sports. Passion fuels everything we do.",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Precision",
    desc: "Details matter — in every event we organize or support.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "People First",
    desc: "We believe in teamwork, community, and meaningful experiences.",
    color: "bg-green-100 text-green-600"
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Team = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Behind every great event is a great team. Here's the group of dreamers
            and doers shaping the future of athletic event management.
          </p>
        </div>
      </motion.div>

      {/* Team Cards */}
      <div className="py-20 lg:px-0 px-4 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg border border-gray-100"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold">
                {getInitials(member.name)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a 
                  href={member.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href={member.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a 
                  href={member.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors"
                >
                  <FaFacebookF className="text-xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote Block */}
      <div className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center text-blue-500 mb-4">
            <FaQuoteLeft className="text-4xl opacity-30" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-center text-gray-700 leading-relaxed">
            "We don't just manage events — we create experiences that inspire,
            connect, and push people to their limits. Every race is a story, and
            we're here to help tell it."
          </blockquote>
          <p className="mt-6 font-semibold text-blue-600 text-center text-lg">
            — Mohammad Babu, Founder
          </p>
        </div>
      </div>

      {/* Team Values */}
      <div className="py-20 lg:px-0 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These principles guide everything we do as a team and organization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-xl shadow-sm hover:shadow-md transition-all ${val.color} bg-opacity-50`}
            >
              <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
              <p className="text-gray-700">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h3>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            We're always on the lookout for passionate people. Reach out to us if
            you love sports, tech, or events!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              View Openings
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;