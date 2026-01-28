'use client';

import React from 'react';
import Link from 'next/link';

const SocialMediaPage: React.FC = () => {
  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B+' },
    { name: 'Instagram', icon: '📸', users: '2B+' },
    { name: 'Twitter', icon: '🐦', users: '556M+' },
    { name: 'LinkedIn', icon: '💼', users: '900M+' },
    { name: 'TikTok', icon: '🎵', users: '1.5B+' },
    { name: 'YouTube', icon: '▶️', users: '2.5B+' },
  ];

  const services = [
    {
      icon: '📱',
      title: 'Social Media Strategy',
      description: 'Comprehensive strategy development aligned with your business goals and target audience.',
    },
    {
      icon: '✍️',
      title: 'Content Creation',
      description: 'Engaging posts, graphics, videos, and stories that resonate with your audience.',
    },
    {
      icon: '👥',
      title: 'Community Management',
      description: 'Build and nurture engaged communities through active monitoring and engagement.',
    },
    {
      icon: '📊',
      title: 'Social Media Ads',
      description: 'Targeted advertising campaigns on Facebook, Instagram, LinkedIn, and more.',
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Track performance, measure ROI, and optimize campaigns based on data insights.',
    },
    {
      icon: '🎯',
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to amplify your brand message and reach.',
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$599',
      period: '/month',
      features: [
        '2 Social Media Platforms',
        '12 Posts per Month',
        'Basic Graphics Design',
        'Community Management',
        'Monthly Analytics Report',
      ],
    },
    {
      name: 'Growth',
      price: '$1,199',
      period: '/month',
      popular: true,
      features: [
        '4 Social Media Platforms',
        '24 Posts per Month',
        'Professional Graphics & Videos',
        'Advanced Community Management',
        'Paid Ad Management ($500 budget)',
        'Weekly Analytics Report',
        'Influencer Outreach',
      ],
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      features: [
        'All Major Platforms',
        'Daily Content Publishing',
        'Premium Graphics & Videos',
        '24/7 Community Management',
        'Advanced Paid Ad Campaigns',
        'Influencer Partnerships',
        'Real-time Analytics Dashboard',
        'Dedicated Social Media Manager',
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
              Social Media
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Build engaged communities, increase brand awareness, and drive conversions across all major social media platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Strategy Call
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
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">We Cover All Platforms</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Major Social Media Platforms
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-5xl mb-3">{platform.icon}</div>
                <h3 className="text-white font-bold mb-1">{platform.name}</h3>
                <p className="text-red-500 text-sm font-semibold">{platform.users}</p>
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
              What We Offer
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5M+', label: 'Social Media Reach' },
              { number: '450%', label: 'Average Engagement Increase' },
              { number: '300+', label: 'Campaigns Managed' },
              { number: '98%', label: 'Client Satisfaction' },
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

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-black">
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
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s create a winning social media strategy for your brand
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;