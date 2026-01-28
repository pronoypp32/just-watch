'use client';

import React from 'react';
import Link from 'next/link';

const SEOProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce SEO Campaign',
      category: 'E-commerce SEO',
      client: 'Fashion Retail Store',
      image: '🛍️',
      duration: '6 Months',
      results: [
        '300% Organic Traffic Increase',
        '150% Revenue Growth',
        '#1 Rankings for 50+ Keywords',
        '250% Conversion Rate Improvement'
      ],
      beforeAfter: {
        traffic: { before: '5K/month', after: '20K/month' },
        keywords: { before: '15 rankings', after: '65 rankings' },
        revenue: { before: '$10K/month', after: '$25K/month' }
      },
      description: 'Complete SEO overhaul for online fashion retailer including technical SEO, on-page optimization, content strategy, and link building campaign.',
      services: ['Technical SEO Audit', 'On-Page Optimization', 'Content Strategy', 'Link Building'],
      link: '/projects/ecommerce-seo',
    },
    {
      id: 2,
      title: 'Local SEO Domination',
      category: 'Local SEO',
      client: 'Restaurant Chain',
      image: '🍕',
      duration: '4 Months',
      results: [
        '#1 Local Rankings in 5 Cities',
        '200% Foot Traffic Increase',
        '500+ 5-Star Reviews',
        '180% Phone Calls Increase'
      ],
      beforeAfter: {
        gmb: { before: 'Not Optimized', after: '#1 in Local Pack' },
        reviews: { before: '50 reviews', after: '550+ reviews' },
        calls: { before: '100/month', after: '280/month' }
      },
      description: 'Optimized Google My Business profiles for multi-location restaurant chain, managed reviews, and local citations.',
      services: ['GMB Optimization', 'Local Citations', 'Review Management', 'Local Content'],
      link: '/projects/local-seo',
    },
    {
      id: 3,
      title: 'SaaS SEO Strategy',
      category: 'B2B SEO',
      client: 'Software Company',
      image: '💼',
      duration: '8 Months',
      results: [
        '400% Organic Leads',
        '#1 for 80+ Keywords',
        '1M+ Monthly Organic Traffic',
        '$2M+ in Attributed Revenue'
      ],
      beforeAfter: {
        leads: { before: '50/month', after: '250/month' },
        traffic: { before: '200K/month', after: '1.2M/month' },
        rankings: { before: '20 keywords', after: '100+ keywords' }
      },
      description: 'Comprehensive SEO strategy for B2B SaaS company including content marketing, technical SEO, and authority building.',
      services: ['Enterprise SEO', 'Content Marketing', 'Technical Optimization', 'Authority Building'],
      link: '/projects/saas-seo',
    },
    {
      id: 4,
      title: 'Blog to Authority Site',
      category: 'Content SEO',
      client: 'Lifestyle Blog',
      image: '✍️',
      duration: '12 Months',
      results: [
        '2M+ Monthly Visitors',
        '1000+ Ranking Keywords',
        '$50K/month Ad Revenue',
        'Top 3 Authority in Niche'
      ],
      beforeAfter: {
        traffic: { before: '100K/month', after: '2.1M/month' },
        keywords: { before: '200 rankings', after: '1200+ rankings' },
        revenue: { before: '$5K/month', after: '$52K/month' }
      },
      description: 'Transformed personal blog into authoritative content hub through strategic SEO, content optimization, and topical authority.',
      services: ['Content Strategy', 'Topical Authority', 'On-Page SEO', 'Link Building'],
      link: '/projects/blog-authority',
    },
    {
      id: 5,
      title: 'YouTube SEO Success',
      category: 'Video SEO',
      client: 'Tech Channel',
      image: '🎥',
      duration: '5 Months',
      results: [
        '500K+ New Subscribers',
        '10M+ Video Views',
        '#1 Rankings for 30+ Topics',
        '350% Watch Time Increase'
      ],
      beforeAfter: {
        subscribers: { before: '50K', after: '550K' },
        views: { before: '500K/month', after: '3M/month' },
        watchTime: { before: '20K hours', after: '90K hours' }
      },
      description: 'Optimized YouTube channel with strategic video SEO, keyword research, thumbnail optimization, and content strategy.',
      services: ['Video SEO', 'Keyword Research', 'Thumbnail Design', 'Channel Optimization'],
      link: '/projects/youtube-seo',
    },
    {
      id: 6,
      title: 'E-learning Platform SEO',
      category: 'Education SEO',
      client: 'Online Course Platform',
      image: '🎓',
      duration: '6 Months',
      results: [
        '500% Enrollment Increase',
        'Top 3 Rankings for 100+ Terms',
        '2.5M+ Organic Sessions',
        '$1.5M+ in Course Sales'
      ],
      beforeAfter: {
        enrollments: { before: '200/month', after: '1200/month' },
        traffic: { before: '400K/month', after: '2.9M/month' },
        revenue: { before: '$50K/month', after: '$300K/month' }
      },
      description: 'Built comprehensive SEO strategy for online education platform with focus on programmatic SEO and content hub.',
      services: ['Programmatic SEO', 'Content Hub', 'Technical SEO', 'Conversion Optimization'],
      link: '/projects/elearning-seo',
    },
    {
      id: 7,
      title: 'Healthcare SEO',
      category: 'Medical SEO',
      client: 'Medical Clinic',
      image: '🏥',
      duration: '5 Months',
      results: [
        '#1 for Local Medical Searches',
        '300% New Patient Inquiries',
        '400+ Positive Reviews',
        'Featured in Google Knowledge Panel'
      ],
      beforeAfter: {
        patients: { before: '50/month', after: '200/month' },
        rankings: { before: 'Page 3', after: '#1 Position' },
        reviews: { before: '20 reviews', after: '420+ reviews' }
      },
      description: 'Healthcare SEO strategy with focus on local SEO, reputation management, and YMYL content optimization.',
      services: ['Medical SEO', 'YMYL Optimization', 'Local SEO', 'Reputation Management'],
      link: '/projects/healthcare-seo',
    },
    {
      id: 8,
      title: 'Real Estate SEO',
      category: 'Real Estate SEO',
      client: 'Property Agency',
      image: '🏠',
      duration: '7 Months',
      results: [
        '250% Lead Generation',
        'Top Rankings in 10 Cities',
        '1.5M+ Monthly Traffic',
        '$5M+ in Property Sales'
      ],
      beforeAfter: {
        leads: { before: '100/month', after: '350/month' },
        traffic: { before: '300K/month', after: '1.8M/month' },
        sales: { before: '$500K/month', after: '$2M/month' }
      },
      description: 'Comprehensive real estate SEO strategy with location pages, IDX optimization, and local market domination.',
      services: ['Location SEO', 'IDX Optimization', 'Content Marketing', 'Local Domination'],
      link: '/projects/realestate-seo',
    },
    {
      id: 9,
      title: 'International SEO',
      category: 'Global SEO',
      client: 'International Brand',
      image: '🌍',
      duration: '10 Months',
      results: [
        'Ranked in 15 Countries',
        '600% Global Traffic',
        '50+ Languages Optimized',
        '$10M+ International Revenue'
      ],
      beforeAfter: {
        countries: { before: '3 countries', after: '15 countries' },
        traffic: { before: '500K/month', after: '3.5M/month' },
        revenue: { before: '$1M/month', after: '$7M/month' }
      },
      description: 'International SEO strategy with hreflang implementation, multi-regional targeting, and localized content.',
      services: ['International SEO', 'Hreflang Setup', 'Multi-regional', 'Localization'],
      link: '/projects/international-seo',
    },
  ];

  const stats = [
    { number: '221+', label: 'SEO Projects' },
    { number: '500%', label: 'Avg Traffic Growth' },
    { number: '$100M+', label: 'Revenue Generated' },
    { number: '98%', label: 'Success Rate' },
  ];

  const seoServices = [
    { name: 'Technical SEO', icon: '⚙️' },
    { name: 'On-Page SEO', icon: '📄' },
    { name: 'Link Building', icon: '🔗' },
    { name: 'Local SEO', icon: '📍' },
    { name: 'Content Strategy', icon: '📝' },
    { name: 'Keyword Research', icon: '🔍' },
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
            <Link href="/projects" className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider hover:underline">
              ← Back to All Projects
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
              SEO
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Explore our portfolio of successful SEO campaigns that delivered massive traffic growth and revenue increases.
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

      {/* SEO Services Section */}
      <section className="relative py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              SEO Services We Offer
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {seoServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl">{service.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500"
              >
                {/* Project Header */}
                <div className="relative h-32 sm:h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl sm:text-7xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-xl text-white text-xs font-semibold rounded-full">
                      {project.duration}
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

                  {/* Services Used */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-white/5 rounded-xl p-3 sm:p-4 mb-4">
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study Link */}
                  <Link
                    href={project.link}
                    className="block w-full px-4 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white text-xs sm:text-sm font-semibold text-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                  >
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Need SEO Services?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Let&apos;s Grow Your Organic Traffic
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
            Ready to dominate search rankings? Let&apos;s discuss your SEO goals and create a winning strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white text-sm sm:text-base hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/services/seo"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white text-sm sm:text-base border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              View SEO Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOProjectsPage;