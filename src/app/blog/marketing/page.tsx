'use client';

import React from 'react';
import Link from 'next/link';

const MarketingInsightsPage: React.FC = () => {
  const insights = [
    {
      id: 1,
      title: 'Digital Marketing Trends 2026',
      excerpt: 'Discover the top digital marketing trends shaping the industry and how to leverage them for business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      date: 'January 26, 2026',
      readTime: '10 min read',
      category: 'Strategy',
      insights: ['AI Marketing Automation', 'Personalization at Scale', 'Video Marketing Dominance', 'Privacy-First Marketing'],
      link: '/blog/digital-marketing-trends-2026',
    },
    {
      id: 2,
      title: 'Email Marketing Best Practices',
      excerpt: 'Boost your email campaign performance with proven tactics that increase open rates and conversions.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop',
      date: 'January 16, 2026',
      readTime: '7 min read',
      category: 'Email Marketing',
      insights: ['Segmentation Strategies', 'A/B Testing', 'Automation Workflows', 'Mobile Optimization'],
      link: '/blog/email-marketing-best-practices',
    },
    {
      id: 3,
      title: 'PPC Advertising ROI Optimization',
      excerpt: 'Maximize your return on investment with data-driven PPC strategies and advanced optimization techniques.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
      date: 'January 8, 2026',
      readTime: '9 min read',
      category: 'Paid Advertising',
      insights: ['Bid Strategy Optimization', 'Quality Score Improvement', 'Ad Copy Testing', 'Landing Page CRO'],
      link: '/blog/ppc-roi-optimization',
    },
    {
      id: 4,
      title: 'Content Marketing ROI Measurement',
      excerpt: 'Learn how to measure and prove the ROI of your content marketing efforts with actionable metrics.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop',
      date: 'December 30, 2025',
      readTime: '8 min read',
      category: 'Content Marketing',
      insights: ['Attribution Modeling', 'KPI Tracking', 'Engagement Metrics', 'Revenue Attribution'],
      link: '/blog/content-marketing-roi',
    },
    {
      id: 5,
      title: 'Social Media Analytics Deep Dive',
      excerpt: 'Understand your social media performance with advanced analytics and data-driven insights.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop',
      date: 'December 22, 2025',
      readTime: '6 min read',
      category: 'Social Media',
      insights: ['Audience Insights', 'Engagement Analysis', 'Conversion Tracking', 'Competitor Benchmarking'],
      link: '/blog/social-media-analytics',
    },
    {
      id: 6,
      title: 'Building a Marketing Funnel That Converts',
      excerpt: 'Create an effective marketing funnel that guides prospects from awareness to conversion.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      date: 'December 15, 2025',
      readTime: '11 min read',
      category: 'Conversion Optimization',
      insights: ['Funnel Mapping', 'Lead Nurturing', 'Conversion Rate Optimization', 'Retargeting Strategies'],
      link: '/blog/marketing-funnel-guide',
    },
  ];

  const featuredInsight = insights[0];

  const categories = [
    { name: 'Strategy', count: 12 },
    { name: 'Analytics', count: 8 },
    { name: 'Conversion', count: 10 },
    { name: 'Automation', count: 6 },
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <Link href="/blog" className="text-sm font-bold text-red-500 uppercase tracking-wider hover:underline">
              ← Back to Blog
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
              Marketing
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Data-driven insights, proven strategies, and expert analysis to help you make smarter marketing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white">🔥 Featured Insight</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={featuredInsight.image}
                  alt={featuredInsight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-bold text-red-500 uppercase tracking-wider mb-4">
                  {featuredInsight.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {featuredInsight.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <span>{featuredInsight.date}</span>
                  <span>•</span>
                  <span>{featuredInsight.readTime}</span>
                </div>
                <Link
                  href={featuredInsight.link}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 w-fit"
                >
                  Read Full Article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2 space-y-12">
              {insights.slice(1).map((insight) => (
                <div
                  key={insight.id}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    {/* Image */}
                    <div className="md:col-span-1">
                      <Link href={insight.link} className="block relative aspect-square rounded-2xl overflow-hidden group">
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2">
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                        {insight.category}
                      </span>
                      <Link href={insight.link}>
                        <h3 className="text-2xl font-black text-white mt-2 mb-3 hover:text-red-500 transition-colors">
                          {insight.title}
                        </h3>
                      </Link>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {insight.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {insight.insights.slice(0, 2).map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{insight.date}</span>
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-black text-white mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {category.name}
                      </span>
                      <span className="text-sm font-bold text-red-500">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-red-500/10 to-pink-600/10 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-xl font-black text-white mb-3">📧 Get Insights</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Subscribe to receive marketing insights and tips directly to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors mb-3"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all">
                  Subscribe
                </button>
              </div>

              {/* Popular Posts */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-black text-white mb-6">🔥 Popular Posts</h3>
                <div className="space-y-4">
                  {insights.slice(0, 3).map((insight, index) => (
                    <Link
                      key={index}
                      href={insight.link}
                      className="block group"
                    >
                      <h4 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors mb-1">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-gray-400">{insight.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s discuss how data-driven marketing strategies can grow your business
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingInsightsPage;