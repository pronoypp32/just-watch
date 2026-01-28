'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface QuickLink {
  name: string;
  path: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const quickLinks: QuickLink[] = [
    { name: 'About Me', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog Post', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/dibyendu.mondal.685847',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dibyendu_008/',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z',
    },
    {
      name: 'Twitter',
      href: 'https://x.com/pronoy_bas71350',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    },
    {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dibyendu-mondal-33b562262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/pronoypp32',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
    {
      name: 'YouTube',
      href: ' https://youtube.com/@dibyendu_mondal_official?si=RgXkjnWPx4Uwakaa',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
  ];

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Newsletter Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <span className="text-white font-black text-xl">DWS</span>
              </div>
            </Link>

            <h3 className="text-2xl font-black mb-4">
              <span className="text-white">Get Ready </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                To Create Great
              </span>
            </h3>

            <div className="mt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-all duration-300"
                />
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@stdigital.com"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                   dibyenduseller@gmail.com                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Khulna, Bangladesh
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +880 1710-433550
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © Pronoy WEB DEV | All Rights Reserved
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Terms & Condition
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;