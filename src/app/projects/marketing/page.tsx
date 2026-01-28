'use client';

import React from 'react';
import Link from 'next/link';

const MarketingProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Social Media Growth Campaign',
      category: 'Social Media Marketing',
      client: 'Tech Startup',
      image: '📱',
      duration: '8 Months',
      platforms: ['Instagram', 'LinkedIn', 'Twitter', 'Facebook'],
      results: [
        '500K+ New Followers',
        '10M+ Total Impressions',
        '45% Average Engagement Rate',
        '$500K Revenue from Social'
      ],
      metrics: {
        followers: { before: '50K', after: '550K' },
        engagement: { before: '2%', after: '45%' },
        revenue: { before: '$50K', after: '$550K' }
      },
      description: 'Built engaged community across multiple social platforms with viral content strategy, influencer partnerships, and targeted advertising.',
      services: ['Content Creation', 'Community Management', 'Paid Social Ads', 'Influencer Marketing'],
      link: '/projects/social-growth',
    },
    {
      id: 2,
      title: 'Content Marketing Empire',
      category: 'Content Marketing',
      client: 'SaaS Company',
      image: '📝',
      duration: '12 Months',
      platforms: ['Blog', 'YouTube', 'Podcast', 'LinkedIn'],
      results: [
        '1M+ Monthly Blog Views',
        '50K+ Qualified Leads',
        '200+ Published Articles',
        '$2M+ in Attributed Revenue'
      ],
      metrics: {
        traffic: { before: '100K/month', after: '1.2M/month' },
        leads: { before: '500/month', after: '5000/month' },
        revenue: { before: '$200K/month', after: '$2.2M/month' }
      },
      description: 'Created comprehensive content marketing strategy with blog, video, and podcast content driving massive lead generation.',
      services: ['Content Strategy', 'Blog Writing', 'Video Production', 'Distribution'],
      link: '/projects/content-empire',
    },
    {
      id: 3,
      title: 'PPC Campaign Excellence',
      category: 'PPC Advertising',
      client: 'E-commerce Store',
      image: '💰',
      duration: '6 Months',
      platforms: ['Google Ads', 'Facebook Ads', 'Instagram Ads'],
      results: [
        '600% Return on Ad Spend',
        '$5M+ Revenue Generated',
        '$3.50 Average CPA',
        '2500+ Conversions/Month'
      ],
      metrics: {
        roas: { before: '2x', after: '6x' },
        revenue: { before: '$500K', after: '$5.5M' },
        cpa: { before: '$25', after: '$3.50' }
      },
      description: 'Managed high-performing PPC campaigns across Google and social platforms with advanced targeting and optimization.',
      services: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'Retargeting'],
      link: '/projects/ppc-excellence',
    },
    {
      id: 4,
      title: 'Email Marketing Automation',
      category: 'Email Marketing',
      client: 'Online Education',
      image: '📧',
      duration: '5 Months',
      platforms: ['Email', 'Marketing Automation'],
      results: [
        '55% Average Open Rate',
        '12% Click-Through Rate',
        '40% Conversion Rate',
        '$800K+ Revenue from Email'
      ],
      metrics: {
        openRate: { before: '18%', after: '55%' },
        conversion: { before: '8%', after: '40%' },
        revenue: { before: '$100K', after: '$900K' }
      },
      description: 'Built automated email nurture sequences with personalization and segmentation driving high engagement and conversions.',
      services: ['Email Automation', 'Segmentation', 'A/B Testing', 'Copywriting'],
      link: '/projects/email-automation',
    },
    {
      id: 5,
      title: 'Influencer Marketing Campaign',
      category: 'Influencer Marketing',
      client: 'Beauty Brand',
      image: '💄',
      duration: '4 Months',
      platforms: ['Instagram', 'TikTok', 'YouTube'],
      results: [
        '5M+ Total Reach',
        '80K+ Product Sales',
        '15% Conversion Rate',
        '50+ Influencer Partnerships'
      ],
      metrics: {
        reach: { before: '500K', after: '5.5M' },
        sales: { before: '5K units', after: '85K units' },
        roi: { before: '2x', after: '8x' }
      },
      description: 'Partnered with micro and macro influencers to launch new product line with viral campaign generating massive sales.',
      services: ['Influencer Outreach', 'Campaign Management', 'Content Creation', 'Performance Tracking'],
      link: '/projects/influencer-campaign',
    },
    {
      id: 6,
      title: 'Brand Awareness Campaign',
      category: 'Brand Marketing',
      client: 'Startup Launch',
      image: '🚀',
      duration: '6 Months',
      platforms: ['Multi-Channel'],
      results: [
        '10M+ Brand Impressions',
        '80% Brand Awareness Growth',
        '100K+ Social Mentions',
        'Featured in Top Publications'
      ],
      metrics: {
        awareness: { before: '15%', after: '95%' },
        impressions: { before: '500K', after: '10.5M' },
        mentions: { before: '1K', after: '101K' }
      },
      description: 'Launched comprehensive brand awareness campaign with PR, content marketing, and paid advertising across channels.',
      services: ['Brand Strategy', 'PR Campaign', 'Content Marketing', 'Multi-Channel Ads'],
      link: '/projects/brand-awareness',
    },
    {
      id: 7,
      title: 'Video Marketing Success',
      category: 'Video Marketing',
      client: 'Tech Product',
      image: '🎥',
      duration: '7 Months',
      platforms: ['YouTube', 'Facebook', 'Instagram', 'TikTok'],
      results: [
        '20M+ Video Views',
        '200K+ Channel Subscribers',
        '8% Average CTR',
        '$1.5M+ Revenue'
      ],
      metrics: {
        views: { before: '1M', after: '21M' },
        subscribers: { before: '10K', after: '210K' },
        revenue: { before: '$100K', after: '$1.6M' }
      },
      description: 'Created viral video marketing campaign with product demos, tutorials, and customer success stories.',
      services: ['Video Production', 'YouTube SEO', 'Video Ads', 'Distribution Strategy'],
      link: '/projects/video-marketing',
    },
    {
      id: 8,
      title: 'Conversion Rate Optimization',
      category: 'CRO',
      client: 'E-commerce Platform',
      image: '📈',
      duration: '5 Months',
      platforms: ['Website Optimization'],
      results: [
        '180% Conversion Rate Increase',
        '$3M+ Additional Revenue',
        '45% Cart Abandonment Reduction',
        '25% AOV Increase'
      ],
      metrics: {
        conversion: { before: '1.2%', after: '3.4%' },
        aov: { before: '$85', after: '$106' },
        abandonment: { before: '70%', after: '39%' }
      },
      description: 'Comprehensive conversion rate optimization with A/B testing, UX improvements, and checkout optimization.',
      services: ['A/B Testing', 'UX Optimization', 'Analytics', 'Funnel Optimization'],
      link: '/projects/cro-success',
    },
    {
      id: 9,
      title: 'Affiliate Marketing Program',
      category: 'Affiliate Marketing',
      client: 'Digital Product',
      image: '🤝',
      duration: '8 Months',
      platforms: ['Affiliate Network'],
      results: [
        '500+ Active Affiliates',
        '$2M+ Affiliate Revenue',
        '10K+ Sales from Affiliates',
        '25% Commission Structure'
      ],
      metrics: {
        affiliates: { before: '50', after: '550' },
        revenue: { before: '$200K', after: '$2.2M' },
        sales: { before: '1K', after: '11K' }
      },
      description: 'Built and scaled affiliate marketing program with recruitment, training, and performance optimization.',
      services: ['Affiliate Recruitment', 'Program Management', 'Commission Structure', 'Performance Tracking'],
      link: '/projects/affiliate-program',
    },
  ];

  const stats = [
    { number: '350+', label: 'Marketing Projects' },
    { number: '$100M+', label: 'Revenue Generated' },
    { number: '50M+', label: 'People Reached' },
    { number: '450+', label: 'Happy Clients' },
  ];

  const marketingChannels = [
    { name: 'Social Media', icon: '📱' },
    { name: 'Content Marketing', icon: '📝' },
    { name: 'PPC Advertising', icon: '💰' },
    { name: 'Email Marketing', icon: '📧' },
    { name: 'Influencer Marketing', icon: '⭐' },
    { name: 'Video Marketing', icon: '🎥' },
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl">
            <Link href="/projects" className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider hover:underline">
              ← Back to All Projects
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
              Marketing
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Explore our portfolio of successful digital marketing campaigns that delivered exceptional ROI and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="relative py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              Marketing Channels We Master
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {marketingChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl">{channel.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{channel.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500"
              >
                {/* Project Header */}
                <div className="relative h-32 sm:h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl sm:text-7xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-xl text-white text-xs font-semibold rounded-full">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-red-500 font-semibold mb-2">{project.client}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.platforms.map((platform, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-white/5 rounded-xl p-3 sm:p-4 mb-4">
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3">Campaign Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study Link */}
                  <Link
                    href={project.link}
                    className="block w-full px-4 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white text-xs sm:text-sm font-semibold text-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                  >
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Ready to Grow?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Let&apos;s Create Your Marketing Success
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
            Ready to scale your business? Let&apos;s discuss your marketing goals and create a winning strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white text-sm sm:text-base hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Campaign
            </Link>
            <Link
              href="/services"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white text-sm sm:text-base border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              View Marketing Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingProjectsPage;