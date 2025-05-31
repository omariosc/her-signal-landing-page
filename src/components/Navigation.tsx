'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'theory', 'evidence', 'concept', 'context', 'challenge'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#theory', label: 'The Theory' },
    { href: '#evidence', label: 'The Evidence' },
    { href: '#concept', label: 'The App Concept' },
    { href: '#context', label: 'The Context' },
    { href: '#challenge', label: 'The Challenge' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-neutral-cream/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-pastel-green/20"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-gray-800 flex items-center space-x-2"
        >
          <span className="text-2xl">🛡️</span>
          <span>HerSignal</span>
        </motion.h1>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden px-6 pb-4 bg-neutral-cream/90 backdrop-blur-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}