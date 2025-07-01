import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'What You Will Learn', href: '#learn' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Mentor', href: '#trainer' },
  // { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 60, // reduced offset for smaller navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo/Brand - More Compact */}
        <a href="#hero" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-md flex items-center justify-center">
            <img src="/assets/LW-white.png" alt="logo" className="w-full h-full object-contain" />
          </div>
          <span className="hidden sm:inline text-base">Kubernetes Bootcamp</span>
        </a>

        {/* Desktop Nav - More Compact */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-2 lg:px-3 py-1.5 rounded-md text-gray-200 hover:text-k8s-blue hover:bg-white/10 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger - Smaller */}
        <button
          className="md:hidden p-1.5 rounded-md text-gray-200 hover:bg-white/10 focus:outline-none transition-colors duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - More Compact */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900/95 backdrop-blur border-b border-slate-800/50 px-4 py-3 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-gray-200 hover:text-k8s-blue hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;