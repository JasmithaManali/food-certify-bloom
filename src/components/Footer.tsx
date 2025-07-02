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
    <footer className="bg-white pt-16 ">
      <div className=" w-[95%] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-gray-200">
          <h2 className="text-5xl md:text-[70px] font-bold text-gray-900 mb-6 md:mb-0">Keep in touch</h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Start a Conversation</h3>
            <ul className='list-none p-1 space-y-2 pl-0'>
              <li className="text-black font-semibold"><a href="mailto:admin@unavar.com" className='no-underline  hover:text-blue-600'>admin@unavar.com</a></li>
              <li className="text-black font-semibold"><a href="tel:+91 8838870687" className='no-underline hover:text-blue-600'>+91 8838870687</a></li>
              <li className="text-black font-semibold"><a href="tel:+91 95781 48099" className='no-underline hover:text-blue-600'>+91 95781 48099</a></li>
              <li className="text-black font-semibold"><a href="tel:+91 95783 44358" className='no-underline hover:text-blue-600'>+91 95783 44358</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Main Navigations</h3>
            <ul className="space-y-3 text-black list-none pl-0">
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Home</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">About Us</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Services</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Useful Link</h3>
            <ul className="space-y-3 text-black list-none pl-0 ">
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Hygiene rating</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Eat right station</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Eat right campus</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Useful Links</h3>
            <ul className="space-y-3 text-black list-none pl-0">
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">BHOG</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Clean Veg Market</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Clean Street Food Hub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 ">Policies</h3>
            <ul className="space-y-3 text-black list-none mr-10 pl-0">
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Impartiality Policy</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Confidential Policy</a></li>
              <li><a href="#" className=" text-gray-500 hover:text-blue-600 no-underline">Quality Policy</a></li>
            </ul>
          </div>
        </div>
        <div className='list-none w-full md:w-[50%] pb-10'>
          <h3 className="font-semibold text-gray-900 mb-4">Reach us</h3>
          <ul className="space-y-3 text-black list-none pl-0">
            <li><a href="https://maps.app.goo.gl/wSkwTN8w34QpwkJD9" className=" text-gray-500 hover:text-blue-600 no-underline">Unavar Food Inspection and Certification Private Limited,
Flat no. F1, First Floor, Door No :519, MM Illam, MKN Road,Adambakkam Village, Alandur, Chennai - 600016</a></li>
          </ul>
        </div>

        <div className="pt-8 pb-16 mt-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-black text-sm">
              © 2024 All Rights Reserved by Unavar Food Inspection and Certification Pvt Ltd | Made with love by Stacia Corp®
            </div>
            <div className="flex space-x-6 text-sm items-center">
              <a href="#" className="text-black hover:text-blue-600 no-underline">Sitemap</a>
              <a href="#" className="text-black hover:text-blue-600 no-underline">Terms of Service</a>
              <a href="#" className="text-black hover:text-blue-600 no-underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;