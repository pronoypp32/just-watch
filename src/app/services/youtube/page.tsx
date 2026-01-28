'use client';

import React from 'react';
import Link from 'next/link';

const YouTubeSEOServicePage: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Video SEO Optimization',
      description: 'Optimize your video titles, descriptions, and tags to rank higher in YouTube search results.',
    },
    {
      icon: '🔍',
      title: 'Keyword Research',
      description: 'In-depth keyword analysis to find the best search terms for your niche and target audience.',
    },
    {
      icon: '🏷️',
      title: 'Tag Optimization',
      description: 'Strategic tagging to improve discoverability and help YouTube understand your content better.',
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Track performance metrics, view counts, engagement rates, and subscriber growth over time.',
    },
    {
      icon: '🎨',
      title: 'Thumbnail Design',
      description: 'Eye-catching custom thumbnails that increase click-through rates and attract more viewers.',
    },
    {
      icon: '📈',
      title: 'Channel Growth Strategy',
      description: 'Comprehensive strategies to grow subscribers, increase watch time, and boost engagement.',
    },
  ];

  const benefits = [
    'Higher rankings in YouTube search',
    'Increased organic video views',
    'Better audience engagement',
    'More subscribers and followers',
    'Improved click-through rates',
    'Enhanced channel authority',
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      features: [
        '5 Videos SEO Per Month',
        'Keyword Research',
        'Title & Description Optimization',
        'Basic Tag Strategy',
        'Performance Report',
      ],
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      popular: true,
      features: [
        '15 Videos SEO Per Month',
        'Advanced Keyword Research',
        'Custom Thumbnails (5)',
        'Tag & Metadata Optimization',
        'Playlist Optimization',
        'Competitor Analysis',
        'Monthly Strategy Call',
      ],
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      features: [
        'Unlimited Videos SEO',
        'Full Channel Audit',
        'Custom Thumbnails (Unlimited)',
        'Advanced Tag Strategy',
        'YouTube Ads Setup',
        'End Screen Optimization',
        'Weekly Strategy Calls',
        'Dedicated Account Manager',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl">
            <Link href="/services" className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider hover:underline">
              ← Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
              YouTube
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Dominate YouTube search rankings and drive qualified organic traffic to your channel with our proven YouTube SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
              >
                Get Free SEO Audit
              </Link>
              <a
                href="#pricing"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white border border-white/10 hover:border-red-500/50 transition-all duration-300 text-center text-sm sm:text-base"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                YouTube SEO Benefits
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mb-8">
                Our comprehensive YouTube SEO services help your videos rank higher, get more views, and grow your channel organically.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-white font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Our YouTube SEO Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Channel Audit', desc: 'Analyze your channel and identify opportunities' },
                  { step: '02', title: 'Keyword Research', desc: 'Find high-value keywords for your niche' },
                  { step: '03', title: 'Optimization', desc: 'Optimize titles, descriptions, tags, and thumbnails' },
                  { step: '04', title: 'Growth & Reporting', desc: 'Monitor results and continuously improve' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                      <span className="text-white font-bold text-sm sm:text-base">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              Choose Your Package
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-red-500 md:scale-105 shadow-2xl shadow-red-500/20'
                    : 'border-white/10 hover:border-red-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 px-3 sm:px-4 py-1 rounded-full text-xs font-bold text-white">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-sm sm:text-base text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 sm:py-4 rounded-full font-bold text-center transition-all duration-300 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-2xl hover:shadow-red-500/50'
                      : 'bg-white/5 text-white border border-white/10 hover:border-red-500/50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: '500+', label: 'Videos Optimized' },
              { number: '2M+', label: 'Views Generated' },
              { number: '150+', label: 'Channels Grown' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
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

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Grow Your YouTube Channel?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8">
            Let&apos;s optimize your videos and boost your rankings with proven YouTube SEO strategies
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Get Free SEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default YouTubeSEOServicePage;