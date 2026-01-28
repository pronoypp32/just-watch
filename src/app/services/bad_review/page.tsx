'use client';

import React from 'react';
import Link from 'next/link';

const GMBReviewDeletePage: React.FC = () => {
  const services = [
    {
      icon: '🔍',
      title: 'Review Analysis',
      description: 'Comprehensive audit of all your Google My Business reviews to identify removable ones.',
    },
    {
      icon: '⚖️',
      title: 'Violation Assessment',
      description: 'Identify reviews that violate Google\'s policies and terms of service.',
    },
    {
      icon: '📝',
      title: 'Professional Response',
      description: 'Craft professional responses to negative reviews to mitigate damage.',
    },
    {
      icon: '🗑️',
      title: 'Review Removal',
      description: 'Submit removal requests for policy-violating reviews through proper channels.',
    },
    {
      icon: '📊',
      title: 'Reputation Monitoring',
      description: 'Ongoing monitoring of your GMB listing for new reviews and issues.',
    },
    {
      icon: '✨',
      title: 'Reputation Recovery',
      description: 'Strategies to encourage positive reviews and rebuild your online reputation.',
    },
  ];

  const removableTypes = [
    { icon: '🤬', title: 'Fake Reviews', desc: 'Reviews from competitors or non-customers' },
    { icon: '💬', title: 'Spam Content', desc: 'Irrelevant or promotional content' },
    { icon: '😡', title: 'Offensive Language', desc: 'Profanity or hate speech' },
    { icon: '⚠️', title: 'Off-Topic Reviews', desc: 'Not related to your business' },
    { icon: '🔗', title: 'Links & URLs', desc: 'Reviews containing external links' },
    { icon: '👤', title: 'Personal Information', desc: 'Reviews sharing private data' },
  ];

  const pricing = [
    {
      name: 'Single Review',
      price: '$99',
      period: '/review',
      features: [
        '1 Review Analysis',
        'Policy Violation Check',
        'Removal Request Filing',
        'Professional Response Draft',
        '7-Day Follow-up',
        'Success Report',
      ],
    },
    {
      name: 'Multiple Reviews',
      price: '$399',
      period: '/package',
      popular: true,
      features: [
        'Up to 5 Reviews',
        'Complete Review Audit',
        'Priority Processing',
        'All Removal Requests',
        'Response Strategy',
        '14-Day Monitoring',
        'Reputation Report',
        'Email Support',
      ],
    },
    {
      name: 'Complete Cleanup',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited Review Analysis',
        'Ongoing Monitoring',
        'All Removal Requests',
        'Response Management',
        '30-Day Active Monitoring',
        'Positive Review Strategy',
        'Monthly Reports',
        'Dedicated Manager',
        '24/7 Priority Support',
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
              GMB Bad Review
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Delete Service
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Protect your online reputation by removing fake, spam, and policy-violating reviews from your Google My Business listing professionally and organically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Review Audit
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

      {/* Alert Banner */}
      <section className="relative py-8 bg-red-500/10 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Important: Ethical & Legal Service</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We only remove reviews that genuinely violate Google&apos;s content policies. We do NOT remove legitimate negative reviews or use any black-hat methods. Our service is 100% compliant with Googlea&apos;s guidelines and focused on protecting businesses from fake, spam, or abusive content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              How We Help You
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

      {/* Removable Types */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Eligible Reviews</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Types of Reviews We Can Remove
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              We can help remove reviews that violate Google&apos;s content policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {removableTypes.map((type, index) => (
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

      {/* Process Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Review Audit', desc: 'Analyze all your GMB reviews and identify violations' },
              { step: '02', title: 'Strategy Planning', desc: 'Create removal strategy for eligible reviews' },
              { step: '03', title: 'Filing Requests', desc: 'Submit professional removal requests to Google' },
              { step: '04', title: 'Follow & Report', desc: 'Monitor status and provide detailed reports' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl font-black text-white mt-4 mb-6">
                Benefits of Our Service
              </h2>
              <ul className="space-y-4">
                {[
                  'Protect your business reputation',
                  'Remove fake and spam reviews',
                  '100% Google-compliant methods',
                  'Professional handling of requests',
                  'Improve your star rating',
                  'Increase customer trust',
                  'Boost local SEO rankings',
                  'Ongoing reputation monitoring',
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
              <h3 className="text-2xl font-bold text-white mb-6">Success Stats</h3>
              <div className="space-y-6">
                {[
                  { number: '89%', label: 'Success Rate', desc: 'Reviews successfully removed' },
                  { number: '7-14', label: 'Days Average', desc: 'Time to process requests' },
                  { number: '500+', label: 'Reviews Removed', desc: 'Total successful removals' },
                  { number: '4.8★', label: 'Client Rating', desc: 'Average satisfaction score' },
                ].map((stat, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-4xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </h4>
                    <p className="text-white font-bold text-sm">{stat.label}</p>
                    <p className="text-gray-400 text-xs">{stat.desc}</p>
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

      {/* FAQ Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: 'Can you remove ALL negative reviews?', a: 'No. We can only remove reviews that violate Google\'s content policies. Legitimate negative reviews from real customers cannot be removed.' },
              { q: 'How long does the process take?', a: 'Typically 7-14 days for Google to review and process removal requests. Complex cases may take longer.' },
              { q: 'Is this service guaranteed?', a: 'We cannot guarantee removal as the final decision is made by Google. However, we have an 89% success rate for policy-violating reviews.' },
              { q: 'Is this legal and safe?', a: 'Yes, 100%. We only use Google\'s official review flagging and appeal processes. No black-hat methods.' },
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Protect Your Reputation Today
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free review audit and see which reviews we can remove
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Get Free Review Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GMBReviewDeletePage;