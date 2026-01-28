'use client';

import React from 'react';
import Link from 'next/link';

const SEOTipsPage: React.FC = () => {
  const seoTips = [
    {
      id: 1,
      title: 'Advanced SEO Strategies for 2026',
      excerpt: 'Master the latest SEO techniques including AI-powered optimization, voice search, and semantic SEO.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop',
      date: 'January 24, 2026',
      readTime: '8 min read',
      tips: ['AI Content Optimization', 'Voice Search Optimization', 'Core Web Vitals', 'E-E-A-T Signals'],
      link: '/blog/advanced-seo-strategies-2026',
    },
    {
      id: 2,
      title: 'The Complete Guide to Local SEO',
      excerpt: 'Dominate local search results with proven strategies for Google My Business, citations, and local link building.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      date: 'January 18, 2026',
      readTime: '10 min read',
      tips: ['GMB Optimization', 'Local Citations', 'Review Management', 'Local Link Building'],
      link: '/blog/local-seo-guide',
    },
    {
      id: 3,
      title: 'Technical SEO Checklist 2026',
      excerpt: 'Ensure your website meets all technical SEO requirements with this comprehensive checklist.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      date: 'January 12, 2026',
      readTime: '7 min read',
      tips: ['Site Speed Optimization', 'Mobile-First Indexing', 'Schema Markup', 'XML Sitemaps'],
      link: '/blog/technical-seo-checklist',
    },
    {
      id: 4,
      title: 'Keyword Research Mastery',
      excerpt: 'Learn advanced keyword research techniques to find high-value, low-competition keywords.',
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop',
      date: 'January 5, 2026',
      readTime: '6 min read',
      tips: ['Long-tail Keywords', 'Search Intent Analysis', 'Keyword Clustering', 'Competitor Analysis'],
      link: '/blog/keyword-research-mastery',
    },
    {
      id: 5,
      title: 'Link Building Strategies That Work',
      excerpt: 'Build high-quality backlinks using ethical white-hat SEO techniques that deliver results.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
      date: 'December 28, 2025',
      readTime: '9 min read',
      tips: ['Guest Posting', 'Broken Link Building', 'Digital PR', 'Content Partnerships'],
      link: '/blog/link-building-strategies',
    },
    {
      id: 6,
      title: 'On-Page SEO Optimization Guide',
      excerpt: 'Optimize every element of your web pages for maximum search engine visibility.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop',
      date: 'December 20, 2025',
      readTime: '8 min read',
      tips: ['Title Tag Optimization', 'Meta Descriptions', 'Header Tags', 'Internal Linking'],
      link: '/blog/on-page-seo-guide',
    },
  ];

  const quickTips = [
    'Focus on user experience and page speed',
    'Create high-quality, original content',
    'Build authoritative backlinks naturally',
    'Optimize for mobile-first indexing',
    'Use structured data markup',
    'Monitor Core Web Vitals regularly',
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
              SEO Tips &
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Best Practices
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Master search engine optimization with expert tips, strategies, and actionable insights to improve your rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 backdrop-blur-xl rounded-3xl p-8 border border-red-500/20">
            <h2 className="text-2xl font-black text-white mb-6">⚡ Quick SEO Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Tips Grid */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {seoTips.map((tip, index) => (
              <div
                key={tip.id}
                className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                  {/* Left - Image */}
                  <div className="md:col-span-2">
                    <Link href={tip.link} className="block relative aspect-video rounded-2xl overflow-hidden group">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </Link>
                  </div>

                  {/* Right - Content */}
                  <div className="md:col-span-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span>{tip.date}</span>
                      <span>•</span>
                      <span>{tip.readTime}</span>
                    </div>

                    <Link href={tip.link}>
                      <h3 className="text-3xl font-black text-white mb-4 hover:text-red-500 transition-colors">
                        {tip.title}
                      </h3>
                    </Link>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {tip.excerpt}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-white uppercase mb-3">Key Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tip.tips.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={tip.link}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                      Read Full Article
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Need Professional SEO Help?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let our experts optimize your website for better rankings and organic traffic
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/services/seo"
              className="px-10 py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              SEO Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOTipsPage;