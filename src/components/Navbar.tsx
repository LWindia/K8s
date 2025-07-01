import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'What You Will Learn', href: '#learn' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Mentor', href: '#trainer' },
  // { label: 'Contact', href: '#contact' }, // ✅ Contact added back
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#hero" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <div className="w-10 h-10 rounded-md flex items-center justify-center">
            <img src="/assets/LW-white.png" alt="logo" className="w-full h-full object-contain" />
          </div>
          <span className="hidden sm:inline text-base">Kubernetes Bootcamp</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 rounded-md text-gray-200 hover:text-k8s-blue hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 text-gray-200 hover:bg-white/10 rounded-md transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900/95 backdrop-blur border-t border-slate-800/50 px-4 py-3 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 rounded-md text-gray-200 hover:text-k8s-blue hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
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
