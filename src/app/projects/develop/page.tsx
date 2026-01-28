'use client';

import React from 'react';
import Link from 'next/link';

const DevelopmentProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'MERN Stack E-commerce Platform',
      category: 'Full-Stack Development',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      image: '🛒',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Order Management'],
      description: 'Built a complete e-commerce platform with shopping cart, payment gateway integration, and comprehensive admin panel.',
      link: '/projects/mern-ecommerce',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Next.js Corporate Website',
      category: 'Frontend Development',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: '⚡',
      features: ['Server-Side Rendering', 'SEO Optimized', 'Fast Performance', 'Responsive Design'],
      description: 'Developed high-performance corporate website with Next.js featuring SSR, dynamic routing, and optimized SEO.',
      link: '/projects/nextjs-corporate',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'WordPress E-commerce Site',
      category: 'CMS Development',
      tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      image: '🎨',
      features: ['Custom Theme', 'WooCommerce Integration', 'Payment Gateway', 'Mobile Responsive'],
      description: 'Custom WordPress theme with WooCommerce integration, payment systems, and inventory management.',
      link: '/projects/wordpress-shop',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'React Admin Dashboard',
      category: 'Frontend Development',
      tech: ['React', 'Redux', 'Chart.js', 'Material-UI'],
      image: '📊',
      features: ['Real-time Analytics', 'User Management', 'Interactive Charts', 'Role-based Access'],
      description: 'Built interactive admin dashboard with React, Redux for state management, and Chart.js for data visualization.',
      link: '/projects/react-dashboard',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Node.js REST API',
      category: 'Backend Development',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: '🔌',
      features: ['RESTful API', 'JWT Authentication', 'API Documentation', 'Error Handling'],
      description: 'Developed scalable REST API with Node.js, Express, and MongoDB with JWT authentication.',
      link: '/projects/nodejs-api',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      category: 'Full-Stack Development',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: '💬',
      features: ['Real-time Messaging', 'Group Chats', 'File Sharing', 'Online Status'],
      description: 'Built real-time chat application using Socket.io for instant messaging with group chat functionality.',
      link: '/projects/chat-app',
      github: '#',
      demo: '#',
    },
    {
      id: 7,
      title: 'Task Management System',
      category: 'Full-Stack Development',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      image: '✅',
      features: ['Task Assignment', 'Team Collaboration', 'Progress Tracking', 'Notifications'],
      description: 'Project management tool with task assignment, team collaboration, and real-time progress tracking.',
      link: '/projects/task-manager',
      github: '#',
      demo: '#',
    },
    {
      id: 8,
      title: 'Portfolio Website Builder',
      category: 'Web Application',
      tech: ['React', 'Firebase', 'Material-UI', 'Drag & Drop'],
      image: '🎨',
      features: ['Drag & Drop Builder', 'Template Library', 'Custom Domains', 'SEO Tools'],
      description: 'Web-based portfolio builder allowing users to create professional portfolios with drag-and-drop interface.',
      link: '/projects/portfolio-builder',
      github: '#',
      demo: '#',
    },
    {
      id: 9,
      title: 'Booking Management System',
      category: 'Full-Stack Development',
      tech: ['MERN Stack', 'Stripe', 'Calendar API', 'Email'],
      image: '📅',
      features: ['Online Booking', 'Payment Processing', 'Email Notifications', 'Calendar Sync'],
      description: 'Complete booking system for service businesses with Stripe payment integration and automated emails.',
      link: '/projects/booking-system',
      github: '#',
      demo: '#',
    },
  ];

  const stats = [
    { number: '150+', label: 'Development Projects' },
    { number: '50+', label: 'MERN Stack Apps' },
    { number: '80+', label: 'Next.js Sites' },
    { number: '100+', label: 'WordPress Sites' },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'WordPress', icon: '📝' },
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
              Development
              <span className="block bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Explore my portfolio of web development projects built with MERN Stack, Next.js, React, WordPress, and modern technologies.
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

      {/* Tech Stack Section */}
      <section className="relative py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Technologies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              Tech Stack I Use
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl">{tech.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image/Icon */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl sm:text-8xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <Link
                      href={project.link}
                      className="flex-1 px-3 sm:px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white text-xs sm:text-sm font-semibold text-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                    >
                      View Details
                    </Link>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-xs sm:text-sm font-semibold hover:border-red-500/50 transition-all"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Need a Developer?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Let&apos;s Build Your Next Project
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
            Ready to turn your idea into reality? Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-bold text-white text-sm sm:text-base hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/services/web-development"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-full font-bold text-white text-sm sm:text-base border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProjectsPage;