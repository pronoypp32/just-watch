'use client';

import React from 'react';
import Link from 'next/link';

const PPCAdvertisingPage: React.FC = () => {
  const platforms = [
    { name: 'Google Ads', icon: '🔍', reach: 'Search & Display Network' },
    { name: 'Facebook Ads', icon: '📘', reach: '2.9B+ Users' },
    { name: 'Instagram Ads', icon: '📸', reach: '2B+ Users' },
    { name: 'LinkedIn Ads', icon: '💼', reach: 'B2B Professionals' },
    { name: 'YouTube Ads', icon: '▶️', reach: 'Video Advertising' },
    { name: 'Twitter Ads', icon: '🐦', reach: 'Real-time Engagement' },
  ];

  const services = [
    {
      icon: '🎯',
      title: 'Campaign Strategy',
      description: 'Develop comprehensive PPC strategies aligned with your business goals and budget.',
    },
    {
      icon: '🔍',
      title: 'Keyword Research',
      description: 'Identify high-converting keywords with optimal cost-per-click for maximum ROI.',
    },
    {
      icon: '✍️',
      title: 'Ad Creation',
      description: 'Craft compelling ad copy and creative that drives clicks and conversions.',
    },
    {
      icon: '📊',
      title: 'Landing Page Optimization',
      description: 'Design and optimize landing pages for higher conversion rates.',
    },
    {
      icon: '🔄',
      title: 'A/B Testing',
      description: 'Continuously test ad variations to improve performance and reduce costs.',
    },
    {
      icon: '📈',
      title: 'Campaign Management',
      description: 'Monitor, optimize, and manage campaigns daily for best results.',
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$699',
      period: '/month',
      adBudget: '$1,000 - $3,000',
      features: [
        'Google Ads Management',
        'Search Campaigns',
        'Basic Display Ads',
        'Keyword Research',
        'Monthly Optimization',
        'Performance Reports',
      ],
    },
    {
      name: 'Growth',
      price: '$1,299',
      period: '/month',
      popular: true,
      adBudget: '$3,000 - $10,000',
      features: [
        'Google & Facebook Ads',
        'Search + Display + Video',
        'Instagram Ads',
        'Advanced Targeting',
        'Landing Page Optimization',
        'A/B Testing',
        'Weekly Optimization',
        'Conversion Tracking',
      ],
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      adBudget: '$10,000+',
      features: [
        'All Major Platforms',
        'Full-Funnel Campaigns',
        'Remarketing Campaigns',
        'Advanced Analytics',
        'Custom Landing Pages',
        'Dedicated PPC Specialist',
        'Daily Optimization',
        'Priority Support',
        'Quarterly Strategy Review',
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
              PPC
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Advertising
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Drive immediate results with targeted pay-per-click campaigns that maximize ROI and bring qualified leads to your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Campaign Audit
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

      {/* Platforms Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Advertising Platforms</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              We Run Ads Everywhere
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-red-500 text-sm font-semibold">{platform.reach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Complete PPC Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Our PPC Results</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '350%', label: 'Average ROI' },
              { number: '5.2x', label: 'ROAS Achieved' },
              { number: '$10M+', label: 'Ad Spend Managed' },
              { number: '42%', label: 'Lower CPA' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Why PPC Advertising</span>
              <h2 className="text-4xl font-black text-white mt-4 mb-6">
                Benefits for Your Business
              </h2>
              <ul className="space-y-4">
                {[
                  'Immediate traffic and results',
                  'Highly targeted audience reach',
                  'Complete budget control',
                  'Measurable ROI and performance',
                  'Brand visibility boost',
                  'Competitive market advantage',
                  'Remarketing to warm leads',
                  'Scalable growth opportunities',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our PPC Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Campaign Audit', desc: 'Analyze current campaigns and opportunities' },
                  { step: '02', title: 'Strategy Development', desc: 'Create data-driven PPC strategy' },
                  { step: '03', title: 'Campaign Setup', desc: 'Build and launch optimized campaigns' },
                  { step: '04', title: 'Optimization', desc: 'Continuous testing and improvement' },
                  { step: '05', title: 'Reporting', desc: 'Transparent performance tracking' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold text-sm">{item.step}</span>
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
      <section id="pricing" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
              Choose Your Package
            </h2>
            <p className="text-gray-400">Management fee + your advertising budget</p>
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
                <div className="mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-red-500 font-semibold mb-6">Ad Budget: {plan.adBudget}</p>

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
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Scale with PPC?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free campaign audit and discover how PPC can grow your business
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Get Free Campaign Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PPCAdvertisingPage;