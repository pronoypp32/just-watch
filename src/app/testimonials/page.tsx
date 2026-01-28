'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TestimonialsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fiverr' | 'google' | 'upwork'>('all');
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  // Fiverr Reviews
  const fiverrReviews = [
    {
      id: 1,
      platform: 'fiverr',
      name: 'Sarah Mitchell',
      username: '@sarahmitchell',
      country: 'United States',
      flag: '🇺🇸',
      rating: 5,
      review: 'Outstanding work! Dibyendu delivered a fully functional MERN stack application with perfect SEO optimization. The website loads incredibly fast and ranks #1 for our target keywords. Communication was excellent throughout the project.',
      project: 'Full-Stack E-commerce Website',
      date: 'January 2026',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
      orderValue: '$2,500',
      verified: true
    },
    {
      id: 2,
      platform: 'fiverr',
      name: 'James Rodriguez',
      username: '@jamesrod',
      country: 'Canada',
      flag: '🇨🇦',
      rating: 5,
      review: 'Exceptional Next.js developer! Built our company website with amazing animations and perfect mobile responsiveness. The SEO work was phenomenal - organic traffic increased 300% in just 2 months. Highly recommended!',
      project: 'Next.js Corporate Website + SEO',
      date: 'December 2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      orderValue: '$1,800',
      verified: true
    },
    {
      id: 3,
      platform: 'fiverr',
      name: 'Emma Thompson',
      username: '@emmathompson',
      country: 'United Kingdom',
      flag: '🇬🇧',
      rating: 5,
      review: 'Best WordPress developer on Fiverr! Created a stunning e-commerce site with WooCommerce. The custom theme is beautiful, and the Google Ads integration works perfectly. Sales increased by 450% since launch!',
      project: 'WordPress E-commerce + Google Ads',
      date: 'November 2025',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
      orderValue: '$2,200',
      verified: true
    },
    {
      id: 4,
      platform: 'fiverr',
      name: 'Michael Chen',
      username: '@michaelchen',
      country: 'Australia',
      flag: '🇦🇺',
      rating: 5,
      review: 'Incredible digital marketing expert! Set up complete Facebook Ads campaigns that generated 5x ROAS. The landing pages he built convert at 12%. Communication is top-notch and delivery was ahead of schedule.',
      project: 'Facebook Ads + Landing Pages',
      date: 'January 2026',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
      orderValue: '$1,500',
      verified: true
    },
    {
      id: 5,
      platform: 'fiverr',
      name: 'Sophia Martinez',
      username: '@sophiamartinez',
      country: 'Spain',
      flag: '🇪🇸',
      rating: 5,
      review: 'Amazing React developer! Built a complex dashboard with beautiful animations and real-time data. The code is clean, well-documented, and scalable. Best investment for our startup!',
      project: 'React Dashboard Application',
      date: 'December 2025',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop',
      orderValue: '$3,000',
      verified: true
    },
    {
      id: 6,
      platform: 'fiverr',
      name: 'David Wilson',
      username: '@davidwilson',
      country: 'New Zealand',
      flag: '🇳🇿',
      rating: 5,
      review: 'Perfect SEO optimization! Our website now ranks on first page for 15+ competitive keywords. Traffic doubled in 6 weeks. Very professional and knows exactly what he\'s doing.',
      project: 'Complete SEO Optimization Package',
      date: 'November 2025',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
      orderValue: '$1,200',
      verified: true
    }
  ];

  // Google Reviews
  const googleReviews = [
    {
      id: 7,
      platform: 'google',
      name: 'Robert Anderson',
      username: 'Local Guide · 250 reviews',
      rating: 5,
      review: 'Dibyendu transformed our local business with his GMB SEO expertise. We went from page 3 to #1 in local search results within 45 days. Phone calls increased by 200%! His Google Ads management is equally impressive with consistent ROAS above 400%.',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop',
      verified: true,
      helpful: 42
    },
    {
      id: 8,
      platform: 'google',
      name: 'Lisa Chang',
      username: 'Local Guide · 180 reviews',
      rating: 5,
      review: 'Outstanding web developer! Built our company website using Next.js with incredible speed optimization. Lighthouse score is 98/100. The design is modern, the UX is intuitive, and mobile performance is flawless. Worth every penny!',
      date: '3 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop',
      verified: true,
      helpful: 38
    },
    {
      id: 9,
      platform: 'google',
      name: 'Thomas Baker',
      username: 'Google User',
      rating: 5,
      review: 'Best digital marketing consultant I\'ve worked with! Complete social media strategy, content creation, and paid advertising management. Our Instagram following grew from 2K to 25K in 3 months. Engagement rate is consistently above 8%.',
      date: '1 month ago',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop',
      verified: true,
      helpful: 56
    },
    {
      id: 10,
      platform: 'google',
      name: 'Jennifer Taylor',
      username: 'Local Guide · 95 reviews',
      rating: 5,
      review: 'Exceptional MERN stack developer! Created a custom CRM system with React frontend and Node.js backend. Real-time features work perfectly, the database is optimized, and security is top-notch. Delivered on time with excellent documentation.',
      date: '2 months ago',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop',
      verified: true,
      helpful: 31
    },
    {
      id: 11,
      platform: 'google',
      name: 'Mark Robinson',
      username: 'Google User',
      rating: 5,
      review: 'Incredible WordPress expertise! Migrated our entire website, set up WooCommerce with custom functionality, and optimized everything for speed. Site loads in under 2 seconds now. Also implemented successful PPC campaigns that generate quality leads daily.',
      date: '2 months ago',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop',
      verified: true,
      helpful: 29
    },
    {
      id: 12,
      platform: 'google',
      name: 'Amanda Foster',
      username: 'Local Guide · 320 reviews',
      rating: 5,
      review: 'Professional and reliable! Handled our complete digital transformation including website redesign, SEO optimization, and Google My Business setup. Local search visibility improved dramatically. We now get 50+ qualified leads per week through organic search.',
      date: '3 months ago',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop',
      verified: true,
      helpful: 67
    }
  ];

  // Upwork Reviews
  const upworkReviews = [
    {
      id: 13,
      platform: 'upwork',
      name: 'Christopher Evans',
      username: '@chrisevans',
      country: 'United States',
      flag: '🇺🇸',
      rating: 5,
      review: 'Top tier developer! Built a complex React application with Redux state management and Firebase backend. Code quality is exceptional, performance is outstanding. Will definitely hire again for future projects.',
      project: 'React + Firebase Web Application',
      date: 'January 2026',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop',
      budget: '$4,500',
      verified: true
    },
    {
      id: 14,
      platform: 'upwork',
      name: 'Rachel Green',
      username: '@rachelgreen',
      country: 'United Kingdom',
      flag: '🇬🇧',
      rating: 5,
      review: 'Amazing SEO work! Complete technical SEO audit, on-page optimization, and link building strategy. Rankings improved significantly across all target keywords. Traffic increased 280% in 90 days. Highly professional!',
      project: 'Enterprise SEO Services',
      date: 'December 2025',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&auto=format&fit=crop',
      budget: '$3,200',
      verified: true
    }
  ];

  const allReviews = [...fiverrReviews, ...googleReviews, ...upworkReviews];

  const filteredReviews = activeFilter === 'all' 
    ? allReviews 
    : allReviews.filter(review => review.platform === activeFilter);

  const stats = [
    { number: '450+', label: 'Happy Clients', description: 'Delivered exceptional results across web development, SEO, and digital marketing' },
    { number: '500+', label: 'Projects Completed' },
    { number: '4.98', label: 'Average Rating' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const platformStats = [
    { platform: 'Fiverr', icon: '⭐', reviews: '150+', rating: '5.0', color: 'from-green-500 to-emerald-600' },
    { platform: 'Google', icon: '🔍', reviews: '200+', rating: '4.9', color: 'from-blue-500 to-cyan-600' },
    { platform: 'Upwork', icon: '💼', reviews: '100+', rating: '5.0', color: 'from-purple-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center animate-[fadeInUp_1s_ease-out]">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 group transition-colors"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-bold uppercase tracking-wider">Back to Home</span>
            </Link>

            <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">Client Reviews</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              What My Clients
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                Say About Me
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real feedback from satisfied clients across Fiverr, Google, and Upwork. Delivering exceptional web development, SEO, and digital marketing results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent mb-4">
                {stats[0].number}
              </h2>
              <h3 className="text-2xl font-bold text-white mb-3">{stats[0].label}</h3>
              <p className="text-gray-400 leading-relaxed">{stats[0].description}</p>
            </div>
            {stats.slice(1).map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </h2>
                <p className="text-white font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="relative py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformStats.map((platform, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{platform.icon}</span>
                  <span className={`text-xl font-black bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.rating} ★
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{platform.platform}</h3>
                <p className="text-gray-400">{platform.reviews} Reviews</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'fiverr', 'google', 'upwork'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-lg shadow-pink-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter === 'all' ? 'All Reviews' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <div
                key={review.id}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onClick={() => setSelectedReview(review.id)}
              >
                {/* Platform Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  review.platform === 'fiverr' ? 'bg-green-500/20 text-green-400' :
                  review.platform === 'google' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {review.platform}
                </div>

                {/* Verified Badge */}
                {review.verified && (
                  <div className="absolute top-4 left-4 flex items-center space-x-1 text-xs font-bold text-green-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verified</span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start space-x-4 mb-6 mt-8">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-pink-500/50 group-hover:border-pink-500 transition-colors"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-500 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-400">{review.username}</p>
                    {review.platform !== 'google' && (
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <span className="mr-1">{(review as any).flag}</span>
                        {(review as any).country}
                      </p>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-bold text-yellow-400">{review.rating}.0</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4">
                  {review.review}
                </p>

                {/* Project Info */}
                {review.platform !== 'google' && (
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-bold text-pink-500">{(review as any).project}</p>
                    <p className="text-sm text-gray-500">Budget: {(review as any).orderValue || (review as any).budget}</p>
                  </div>
                )}

                {/* Google Helpful */}
                {review.platform === 'google' && (
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <button className="flex items-center space-x-1 hover:text-pink-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>{(review as any).helpful}</span>
                    </button>
                  </div>
                )}

                {/* Date */}
                <p className="text-xs text-gray-500">{review.date}</p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">Ready to Work Together?</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Let's Create Your Success Story
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join 450+ satisfied clients who transformed their digital presence with professional web development, SEO, and marketing services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-pink-500/10 to-red-600/10 backdrop-blur-xl rounded-3xl p-12 border border-pink-500/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Get Weekly Tips & Updates
              </h2>
              <p className="text-gray-400 mb-8">
                Subscribe to receive expert insights on web development, SEO strategies, and digital marketing trends
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;