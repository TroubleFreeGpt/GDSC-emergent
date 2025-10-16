import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Shop', path: '/shop' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0D14]/95 backdrop-blur-md border-b border-[#1E4FC2]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E4FC2] to-[#4C83FF] p-0.5">
              <div className="w-full h-full rounded-full bg-[#0A0D14] flex items-center justify-center">
                <span className="text-[#4C83FF] font-bold text-lg">GD</span>
              </div>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block group-hover:text-[#4C83FF] transition-colors duration-300">
              GDSC EMU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group
                  ${isActive(link.path) 
                    ? 'text-[#0A0D14] bg-[#4C83FF]' 
                    : 'text-white hover:text-[#4C83FF]'
                  }`}
              >
                {!isActive(link.path) && (
                  <span className="absolute inset-0 bg-[#4C83FF]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/signup" className="px-6 py-2.5 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#4C83FF]/50 transition-all duration-300 hover:scale-105 active:scale-95">
              Join Club
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-[#4C83FF] transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[#1E4FC2]/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? 'bg-[#4C83FF] text-[#0A0D14]'
                    : 'text-white hover:bg-[#4C83FF]/10 hover:text-[#4C83FF]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#4C83FF]/50 transition-all duration-300">
              Join Club
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
