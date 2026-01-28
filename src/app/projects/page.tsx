'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'development', label: 'Development' },
    { id: 'seo', label: 'SEO' },
    { id: 'social', label: 'Social Media' },
    { id: 'content', label: 'Content' },
    { id: 'ppc', label: 'PPC' },
  ];

  const projects = [
    {
      id: 1,
      title: 'MERN Stack E-commerce Platform',
      category: 'development',
      client: 'Fashion Retail Store',
      image: '🛒',
      results: ['Full-Stack App', 'Payment Integration', 'Admin Dashboard'],
      description: 'Built scalable e-commerce platform using MongoDB, Express.js, React, and Node.js.',
      link: '/projects/mern-ecommerce',
    },
    {
      id: 2,
      title: 'Next.js Corporate Website',
      category: 'development',
      client: 'Tech Company',
      image: '⚡',
      results: ['SSR & SEO', 'Fast Performance', 'Modern Design'],
      description: 'Developed high-performance corporate website with Next.js and TypeScript.',
      link: '/projects/nextjs-corporate',
    },
    {
      id: 3,
      title: 'WordPress E-commerce Site',
      category: 'development',
      client: 'Online Store',
      image: '🎨',
      results: ['WooCommerce', 'Custom Theme', 'Payment Gateway'],
      description: 'Custom WordPress theme with WooCommerce integration and payment systems.',
      link: '/projects/wordpress-shop',
    },
    {
      id: 4,
      title: 'React Dashboard Application',
      category: 'development',
      client: 'SaaS Startup',
      image: '📊',
      results: ['Real-time Data', 'Charts & Analytics', 'User Management'],
      description: 'Built interactive admin dashboard with React, Redux, and Chart.js.',
      link: '/projects/react-dashboard',
    },
    {
      id: 5,
      title: 'E-commerce SEO Campaign',
      category: 'seo',
      client: 'Fashion Retail',
      image: '🛍️',
      results: ['300% Traffic Increase', '150% Revenue Growth', '#1 Rankings'],
      description: 'Complete SEO overhaul achieving top rankings for 50+ keywords.',
      link: '/projects/ecommerce-seo',
    },
    {
      id: 6,
      title: 'Social Media Growth Strategy',
      category: 'social',
      client: 'Tech Startup',
      image: '📱',
      results: ['500K+ Followers', '10M+ Impressions', '45% Engagement'],
      description: 'Built engaged community across Instagram, LinkedIn, and Twitter.',
      link: '/projects/social-growth',
    },
    {
      id: 7,
      title: 'Content Marketing Hub',
      category: 'content',
      client: 'SaaS Company',
      image: '📝',
      results: ['1M+ Monthly Views', '50K+ Leads', '200+ Articles'],
      description: 'Created comprehensive content strategy generating qualified leads.',
      link: '/projects/content-hub',
    },
    {
      id: 8,
      title: 'Google Ads Campaign',
      category: 'ppc',
      client: 'Real Estate Agency',
      image: '🏠',
      results: ['450% ROI', '$2.5M Revenue', '1,200+ Leads'],
      description: 'Managed high-performing Google Ads campaigns driving quality leads.',
      link: '/projects/google-ads',
    },
    {
      id: 9,
      title: 'Node.js REST API',
      category: 'development',
      client: 'Mobile App Company',
      image: '🔌',
      results: ['Scalable API', 'JWT Auth', 'MongoDB'],
      description: 'Developed RESTful API with Node.js, Express, and MongoDB.',
      link: '/projects/nodejs-api',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const stats = [
    { number: '500+', label: 'Completed Projects' },
    { number: '450+', label: 'Happy Clients' },
    { number: '$100M+', label: 'Revenue Generated' },
    { number: '98%', label: 'Client Satisfaction' },
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
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              Success Stories &
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Explore our portfolio of successful web development and digital marketing projects that delivered real results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image/Icon */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl sm:text-8xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase">
                      {filters.find(f => f.id === project.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-red-500 font-semibold mb-2">{project.client}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <div className="flex items-center text-red-500 font-semibold text-xs sm:text-sm group-hover:translate-x-2 transition-transform">
                    View Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base sm:text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Let&apos;s Work Together</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
            Join hundreds of satisfied clients who&apos;ve achieved remarkable results with our services
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white text-sm sm:text-base hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white text-sm sm:text-base border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;