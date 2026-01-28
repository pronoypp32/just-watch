'use client';

import React from 'react';
import Link from 'next/link';

const EmailMarketingPage: React.FC = () => {
  const services = [
    {
      icon: '📧',
      title: 'Campaign Design',
      description: 'Beautiful, responsive email templates that reflect your brand and drive engagement.',
    },
    {
      icon: '🎯',
      title: 'List Segmentation',
      description: 'Target the right audience with personalized messages based on behavior and preferences.',
    },
    {
      icon: '⚙️',
      title: 'Marketing Automation',
      description: 'Set up automated workflows for welcome series, nurture campaigns, and more.',
    },
    {
      icon: '✍️',
      title: 'Copywriting',
      description: 'Compelling email copy that captures attention and drives conversions.',
    },
    {
      icon: '📊',
      title: 'A/B Testing',
      description: 'Test subject lines, content, and CTAs to optimize performance.',
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Track opens, clicks, conversions, and ROI with detailed reports.',
    },
  ];

  const campaignTypes = [
    { icon: '👋', title: 'Welcome Series', desc: 'Onboard new subscribers effectively' },
    { icon: '📰', title: 'Newsletters', desc: 'Keep audience engaged with updates' },
    { icon: '🛒', title: 'Promotional Emails', desc: 'Drive sales with targeted offers' },
    { icon: '🔄', title: 'Abandoned Cart', desc: 'Recover lost sales automatically' },
    { icon: '🎉', title: 'Event Invitations', desc: 'Promote webinars and events' },
    { icon: '📚', title: 'Educational Content', desc: 'Nurture leads with value' },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      subscribers: 'Up to 5,000',
      features: [
        '4 Email Campaigns',
        'Template Design',
        'List Management',
        'Basic Automation',
        'Monthly Reports',
        'Email Support',
      ],
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      popular: true,
      subscribers: 'Up to 25,000',
      features: [
        '12 Email Campaigns',
        'Custom Template Design',
        'Advanced Segmentation',
        'Marketing Automation',
        'A/B Testing',
        'Welcome & Nurture Series',
        'Weekly Reports',
        'Priority Support',
      ],
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      subscribers: 'Unlimited',
      features: [
        'Unlimited Campaigns',
        'Premium Design',
        'Advanced Automation',
        'Multi-step Workflows',
        'Predictive Analytics',
        'CRM Integration',
        'Dedicated Manager',
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
              Email
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Build lasting relationships with your customers through personalized email campaigns that deliver results and drive ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Email Audit
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

      {/* Stats Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '$42', label: 'ROI per $1 Spent' },
              { number: '4.2B', label: 'Email Users Worldwide' },
              { number: '87%', label: 'Marketers Use Email' },
              { number: '50%', label: 'Average Open Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-400 font-semibold">{stat.label}</p>
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
              Complete Email Marketing
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

      {/* Campaign Types */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Campaign Types</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              We Handle All Email Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.desc}</p>
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
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Why Email Marketing</span>
              <h2 className="text-4xl font-black text-white mt-4 mb-6">
                Benefits for Your Business
              </h2>
              <ul className="space-y-4">
                {[
                  'Highest ROI of any marketing channel',
                  'Direct communication with customers',
                  'Personalized customer experiences',
                  'Measurable results and analytics',
                  'Cost-effective customer retention',
                  'Automated nurture sequences',
                  'Increased brand awareness',
                  'Drive traffic to your website',
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
              <h3 className="text-2xl font-bold text-white mb-6">Our Email Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Strategy & Planning', desc: 'Define goals and target audience' },
                  { step: '02', title: 'List Building', desc: 'Grow and segment your email list' },
                  { step: '03', title: 'Design & Copy', desc: 'Create compelling emails' },
                  { step: '04', title: 'Automation Setup', desc: 'Build automated workflows' },
                  { step: '05', title: 'Testing & Sending', desc: 'Optimize and deploy campaigns' },
                  { step: '06', title: 'Analysis', desc: 'Track results and improve' },
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
                <div className="mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-red-500 font-semibold mb-6">{plan.subscribers} subscribers</p>

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
            Ready to Boost Your Email ROI?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free email marketing audit and strategy session
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Get Free Email Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketingPage;