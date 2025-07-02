
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
    <footer className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Keep in touch and Contact Us button */}
     

        {/* Second UI Content - Blue Bar */}
        <div className="bg-blue-500 text-white py-6 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-start md:items-center text-sm">
            <div className="flex items-start space-x-2 mb-4 md:mb-0">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>Univer Food Inspection and Certification Private Limited,</p>
                <p>Flat no 71, First Floor, Door No: 110, Main Road,</p>
                <p>Adambakkam Village, Alandur, Chennai - 600016</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 mb-4 md:mb-0">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call/WhatsApp</h4>
                <p>+91 9023017097</p>
                <p>+91 95783 40098</p>
                <p>+91 95783 44308</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>admin@univer.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second UI - Main Navigations, Useful Link, Useful Links, Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-gray-200">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-0">Keep in touch</h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Contact Us
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Start a Conversation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Start a Conversation</h3>
            <p className="text-pink-600 font-semibold"><a href="mailto:contactus@staciacorp.com">contactus@staciacorp.com</a></p>
            <p className="text-pink-600 font-semibold"><a href="tel:+919363034150">+91-9363034150</a></p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Main Navigations</h3>
            <ul className="space-y-3 text-gray-600 list-none">
              <li><a href="#" className="hover:text-blue-600 no-underline">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">Services</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">Contact</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Useful Link</h3>
            <ul className="space-y-3 text-gray-600 list-none">
              <li><a href="#" className="hover:text-blue-600 no-underline">Hygiene rating</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">Eat right station</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">Eat right campus</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Useful Links</h3>
            <ul className="space-y-3 text-gray-600 list-none">
              <li><a href="#" className="hover:text-blue-600 no-underline">BHOG</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">Clean Veg Market</a></li>
              <li><a href="#" className="hover:text-blue-600 no-underline">Clean Street Food Hub</a></li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4 ">Policies</h3>
            <ul className="space-y-3 text-gray-600  "></ul>
            <li><a href="#" className="hover:text-blue-600">Impartiality Policies</a></li>
              <li><a href="#" className="hover:text-blue-600">Confidential policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Quality policy</a></li>
            
          </div>
        </div>

        {/* Bottom Section: Copyright and Social Links */}
        <div className="border-t border-gray-200 pt-8 pb-16 mt-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              ©Copyright StaciaCorp. All Rights Reserved
            </div>
            <div className="flex space-x-6 text-sm items-center">
              <a href="#" className="text-gray-500 hover:text-blue-600 no-underline">Sitemap</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 no-underline">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 no-underline">Privacy Policy</a>
              <div className="flex space-x-4 ml-6">
                <a href="#" className="text-gray-500 hover:text-blue-600"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-gray-500 hover:text-blue-600"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-gray-500 hover:text-blue-600"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-500 hover:text-blue-600"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
