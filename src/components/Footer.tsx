
import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Certification Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#' },
    { name: 'Resources', href: '#' }
  ];

  const services = [
    { name: 'Food Safety Audits', href: '#' },
    { name: 'Laboratory Testing', href: '#' },
    { name: 'HACCP Certification', href: '#' },
    { name: 'ISO 22000', href: '#' },
    { name: 'Training Programs', href: '#' },
    { name: 'Emergency Response', href: '#' }
  ];

  const certifications = [
    { name: 'ISO/IEC 17025 Accredited', href: '#' },
    { name: 'ANSI-ASQ National Accreditation Board', href: '#' },
    { name: 'FDA Recognized', href: '#' },
    { name: 'USDA Approved', href: '#' },
    { name: 'EU Notified Body', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl">FoodCert Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading provider of food safety inspection and certification services, ensuring compliance and excellence in the food industry for over 15 years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span>info@foodcertpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5" />
                <span>123 Food Safety Drive<br />City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-lg mb-6">Accreditations</h3>
            <ul className="space-y-3 mb-6">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <a
                    href={cert.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{cert.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200 group"
                      title={social.name}
                    >
                      <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FoodCert Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-900/20 border border-red-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-red-400">24/7 Emergency Food Safety Hotline</h4>
              <p className="text-gray-300 text-sm">For urgent food safety incidents and compliance issues</p>
            </div>
            <a
              href="tel:+15559111FOOD"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Call Now: +1 (555) 911-FOOD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
