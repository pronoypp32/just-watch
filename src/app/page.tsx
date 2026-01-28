'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [activeSkillTab, setActiveSkillTab] = useState<'marketing' | 'advertising'>('marketing');

  // Typing effect for titles
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Web Developer',
    'MERN Stack Developer',
    'SEO Expert',
    'Digital Marketer',
    'WordPress Developer'
  ];

  // Typing animation effect
  React.useEffect(() => {
    const currentFullText = titles[currentTitle];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitle]);

  const services = [
    { title: 'Web Development', count: '150+', label: 'Projects' },
    { title: 'SEO Optimization', count: '120+', label: 'Projects' },
    { title: 'Digital Marketing', count: '200+', label: 'Projects' },
    { title: 'WordPress Sites', count: '100+', label: 'Projects' },
    { title: 'MERN Stack Web Apps', count: '80+', label: 'Projects' },
    { title: 'GMB SEO', count: '221+', label: 'Projects' },
  ];

  const stats = [
    { number: '05', label: 'Years of Experience', description: 'Delivering exceptional web development, SEO, and digital marketing solutions to help businesses grow online' },
    { number: '500+', label: 'Project Complete' },
    { number: '450+', label: 'Satisfied Clients' },
    { number: '98%', label: 'Success Rate' },
  ];

  const marketingSkills = [
    { name: 'SEO Strategy', percentage: 95 },
    { name: 'Content Marketing', percentage: 90 },
    { name: 'Social Media', percentage: 85 },
    { name: 'Analytics', percentage: 88 },
  ];

  const developmentSkills = [
    { name: 'MERN Stack', percentage: 95 },
    { name: 'Next.js & React', percentage: 98 },
    { name: 'WordPress Development', percentage: 92 },
    { name: 'Responsive Design', percentage: 100 },
  ];

  const advertisingSkills = [
    { name: 'Google Ads', percentage: 100 },
    { name: 'Facebook Ads', percentage: 95 },
    { name: 'Email Marketing', percentage: 90 },
    { name: 'Conversion Rate', percentage: 85 },
  ];

  const experiences = [
    { role: 'Digital Marketer', company: 'Soft Tech (2 Years)', title: 'SEO Specialist', description: 'Led comprehensive SEO campaigns and digital marketing strategies for enterprise clients' },
    { role: 'Growth Hacker', company: 'ModernTech (3 Years)', title: 'Marketing Manager', description: 'Managed multi-channel marketing campaigns and achieved 200% ROI growth' },
  ];

  const education = [
    { title: 'Digital Marketing', years: '2018-2020', description: 'Advanced certification in digital marketing and SEO optimization strategies' },
    { title: 'Content Strategy', years: '2016-2018', description: 'Specialized training in content marketing and social media management' },
    { title: 'SEO Analytics', years: '2015-2016', description: 'Comprehensive course in SEO analytics and data-driven marketing' },
    { title: 'PPC Advertising', years: '2020-2022', description: 'Expert certification in Google Ads and Facebook advertising campaigns' },
  ];

  const latestWorks = [
    { number: '01', title: 'MERN Stack Development', description: 'Built full-stack web applications using MongoDB, Express, React, and Node.js with modern architecture' },
    { number: '02', title: 'Next.js & React Projects', description: 'Developed high-performance websites using Next.js with server-side rendering and optimized SEO' },
    { number: '03', title: 'WordPress Solutions', description: 'Created custom WordPress themes and plugins for businesses with e-commerce integration' },
    { number: '04', title: 'SEO & Digital Marketing', description: 'Increased organic traffic by 300% through strategic SEO and comprehensive digital marketing campaigns' },
  ];

  const portfolioItems = [
    { title: 'MERN Stack App', category: 'Full-Stack Development', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop' },
    { title: 'Next.js Website', category: 'React & Next.js', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop' },
    { title: 'WordPress Site', category: 'CMS Development', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop' },
    { title: 'SEO Campaign', category: 'Search Optimization', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop' },
    { title: 'Digital Marketing', category: 'Brand Growth', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&auto=format&fit=crop' },
  ];

  const testimonials = [
    { name: 'John Smith', role: 'CEO, TechCorp', quote: 'Outstanding SEO results! Our organic traffic increased by 250% in just 6 months. Highly recommended!', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop' },
    { name: 'Sarah Johnson', role: 'Marketing Director', quote: 'The social media campaigns delivered exceptional ROI. Our brand engagement skyrocketed!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop' },
  ];

  const blogPosts = [
    { date: '24 Jan 2026', category: 'SEO Tips', title: 'Advanced SEO Strategies for 2026', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop' },
    { date: '22 Jan 2026', category: 'Marketing', title: 'Social Media Marketing Trends', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop' },
    { date: '20 Jan 2026', category: 'Content', title: 'Content Strategy That Converts', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop' },
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
        
        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section - Exact Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1 animate-[fadeInLeft_1s_ease-out]">
              <div className="space-y-6">
                {/* HELLO */}
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                  HELLO
                </h3>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    I am Dibyendu 
                  </h1>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="inline-block min-w-[300px] md:min-w-[400px]">
                      <span className="text-red-500">
                        {displayedText}
                      </span>
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
                Full-Stack Web Developer & Digital Marketing Expert. I specialize in building modern web applications using MERN Stack, Next.js, WordPress, and delivering strategic SEO & marketing solutions.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 group"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image with Text Overlay */}
            <div className="relative order-1 lg:order-2 animate-[fadeInRight_1s_ease-out]">
              <div className="relative">
                {/* Image Container */}
                <div className="relative w-full aspect-[3/3] max-w-lg mx-auto lg:ml-auto">
                  <img
                    src="/images/hero.png"
                    alt="Dibendu Mondal - SEO & Digital Marketing Expert"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Cards Row */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                  {service.count}
                </p>
                <p className="text-xs md:text-sm text-gray-400">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent mb-4">
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

      {/* Skills Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">My Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                </div>
                <h2 className="text-3xl font-black text-white ml-6">Development Skills</h2>
              </div>
              <div className="space-y-6">
                {developmentSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <h6 className="text-sm font-bold text-white uppercase tracking-wider">{skill.name}</h6>
                      <span className="text-sm font-bold text-pink-500">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-red-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                </div>
                <h2 className="text-3xl font-black text-white ml-6">Marketing Skills</h2>
              </div>
              <div className="space-y-6">
                {marketingSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <h6 className="text-sm font-bold text-white uppercase tracking-wider">{skill.name}</h6>
                      <span className="text-sm font-bold text-pink-500">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-red-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Service Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">Latest Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Building Digital Solutions That Matter
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Expert web development, SEO, and digital marketing services providing comprehensive solutions to help businesses succeed online
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {latestWorks.map((work, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                      {work.number}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{work.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{work.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
                  alt="Digital Marketing Services"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">Education & Experience</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Empowering Creativity Through Experience
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Comprehensive training and hands-on experience in web development, MERN Stack, SEO optimization, and business growth strategies
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                <h2 className="text-3xl font-black text-white ml-6">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-white/10 pb-8 last:pb-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                    <h4 className="text-lg font-bold text-white mb-1">{edu.title}</h4>
                    <h3 className="text-2xl font-black bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent mb-3">
                      {edu.years}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                <h2 className="text-3xl font-black text-white ml-6">Experiences</h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">{exp.role}</span>
                    <h2 className="text-2xl font-black text-white mt-2 mb-1">{exp.company}</h2>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent mb-4">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">My Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Recent Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {portfolioItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-pink-500">{item.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative">
                <div className="absolute top-8 right-8">
                  <svg className="w-12 h-12 text-pink-500/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white text-lg leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Elevate Your Brand with Me
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Let&apos;s discuss how we can achieve your marketing goals together
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">Blog and News</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Latest Insights & Tips
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="text-pink-500">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors mb-4">
                    {post.title}
                  </h3>
                  <span className="text-pink-500 font-semibold text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;