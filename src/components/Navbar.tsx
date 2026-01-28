'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubLink {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path: string;
  subLinks?: SubLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      subLinks: [
        { name: 'Web Development', path: '/services/web-development'},
        { name: 'Website SEO', path: '/services/seo' },
        { name: 'GMB SEO', path: '/services/gmb' },
        { name: 'YouTube SEO', path: '/services/youtube' },
        { name: 'Social Media Marketing', path: '/services/social-media' },
        { name: 'Content Marketing', path: '/services/content' },
        { name: 'PPC Advertising', path: '/services/ppc' },
        { name: 'Email Marketing', path: '/services/email' },
        
        { name: 'Bad Review Delete', path: '/services/bad_review' },
      ],
    },
    {
      name: 'Projects',
      path: '/projects',
      subLinks: [
        { name: 'All Projects', path: '/projects' },
        { name: 'Development Projects', path: '/projects/develop' },
        { name: 'SEO Projects', path: '/projects/seo' },
        { name: 'Marketing Projects', path: '/projects/marketing' },
      ],
    },
     { name: 'Testimonials', path: '/testimonials' },
    {
      name: 'Blog',
      path: '/blog',
      subLinks: [
        { name: 'Blog Grid', path: '/blog' },
        { name: 'SEO Tips', path: '/blog/seo' },
        { name: 'Marketing Insights', path: '/blog/marketing' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: 'https://www.facebook.com/dibyendu.mondal.685847', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', href: 'https://www.instagram.com/dibyendu_008/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z' },
{
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dibyendu-mondal-33b562262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', },   
   { name: 'YouTube', href: ' https://youtube.com/@dibyendu_mondal_official?si=RgXkjnWPx4Uwakaa', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  ];

  const isActive = (path: string): boolean => pathname === path;

  const handleCloseSidebar = (): void => {
    setIsSidebarOpen(false);
    setExpandedMenu(null);
  };

  const toggleMenu = (linkName: string): void => {
    setExpandedMenu(expandedMenu === linkName ? null : linkName);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* UPDATED LOGO - Professional Personal Brand */}
            <Link href="/" className="flex items-center group relative z-50">
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Logo container with hexagon shape */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* Hexagon background */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {/* Hexagon path */}
                    <path 
                      d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
                      fill="url(#logoGradient)" 
                      className="transform group-hover:scale-110 transition-transform duration-500"
                      filter="url(#glow)"
                    />
                    {/* Inner hexagon for depth */}
                    <path 
                      d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" 
                      fill="rgba(0,0,0,0.3)" 
                      className="transform group-hover:scale-95 transition-transform duration-500"
                    />
                  </svg>
                  
                  {/* DWS Text with modern styling */}
                  <div className="relative z-10 flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-white font-black text-sm tracking-tighter leading-none">
                      DWS
                    </span>
                    <div className="w-6 h-0.5 bg-white/80 mt-0.5 rounded-full"></div>
                  </div>
                  
                  {/* Rotating ring effect */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="url(#logoGradient)" 
                      strokeWidth="1" 
                      strokeDasharray="10 5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
              
             
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link: NavLink) => (
                <div key={link.path} className="relative group">
                  <Link href={link.path} className={`relative px-3.5 py-2 font-medium text-[13px] transition-all duration-300 flex items-center space-x-1.5 overflow-hidden ${isActive(link.path) ? 'text-white' : 'text-white hover:text-white'}`}>
                    <span className="relative z-10">{link.name}</span>
                    {link.subLinks && (
                      <svg className="w-3 h-3 transform group-hover:rotate-180 transition-transform duration-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {isActive(link.path) && (<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-pink-600"></span>)}
                  </Link>

                  {link.subLinks && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl">
                      <div className="py-2">
                        {link.subLinks.map((subLink: SubLink) => (
                          <Link key={subLink.path} href={subLink.path} className="relative block px-4 py-2.5 text-[13px] text-white font-medium hover:text-white transition-all duration-300 hover:pl-6 group/item">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                            <span className="relative z-10">{subLink.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden lg:flex items-center space-x-2">
                {socialLinks.map((social: SocialLink) => (
                  <a key={social.name} href={social.href} className="relative w-9 h-9 flex items-center justify-center transition-all duration-400 rounded-full group overflow-hidden text-white hover:text-white" aria-label={social.name}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full"></div>
                    <svg className="w-4 h-4 relative z-10 transform group-hover:scale-110 transition-all duration-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              <button onClick={() => setIsSidebarOpen(true)} className="relative w-10 h-10 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-400 shadow-lg hover:shadow-red-500/50 group overflow-hidden" aria-label="Menu">
                <div className="flex flex-col items-center justify-center space-y-1.5 relative z-10">
                  <span className="w-5 h-0.5 bg-white rounded-full transition-all duration-400 group-hover:w-6"></span>
                  <span className="w-4 h-0.5 bg-white rounded-full transition-all duration-400 group-hover:w-5"></span>
                  <span className="w-3 h-0.5 bg-white rounded-full transition-all duration-400 group-hover:w-4"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (<div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] animate-fadeIn" onClick={handleCloseSidebar} />)}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-gradient-to-br from-gray-950 via-black to-gray-900 z-[110] shadow-2xl transform transition-all duration-600 ease-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between p-5 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-xl z-10">
            
            {/* UPDATED SIDEBAR LOGO */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={handleCloseSidebar}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="relative w-11 h-11 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path 
                      d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
                      fill="url(#logoGradient)" 
                      className="transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <path 
                      d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" 
                      fill="rgba(0,0,0,0.3)"
                    />
                  </svg>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <span className="text-white font-black text-xs tracking-tighter">DWS</span>
                    <div className="w-5 h-0.5 bg-white/80 mt-0.5 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <span className="font-black text-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                DIG<span className="text-red-500">.</span>WEB <span className="text-red-500">.</span>SEO
              </span>
            </Link>

            <button onClick={handleCloseSidebar} className="w-10 h-10 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-xl flex items-center justify-center transition-all duration-400 hover:rotate-180 hover:shadow-lg shadow-red-500/50 group" aria-label="Close">
              <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-5 border-b border-white/10">
            <div className="relative w-full mb-5 rounded-3xl overflow-hidden border border-red-500/20 shadow-2xl">
              <img src="/images/sidebar-hero.jpeg" alt="Digital Marketing Expert" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mx-auto"></div>
              </div>
            </div>

            <h3 className="text-white text-base font-bold mb-2.5">Professional Web Development, Digital Marketing & SEO Services</h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-4">We specialize in SEO optimize Web Development, social media marketing, content strategy, PPC advertising, and comprehensive digital solutions to grow your business exponentially.</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <h4 className="text-red-500 text-xl font-black">500+</h4>
                <p className="text-white text-[10px] font-semibold">Projects Done</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <h4 className="text-red-500 text-xl font-black">98%</h4>
                <p className="text-white text-[10px] font-semibold">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-2">
            {navLinks.map((link: NavLink, i: number) => (
              <div key={link.path}>
                {link.subLinks ? (
                  <div>
                    <div className="flex items-center gap-1">
                      <Link href={link.path} onClick={handleCloseSidebar} className={`flex-1 flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-[13px] transition-all duration-400 hover:translate-x-2 group overflow-hidden animate-slideRight ${isActive(link.path) ? 'bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30' : 'text-white hover:bg-white/5 hover:text-white'}`} style={{ animationDelay: `${i * 60}ms` }}>
                        <span className="relative z-10">{link.name}</span>
                        <svg className="w-4 h-4 transform transition-transform duration-400 group-hover:translate-x-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      
                      <button onClick={() => toggleMenu(link.name)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all duration-300">
                        <svg className={`w-4 h-4 transform transition-transform duration-400 ${expandedMenu === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-400 ${expandedMenu === link.name ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                      <div className="pl-4 space-y-1">
                        {link.subLinks.map((subLink: SubLink) => (
                          <Link key={subLink.path} href={subLink.path} onClick={handleCloseSidebar} className="block px-4 py-2.5 rounded-lg text-[12px] text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300">
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={link.path} onClick={handleCloseSidebar} className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-[13px] transition-all duration-400 hover:translate-x-2 group overflow-hidden animate-slideRight ${isActive(link.path) ? 'bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30' : 'text-white hover:bg-white/5 hover:text-white'}`} style={{ animationDelay: `${i * 60}ms` }}>
                    <span className="relative z-10">{link.name}</span>
                    <svg className="w-4 h-4 transform transition-transform duration-400 group-hover:translate-x-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-5 border-t border-white/10 space-y-3">
            <a href="tel:+8801234567890" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-4 h-4 text-white transition-all duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wider">Call Now</p>
                <p className="text-xs text-white font-bold">+880 1710-433550</p>
              </div>
            </a>

            <a href="mailto:info@stdigital.com" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-4 h-4 text-white transition-all duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wider">Mail Us</p>
                <p className="text-xs text-white font-bold">dibyenduseller@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wider">Address</p>
                <p className="text-xs text-white font-bold">Khulna, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-white/10 pb-6">
            <h4 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Follow Me</h4>
            <div className="grid grid-cols-4 gap-2.5">
              {socialLinks.map((social: SocialLink, i: number) => (
                <a key={social.name} href={social.href} className="relative aspect-square bg-white/5 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-400 transform hover:scale-110 hover:-translate-y-1 group shadow-lg hover:shadow-red-500/30 animate-bounceIn" style={{ animationDelay: `${i * 100}ms` }} aria-label={social.name}>
                  <svg className="w-4 h-4 text-white relative z-10 transform group-hover:scale-110 transition-all duration-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="https://wa.me/8801710433550" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-400 shadow-2xl hover:shadow-green-500/50 hover:scale-110 group animate-bounce-slow" aria-label="WhatsApp">
        <svg className="w-7 h-7 text-white relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </a>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-25px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
          70% { transform: scale(0.95) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-slideUp { animation: slideUp 0.7s ease-out; }
        .animate-slideRight { animation: slideRight 0.5s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.3); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #ef4444, #ec4899); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #dc2626, #db2777); }
      `}</style>
    </>
  );
};

export default Navbar;