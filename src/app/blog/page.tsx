'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'seo', label: 'SEO Tips' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'social', label: 'Social Media' },
    { id: 'content', label: 'Content Strategy' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Advanced SEO Strategies for 2026',
      category: 'seo',
      excerpt: 'Discover the latest SEO techniques that will dominate search rankings in 2026 and beyond.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop',
      date: 'January 24, 2026',
      author: 'Tania Mondal',
      readTime: '5 min read',
      link: '/blog/advanced-seo-strategies-2026',
    },
    {
      id: 2,
      title: 'Social Media Marketing Trends',
      category: 'social',
      excerpt: 'Stay ahead of the curve with these emerging social media marketing trends that drive engagement.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop',
      date: 'January 22, 2026',
      author: 'Tania Mondal',
      readTime: '4 min read',
      link: '/blog/social-media-trends',
    },
    {
      id: 3,
      title: 'Content Strategy That Converts',
      category: 'content',
      excerpt: 'Learn how to create content that not only attracts visitors but converts them into customers.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop',
      date: 'January 20, 2026',
      author: 'Tania Mondal',
      readTime: '6 min read',
      link: '/blog/content-strategy-converts',
    },
    {
      id: 4,
      title: 'The Complete Guide to Local SEO',
      category: 'seo',
      excerpt: 'Master local SEO and dominate search results in your geographic area with this comprehensive guide.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      date: 'January 18, 2026',
      author: 'Tania Mondal',
      readTime: '8 min read',
      link: '/blog/local-seo-guide',
    },
    {
      id: 5,
      title: 'Email Marketing Best Practices',
      category: 'marketing',
      excerpt: 'Boost your email campaign performance with these proven best practices and tactics.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop',
      date: 'January 16, 2026',
      author: 'Tania Mondal',
      readTime: '5 min read',
      link: '/blog/email-marketing-best-practices',
    },
    {
      id: 6,
      title: 'Instagram Growth Hacks 2026',
      category: 'social',
      excerpt: 'Grow your Instagram following organically with these effective strategies and growth hacks.',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&auto=format&fit=crop',
      date: 'January 14, 2026',
      author: 'Tania Mondal',
      readTime: '4 min read',
      link: '/blog/instagram-growth-hacks',
    },
    {
      id: 7,
      title: 'Technical SEO Checklist',
      category: 'seo',
      excerpt: 'Ensure your website is technically optimized with this comprehensive SEO checklist.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      date: 'January 12, 2026',
      author: 'Tania Mondal',
      readTime: '7 min read',
      link: '/blog/technical-seo-checklist',
    },
    {
      id: 8,
      title: 'Building a Content Calendar',
      category: 'content',
      excerpt: 'Plan and organize your content effectively with a strategic content calendar system.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop',
      date: 'January 10, 2026',
      author: 'Tania Mondal',
      readTime: '5 min read',
      link: '/blog/content-calendar',
    },
    {
      id: 9,
      title: 'PPC Advertising ROI Optimization',
      category: 'marketing',
      excerpt: 'Maximize your return on investment with these PPC advertising optimization strategies.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
      date: 'January 8, 2026',
      author: 'Tania Mondal',
      readTime: '6 min read',
      link: '/blog/ppc-roi-optimization',
    },
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const featuredPost = blogPosts[0];

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
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Our Blog</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              Marketing Insights &
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Expert Tips
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Stay updated with the latest trends, strategies, and insights in digital marketing, SEO, and online growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white">Featured Post</h2>
          </div>
          <Link
            href={featuredPost.link}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500"
          >
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider mb-4">
                {filters.find(f => f.id === featuredPost.category)?.label}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-red-500 transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={post.link}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase">
                      {filters.find(f => f.id === post.category)?.label}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Stay Updated</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get the latest marketing insights, SEO tips, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;