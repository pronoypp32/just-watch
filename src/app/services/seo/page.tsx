'use client';

import React from 'react';
import Link from 'next/link';

const SEOServicePage: React.FC = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Keyword Research',
      description: 'In-depth analysis to identify high-value keywords that drive targeted traffic to your website.',
    },
    {
      icon: '📊',
      title: 'On-Page SEO',
      description: 'Optimize every element of your web pages including meta tags, headers, and content structure.',
    },
    {
      icon: '⚙️',
      title: 'Technical SEO',
      description: 'Fix crawl errors, improve site speed, mobile optimization, and enhance overall site performance.',
    },
    {
      icon: '🔗',
      title: 'Link Building',
      description: 'Build high-quality backlinks from authoritative websites to boost your domain authority.',
    },
    {
      icon: '📈',
      title: 'Local SEO',
      description: 'Optimize for local searches and improve visibility in Google Maps and local directories.',
    },
    {
      icon: '📝',
      title: 'Content Optimization',
      description: 'Create SEO-friendly content that ranks well and provides value to your audience.',
    },
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search engine rankings',
    'Higher conversion rates',
    'Long-term sustainable growth',
    'Better user experience',
    'Competitive advantage',
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      features: [
        '10 Keywords Optimization',
        'On-Page SEO',
        'Monthly Reports',
        'Basic Link Building',
        'Email Support',
      ],
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      popular: true,
      features: [
        '25 Keywords Optimization',
        'Advanced On-Page SEO',
        'Technical SEO Audit',
        'Quality Link Building',
        'Local SEO',
        'Weekly Reports',
        'Priority Support',
      ],
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      features: [
        'Unlimited Keywords',
        'Complete SEO Package',
        'Advanced Technical SEO',
        'Premium Link Building',
        'Competitor Analysis',
        'Daily Reports',
        'Dedicated Account Manager',
        '24/7 Support',
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
              SEO
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Dominate search engine rankings and drive qualified organic traffic to your website with our proven SEO strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Free SEO Audit
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
                SEO Benefits for Your Business
              </h2>
              <p className="text-gray-400 mb-8">
                Our comprehensive SEO services are designed to deliver measurable results and sustainable growth for your business.
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
              <h3 className="text-2xl font-bold text-white mb-6">Our SEO Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Website Audit', desc: 'Complete analysis of your current SEO status' },
                  { step: '02', title: 'Strategy Development', desc: 'Custom SEO roadmap for your business' },
                  { step: '03', title: 'Implementation', desc: 'Execute optimization across all channels' },
                  { step: '04', title: 'Monitor & Report', desc: 'Track progress and refine strategies' },
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
            Ready to Rank Higher?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free SEO audit and discover how we can boost your search rankings
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Get Free SEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEOServicePage;