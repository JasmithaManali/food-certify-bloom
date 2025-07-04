import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone } from 'lucide-react';
import unavar from '../assets/unavarlogo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Policies', href: '#policies' },
    { name: 'Accreditation', href: '#Accreditation' },
    { name: 'Major Certifications', href: '#Major Certifications' },
    { name: 'Gallery', href: '#Gallery' },
    { name: 'Complaints', href: '#Complaints' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={unavar} alt="" style={{
              width:'30%',
              height:'30%',
              objectFit:'contain',
              justifyContent:'flex-start'
            }} />
            <span className="font-bold text-xl text-gray-900">Unavar</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 justify-end">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-1" style={{ border: 'none' }}>
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;