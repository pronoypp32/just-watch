'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '05+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Done' },
    { number: '450+', label: 'Happy Clients' },
    { number: '98%', label: 'Success Rate' },
  ];

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'MERN Stack Development',
      description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js with modern architecture.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Next.js & React',
      description: 'High-performance websites using Next.js with server-side rendering and optimized SEO.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'WordPress Development',
      description: 'Custom WordPress themes, plugins, and e-commerce solutions tailored to your business needs.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns across social media, content, and paid advertising channels.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Responsive Design',
      description: 'Mobile-first, responsive web designs that work seamlessly across all devices and screen sizes.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge web technologies and digital marketing strategies.',
    },
    {
      title: 'Results-Driven',
      description: 'Focus on delivering measurable results that impact your bottom line.',
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest reporting throughout our partnership.',
    },
    {
      title: 'Client-Focused',
      description: 'Your success is our success. We tailor solutions to your unique goals.',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Started Journey',
      description: 'Began professional career in web development and digital marketing with focus on modern technologies.',
    },
    {
      year: '2020',
      title: 'Expanded Expertise',
      description: 'Mastered MERN Stack, React, and Next.js. Added SEO and digital marketing to service portfolio.',
    },
    {
      year: '2022',
      title: 'Major Milestone',
      description: 'Reached 300+ successful projects including full-stack applications and WordPress sites.',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading web developer and digital marketing expert with 500+ completed projects.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 md:pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-bold text-pink-500 uppercase tracking-wider">About Me</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
              Building Digital Solutions
              <span className="block bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                That Drive Growth
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl">
              With over 5 years of experience in web development and digital marketing, I help businesses succeed online through modern web applications and strategic SEO solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
                <img
                  src="/images/sidebar-hero.jpeg"
                  alt="About Dibendu Mondal"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-pink-500/20 to-red-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-xs md:text-sm font-bold text-pink-500 uppercase tracking-wider">My Story</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 md:mt-4 mb-4 md:mb-6">
                  Passionate About Web Development & Digital Marketing
                </h2>
              </div>
              
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                I&apos;m Dibendu Mondal, a full-stack web developer and digital marketing specialist with expertise in modern web technologies. My journey began over 5 years ago, and since then, I&apos;ve had the privilege of building hundreds of web applications and helping businesses grow their online presence.
              </p>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                I specialize in MERN Stack (MongoDB, Express.js, React, Node.js), Next.js, and WordPress development, combined with strategic SEO and digital marketing expertise. Whether it&apos;s building a full-stack web application, creating a high-performance Next.js website, or optimizing your site for search engines, I&apos;m committed to delivering solutions that drive real business results.
              </p>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                I believe in staying ahead of industry trends, continuously learning new technologies, and providing my clients with cutting-edge solutions that combine beautiful design with powerful functionality.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full font-bold text-white text-sm md:text-base hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white text-sm md:text-base border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-bold text-pink-500 uppercase tracking-wider">What I Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 md:mt-4">
              Comprehensive Web & Marketing Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-3 md:mt-4 max-w-3xl mx-auto">
              From MERN Stack development to SEO, I offer a full range of web development and digital marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-pink-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-12 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-bold text-pink-500 uppercase tracking-wider">Core Values</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 md:mt-4">
              What Drives Me
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-3 md:space-y-4"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500/20 to-red-600/20 rounded-xl md:rounded-2xl mx-auto flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg md:rounded-xl"></div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">{value.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-bold text-pink-500 uppercase tracking-wider">Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 md:mt-4">
              My Professional Path
            </h2>
          </div>

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-32 border-l-2 border-white/10 pb-8 md:pb-12 last:pb-0"
              >
                <div className="absolute left-0 -ml-3 md:-ml-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                  {index + 1}
                </div>
                <div className="absolute left-8 md:left-0 -ml-0 md:ml-0 md:w-24 top-0">
                  <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                    {item.year}
                  </span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 md:ml-8">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs md:text-sm font-bold text-pink-500 uppercase tracking-wider">Let&apos;s Work Together</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 md:mt-4 mb-4 md:mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help you build a modern web application or grow your business with strategic digital marketing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full font-bold text-white text-sm md:text-base hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;