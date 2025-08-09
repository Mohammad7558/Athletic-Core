import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SingleFeaturedEvents = ({ singleEvent }) => {
  const {
    eventName,
    eventDate,
    description,
    imageUrl,
    _id,
  } = singleEvent;

  const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Image with subtle zoom effect */}
      <div className="relative h-60 overflow-hidden flex-shrink-0">
        <motion.img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />
        {/* Minimalist date badge */}
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium text-gray-800 shadow-sm">
          {formattedDate}
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Event title with line clamp */}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 min-h-[3.5rem]">
          {eventName}
        </h3>
        
        {/* Description with subtle fade */}
        <p className="mt-3 text-gray-600 text-sm line-clamp-2 flex-grow">
          {description}
        </p>
        
        {/* Minimalist action buttons */}
        <div className="mt-6 flex justify-between space-x-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Link
              to={`/event/${_id}`}
              className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              View Details
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Link
              to="/all-events"
              className="block w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Explore All
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeaturedEvents;