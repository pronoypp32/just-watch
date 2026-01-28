'use client';

import React from 'react';
import Link from 'next/link';

const ContentMarketingPage: React.FC = () => {
  const contentTypes = [
    { icon: '📝', title: 'Blog Posts', description: 'SEO-optimized articles that drive traffic and establish authority' },
    { icon: '🎥', title: 'Video Content', description: 'Engaging videos for YouTube, social media, and your website' },
    { icon: '📊', title: 'Infographics', description: 'Visual content that simplifies complex information' },
    { icon: '📧', title: 'Email Newsletters', description: 'Compelling email content that converts subscribers' },
    { icon: '📱', title: 'Social Media Content', description: 'Platform-specific content that resonates with your audience' },
    { icon: '📖', title: 'E-books & Guides', description: 'Long-form content that generates quality leads' },
  ];

  const process = [
    { step: '01', title: 'Research & Strategy', desc: 'Deep dive into your audience, competitors, and industry trends' },
    { step: '02', title: 'Content Planning', desc: 'Create comprehensive content calendar aligned with your goals' },
    { step: '03', title: 'Content Creation', desc: 'Produce high-quality, engaging content across all formats' },
    { step: '04', title: 'Distribution', desc: 'Share content across optimal channels for maximum reach' },
    { step: '05', title: 'Promotion', desc: 'Amplify content through paid and organic methods' },
    { step: '06', title: 'Analysis & Optimization', desc: 'Track performance and refine strategy based on data' },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$799',
      period: '/month',
      features: [
        '4 Blog Posts per Month',
        'SEO Optimization',
        'Social Media Content',
        'Basic Graphics',
        'Content Calendar',
        'Monthly Analytics',
      ],
    },
    {
      name: 'Professional',
      price: '$1,599',
      period: '/month',
      popular: true,
      features: [
        '8 Blog Posts per Month',
        'Advanced SEO',
        '2 Videos per Month',
        'Infographics',
        'Email Newsletters',
        'Social Media Management',
        'Content Distribution',
        'Weekly Reports',
      ],
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      features: [
        'Unlimited Blog Posts',
        'Premium Video Production',
        'Custom Infographics',
        'E-books & Whitepapers',
        'Full Content Hub Management',
        'Multi-Channel Distribution',
        'Influencer Partnerships',
        'Dedicated Content Team',
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
              Content
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
              Create valuable, engaging content that attracts, educates, and converts your target audience into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Content Strategy
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

      {/* Content Types Grid */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Content Formats</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              We Create All Types of Content
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Content Marketing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Why Content Marketing</span>
              <h2 className="text-4xl font-black text-white mt-4 mb-6">
                Benefits for Your Business
              </h2>
              <ul className="space-y-4">
                {[
                  'Increase organic traffic by 300%+',
                  'Build brand authority and trust',
                  'Generate qualified leads',
                  'Improve SEO rankings',
                  'Engage and educate audience',
                  'Drive conversions and sales',
                  'Create lasting customer relationships',
                  'Establish thought leadership',
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

            <div className="space-y-6">
              {[
                { number: '10x', label: 'Higher ROI than Traditional Marketing' },
                { number: '3x', label: 'More Leads Generated' },
                { number: '67%', label: 'More Monthly Leads' },
                { number: '434%', label: 'Increase in Indexed Pages' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <h3 className="text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
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
            Ready to Tell Your Story?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s create compelling content that connects with your audience
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Content Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketingPage;