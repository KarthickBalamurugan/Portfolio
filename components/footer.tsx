'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300'] // Using lighter weight
});

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'CONTACT', href: '/contact' }
];

const socialLinks = [
  { 
    name: 'INSTAGRAM', 
    href: 'https://www.instagram.com/alwayskarthick_/', 
    icon: 'ri-instagram-fill',
    color: 'hover:text-[#E1306C]'
  },
  { 
    name: 'LINKEDIN', 
    href: 'https://www.linkedin.com/in/karthickganeshsb/', 
    icon: 'ri-linkedin-fill',
    color: 'hover:text-[#0077B5]'
  },
  { 
    name: 'GITHUB', 
    href: 'https://github.com/KarthickBalamuruganhttps', 
    icon: 'ri-github-fill',
    color: 'hover:text-[#6e5494]'
  },
  { 
    name: 'LEETCODE', 
    href: 'https://leetcode.com/u/karthick-official/', 
    icon: 'ri-code-box-fill',
    color: 'hover:text-[#FFA116]'
  }
];

const Footer = () => {
  return (
    <div className="relative py-20 bg-[#0A0A0A] pt-[854px]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        {/* Upper Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          {/* Address */}
          <div className="flex flex-col items-start space-y-2">
            <span className="text-white/60 text-sm tracking-[0.2em] uppercase">ANNA NAGAR</span>
            <span className="text-white/60 text-sm tracking-[0.2em] uppercase">CHENNAI</span>
            <span className="text-white/60 text-sm tracking-[0.2em] uppercase">INDIA</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-2xl md:text-3xl font-medium tracking-[0.15em] text-white/80 
                          hover:text-[#FF4500] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-12" />

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <p className="text-white/40 text-xs tracking-wider order-2 md:order-1 mt-8 md:mt-0">
            ALL RIGHTS RESERVED © 2025
          </p>

          <div className="flex flex-wrap gap-8 order-1 md:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-white/60 transition-colors duration-300 ${social.color} group`}
              >
                <i className={`${social.icon} text-xl`}></i>
                <span className="text-sm tracking-[0.2em] font-light">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Full-width Name - Fixed Layout */}
        <div className="w-full overflow-hidden">
          <div className="max-w-[100vw]">
            <h1 
              className={`text-[9vw] font-bold ${raleway.className}`}
              style={{
                WebkitTextStroke: '1.5px rgba(255,69,0,0.25)',
                fontWeight: 700,
                background: 'linear-gradient(to right, #FF4500, #FF6B00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 4vw',
                margin: '0 -4vw',
                width: '100%'
              }}
            >
              <span>KARTHICK</span>
              <span>GANESH</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
