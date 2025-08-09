import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      filter: { duration: 1 },
    },
  },
};

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(res => {
        setBlogPosts(res.data.slice(1)); // All posts except first
        setFeaturedPost(res.data[0]); // First post as featured
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="lg:py-20 bg-white relative">
      <div className="container mx-auto lg:px-0 px-6">
        {/* Page Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight lg:pt-0 pt-10">
            Latest News & Blogs
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Stay updated with tips, stories, and insights from the world of athletic events and sports tech.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-80 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-blue-600 font-medium">{featuredPost.category}</span>
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    <span className="text-sm text-gray-400">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blogs/${featuredPost.slug}`}
                    className="w-[220px] flex justify-center items-center p-2 rounded-2xl text-white bg-blue-500"
                  >
                    Read Featured Article
                    <FaArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              }}
              className="group cursor-pointer"
            >
              <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-gray-900/80 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUser className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="mr-1" />
                      {post.readTime}
                    </div>
                    <Link 
                      to={`/blogs/${post.slug}`} 
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      Read more
                      <FaArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gray-900 text-white py-12 px-6 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Get the Latest Updates</h3>
          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive new articles and event tips directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs text-gray-800"
            />
            <button className="btn btn-primary text-white">
              Subscribe
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;