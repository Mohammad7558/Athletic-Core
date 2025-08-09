import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-12 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="AthletiCore Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-800">AthletiCore</span>
          </Link>
          <p className="text-gray-600 text-sm lg:pr-40">
            Premium event management for sports & athletics. Organize, manage,
            and shine.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/iam_MOHAMMOD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammod-bin-amin-b051a0244/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-800 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/all-events" 
                className="text-gray-600 hover:text-gray-800 transition"
              >
                All Events
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Team
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Stay updated on upcoming events and features.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} AthletiCore. All rights reserved.
      </div>
    </footer>
  );
}