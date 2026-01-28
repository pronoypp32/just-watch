'use client';

import React from 'react';
import Link from 'next/link';

const GMBSEOServicePage: React.FC = () => {
  const features = [
    {
      icon: '📍',
      title: 'GMB Profile Optimization',
      description: 'Complete optimization of your Google My Business profile for maximum local visibility.',
    },
    {
      icon: '⭐',
      title: 'Review Management',
      description: 'Monitor, respond to, and manage customer reviews to build trust and reputation.',
    },
    {
      icon: '📊',
      title: 'Local SEO Strategy',
      description: 'Optimize for local searches to appear in Google Maps and local pack results.',
    },
    {
      icon: '📸',
      title: 'Photo & Video Optimization',
      description: 'Add high-quality images and videos to showcase your business and attract customers.',
    },
    {
      icon: '📝',
      title: 'Local Citations',
      description: 'Build consistent business listings across local directories and platforms.',
    },
    {
      icon: '📈',
      title: 'Performance Tracking',
      description: 'Monitor GMB insights, track rankings, and measure local search performance.',
    },
  ];

  const benefits = [
    'Appear in Google Maps results',
    'Increase local visibility by 250%',
    'Get more customer calls and visits',
    'Dominate local search rankings',
    'Build trust with positive reviews',
    'Attract nearby customers',
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      features: [
        'GMB Profile Setup',
        'Basic Optimization',
        'Review Monitoring',
        '10 Local Citations',
        'Monthly Reports',
      ],
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      popular: true,
      features: [
        'Complete GMB Optimization',
        'Advanced Local SEO',
        'Review Management',
        '25 Local Citations',
        'Google Posts',
        'Photo Optimization',
        'Weekly Reports',
      ],
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: [
        'Multi-Location GMB',
        'Complete Local Domination',
        'Reputation Management',
        '50+ Local Citations',
        'Competitor Analysis',
        'Video Marketing',
        'Daily Monitoring',
        'Priority Support',
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <Link href="/services" className="text-sm font-bold text-red-500 uppercase tracking-wider hover:underline">
              ← Back to Services
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
              GMB SEO
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Dominate local search results and attract more customers with expert Google My Business optimization and local SEO strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Free GMB Audit
              </Link>
              <a
                href="#pricing"
                className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                GMB SEO Benefits
              </h2>
              <p className="text-gray-400 mb-8">
                Our comprehensive GMB SEO services are designed to maximize your local visibility and drive more customers to your business.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our GMB SEO Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'GMB Audit', desc: 'Complete analysis of your current GMB profile' },
                  { step: '02', title: 'Profile Optimization', desc: 'Optimize all aspects of your GMB listing' },
                  { step: '03', title: 'Local SEO Implementation', desc: 'Build citations and local signals' },
                  { step: '04', title: 'Monitor & Improve', desc: 'Track performance and continuous optimization' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Choose Your Package
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-red-500 scale-105 shadow-2xl shadow-red-500/20'
                    : 'border-white/10 hover:border-red-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 px-4 py-1 rounded-full text-xs font-bold text-white">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${
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

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free GMB audit and discover how we can boost your local visibility
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Get Free GMB Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GMBSEOServicePage;