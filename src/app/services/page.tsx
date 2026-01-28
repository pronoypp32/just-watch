'use client';

import React from 'react';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications using cutting-edge technologies.',
      features: ['MERN Stack', 'Next.js & React', 'WordPress', 'Responsive Design'],
      link: '/services/web-development',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'SEO Optimization',
      description: 'Comprehensive search engine optimization to improve your rankings and drive organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      link: '/services/seo',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'GMB SEO Services',
      description: 'Optimize your Google My Business profile for maximum local visibility and customer engagement.',
      features: ['GMB Optimization', 'Local SEO', 'Review Management', 'Local Citations'],
      link: '/services/gmb-seo',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: 'Social Media Marketing',
      description: 'Build engaged communities and grow your brand presence across all social platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Ads', 'Analytics'],
      link: '/services/social-media',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Content Marketing',
      description: 'Create compelling content strategies that engage audiences and drive conversions.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Calendar'],
      link: '/services/content',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns on Google and social platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'A/B Testing'],
      link: '/services/ppc',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Marketing',
      description: 'Design and execute email campaigns that nurture leads and boost retention.',
      features: ['Campaign Design', 'Automation', 'Segmentation', 'Analytics'],
      link: '/services/email',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'GMB Bad Review Delete',
      description: 'Remove negative reviews from your Google My Business profile organically and professionally.',
      features: ['Review Analysis', 'Violation Reporting', 'Professional Response', 'Reputation Management'],
      link: '/services/bad_review',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'YouTube SEO',
      description: 'Optimize your YouTube channel and videos for maximum visibility, engagement, and subscriber growth.',
      features: ['Video Optimization', 'Keyword Research', 'Tag Optimization', 'Channel Growth'],
      link: '/services/youtube',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '450+', label: 'Happy Clients' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' },
  ];

  const processes = [
    { step: '01', title: 'Consultation', description: 'We discuss your goals and create a customized strategy' },
    { step: '02', title: 'Planning', description: 'Develop comprehensive action plan with clear milestones' },
    { step: '03', title: 'Implementation', description: 'Execute strategies with precision and expertise' },
    { step: '04', title: 'Optimization', description: 'Continuous monitoring and improvement for best results' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              Web Development &
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
              Comprehensive web development and digital marketing services designed to help your business grow, reach more customers, and achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              Our Core Services
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              From web development to SEO and digital marketing, we provide comprehensive solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="text-red-500 font-semibold text-sm group-hover:translate-x-2 inline-block transition-transform">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8">
            Let&apos;s discuss how our web development and digital marketing services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/projects"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white border border-white/10 hover:border-red-500/50 transition-all duration-300 text-sm sm:text-base"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;