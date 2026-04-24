import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Linkedin, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-gray-900 uppercase">
              Ndivhuwo
            </span>
            <span className="text-[10px] tracking-[0.3em] text-blue-600 font-medium uppercase -mt-1">
              Architects
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-blue-600",
                  location.pathname === item.href ? "text-blue-600" : "text-gray-500"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-5 py-2.5 rounded-none text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium border-b border-gray-50",
                    location.pathname === item.href ? "text-blue-600" : "text-gray-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                Ndivhuwo
              </span>
              <span className="text-[10px] tracking-[0.3em] text-blue-400 font-medium uppercase -mt-1">
                Architects
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed mb-8">
              Designing modern, functional, and aesthetically pleasing living spaces. From ready-made plans to custom luxury homes.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.slice(1).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-blue-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>Johannesburg, South Africa</li>
              <li>+27 11 000 0000</li>
              <li>info@ndivhuwoarchitects.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-gray-500 uppercase font-medium">
          <p>© {new Date().getFullYear()} Ndivhuwo Architects. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27110000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 active:scale-95"
    >
      <Phone size={24} />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </a>
  );
}
