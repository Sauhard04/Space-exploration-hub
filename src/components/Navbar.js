import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo & Title */}
        <div className="flex items-center">
          <img src={logo} className="h-10 w-10" alt="Space Exploration Hub logo" />
          <h1 className="text-xl font-bold text-white ml-2">Space Exploration Hub</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="sm:hidden flex items-center text-white focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`absolute sm:static left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent transition-all duration-300 ${isOpen ? 'top-16' : 'top-[-100%]'}`}>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 list-none p-4 sm:p-0">
            {[
              { path: '/', name: 'Home' },
              { path: '/missions', name: 'Missions' },
              { path: '/astronauts', name: 'Astronauts' },
              { path: '/space-tech', name: 'Space Tech' },
              { path: 'MyProfile', name: 'My Profile' },
            ].map((link) => (
              <li key={link.path} className="relative flex items-center group">
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `inline-block text-white hover:text-blue-400 transition-all ${isActive ? 'font-semibold border-b-2 border-blue-400' : ''}`}
                >
                  {link.name}
                </NavLink>
                <span className="ml-2 h-6 border-l-2 border-transparent transition-all duration-300 group-hover:border-blue-400" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
