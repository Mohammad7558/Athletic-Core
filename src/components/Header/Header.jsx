import { AnimatePresence, motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaCalendarAlt, 
  FaPlusCircle, 
  FaInfoCircle, 
  FaUsers, 
  FaBlog, 
  FaBars, 
  FaTimes,
  FaUserCircle
} from "react-icons/fa";
import { MdEventNote, MdManageAccounts } from "react-icons/md";
import logo from "../../../src/assets/Logo.png";
import { AuthContext } from "../../provider/AuthContext";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logOutUser } = useContext(AuthContext);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    logOutUser()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message))
      .finally(() => setIsDropdownVisible(false));
  };

  const NavItem = ({ to, icon, children, onClick }) => (
    <li>
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          `relative px-3 py-2 transition-colors duration-200 ${
            isActive ? "text-blue-500 font-semibold" : "text-base-content"
          } group`
        }
        onClick={onClick}
      >
        <span className="flex items-center gap-2">
          {icon}
          {children}
        </span>
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </NavLink>
    </li>
  );

  const navItems = [
    { to: "/", icon: <FaHome className="text-lg" />, label: "Home" },
    { to: "/all-events", icon: <FaCalendarAlt className="text-lg" />, label: "All Events" },
    { to: "/about", icon: <FaInfoCircle className="text-lg" />, label: "About Us" },
    { to: "/team", icon: <FaUsers className="text-lg" />, label: "Our Heros" },
    { to: "/blogs", icon: <FaBlog className="text-lg" />, label: "Blogs" }
  ];

  const dropdownItems = [
    { to: "/add-event", icon: <FaPlusCircle className="text-lg" />, label: "Add Event" },
    { to: "/my-bookings", icon: <MdEventNote className="text-lg" />, label: "My Bookings" },
    { to: "/manage-events", icon: <MdManageAccounts className="text-lg" />, label: "Manage Events" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="sticky top-0 left-0 right-0 z-[1000] bg-white/90 backdrop-blur-sm shadow-lg"
      >
        <div className="navbar container mx-auto lg:flex-row flex-row-reverse justify-between lg:px-0">
          {/* Mobile menu button */}
          <div className="flex-none lg:hidden">
            <button 
              className="btn btn-ghost" 
              onClick={toggleSidebar} 
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">The Athletic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="menu menu-horizontal gap-2">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} icon={item.icon}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </nav>

          {/* User/Auth Section */}
          <div className="lg:flex items-center gap-2 hidden">
            {user ? (
              <div ref={dropdownRef} className="relative">
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                >
                  <div 
                    className="btn btn-ghost btn-circle avatar tooltip tooltip-left" 
                    data-tip={user.displayName || "User"}
                  >
                    <div className="w-10 rounded-full">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="User" 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-semibold uppercase">
                          {user.displayName?.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isDropdownVisible && (
                    <motion.ul
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 menu"
                    >
                      {dropdownItems.map((item) => (
                        <li key={item.to}>
                          <NavLink 
                            to={item.to} 
                            className="flex items-center gap-2"
                            onClick={() => setIsDropdownVisible(false)}
                          >
                            {item.icon}
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <button 
                          className="btn mt-4 bg-purple-700 text-white w-full" 
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="btn bg-blue-800 hover:bg-blue-700 text-white"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn bg-green-700 hover:bg-green-800 text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              key="sidebar-backdrop"
              className="fixed inset-0 bg-black/50 bg-opacity-40 z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />
            <motion.aside
              key="sidebar"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 left-0 w-80 h-full bg-base-200 z-[1000] shadow-xl p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <button 
                  onClick={toggleSidebar} 
                  className="btn btn-sm btn-circle" 
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="menu menu-vertical gap-2 mb-6">
                {navItems.map((item) => (
                  <NavItem 
                    key={item.to} 
                    to={item.to} 
                    icon={item.icon}
                    onClick={toggleSidebar}
                  >
                    {item.label}
                  </NavItem>
                ))}
              </ul>

              {user ? (
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="User" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700 text-white flex items-center justify-center font-semibold text-xl uppercase">
                          {user.displayName?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-base">{user.displayName || "User"}</p>
                      <p className="text-sm text-gray-500 break-words">{user.email}</p>
                    </div>
                  </div>

                  <ul className="mb-5 space-y-1">
                    {dropdownItems.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors duration-200 relative group ${
                              isActive ? "text-primary font-semibold" : ""
                            }`
                          }
                          onClick={toggleSidebar}
                        >
                          {item.icon}
                          <span className="relative">
                            {item.label}
                            <span className="absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-primary group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleLogout}
                    className="btn bg-red-400 text-white transition hover:-translate-y-1 hover:bg-red-500 w-full"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  <Link 
                    to="/login" 
                    className="btn btn-wide bg-blue-800 text-white hover:bg-blue-500"
                    onClick={toggleSidebar}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-wide bg-green-700 text-white"
                    onClick={toggleSidebar}
                  >
                    Register
                  </Link>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;