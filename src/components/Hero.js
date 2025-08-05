import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Download, Sparkles } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const { personal, objective } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#F2F2F2] flex items-center overflow-hidden">
      
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating data points */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#38FF62] rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Mouse follower effect */}
        <div
          className="absolute w-32 h-32 bg-gradient-radial from-[#38FF62]/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `translate(0, ${scrollY * 0.1}px)`
          }}
        />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 py-[95.2px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[47.6px] items-center">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-[47.6px]">
            
            {/* Animated label with sparkle */}
            <div className="flex items-center space-x-4">
              <Sparkles size={20} className="text-[#38FF62] animate-pulse" />
              <div 
                className="font-mono text-[10px] md:text-[18px] font-normal text-[#232323] uppercase tracking-[0.05em] animate-fadeInUp"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <TypingAnimation texts={["MACHINE LEARNING ENGINEER", "DATA SCIENTIST", "AI RESEARCHER"]} />
              </div>
            </div>

            {/* Enhanced Hero Title with gradient */}
            <div className="relative">
              <h1 
                className="font-normal text-[#232323] uppercase leading-none animate-fadeInUp relative z-10"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(60px, 15vw, 280px)',
                  animationDelay: '0.2s',
                  textShadow: '0 0 30px rgba(56, 255, 98, 0.1)'
                }}
              >
                {personal.name}
              </h1>
              
              {/* Glowing accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#38FF62] via-transparent to-[#38FF62] opacity-50 animate-pulse" />
              
              {/* 3D text shadow effect */}
              <div 
                className="absolute inset-0 font-normal text-[rgba(35,35,35,0.1)] uppercase leading-none -z-10"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(60px, 15vw, 280px)',
                  transform: 'translate(4px, 4px)'
                }}
              >
                {personal.name}
              </div>
            </div>

            {/* Enhanced subtitle with typing effect */}
            <div className="relative">
              <p 
                className="font-normal text-[#232323] leading-[1.07] max-w-4xl animate-fadeInUp"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(32px, 6vw, 84px)',
                  animationDelay: '0.4s'
                }}
              >
                Transforming{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#38FF62] to-[#2AE052] bg-clip-text text-transparent">
                    data
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#38FF62] to-[#2AE052] opacity-20 blur-sm">
                    data
                  </span>
                </span>
                {' '}into actionable insights.
              </p>
            </div>

            {/* Enhanced description */}
            <p 
              className="font-normal text-[#232323] leading-[1.33] max-w-3xl animate-fadeInUp relative"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                animationDelay: '0.6s'
              }}
            >
              {objective}
              <span className="absolute -right-4 top-0 w-2 h-2 bg-[#38FF62] rounded-full animate-ping" />
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-[23.8px] animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden bg-[#38FF62] border-none px-8 py-4 font-mono text-[12px] font-normal text-[#232323] uppercase cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center tracking-[0.05em] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(56,255,98,0.4)]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2AE052] to-[#38FF62] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <Sparkles size={16} className="mr-2 z-10 group-hover:rotate-180 transition-transform duration-300" />
                <span className="z-10">VIEW PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-transparent border-2 border-[#232323] px-8 py-4 font-mono text-[12px] font-normal text-[#232323] uppercase cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center tracking-[0.05em] hover:border-[#38FF62] hover:text-[#38FF62] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(56,255,98,0.2)]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>GET IN TOUCH</span>
              </button>

              {/* Download Resume Button */}
              <button
                className="group relative overflow-hidden bg-transparent border border-[rgba(35,35,35,0.3)] px-6 py-3 font-mono text-[10px] font-normal text-[rgba(35,35,35,0.7)] uppercase cursor-pointer transition-all duration-300 min-h-[44px] flex items-center justify-center tracking-[0.05em] hover:border-[#38FF62] hover:text-[#38FF62] hover:bg-[rgba(56,255,98,0.05)]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                <Download size={14} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>DOWNLOAD CV</span>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Contact Info */}
          <div className="lg:col-span-4 space-y-[47.6px]">
            
            {/* Enhanced Contact Card */}
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative bg-white border border-[rgba(35,35,35,0.1)] p-6 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(35,35,35,0.15)]">
                
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    className="font-mono text-[14px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    CONTACT INFO
                  </h3>
                  <div className="w-2 h-2 bg-[#38FF62] rounded-full animate-pulse" />
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      icon: Mail, 
                      text: personal.email, 
                      href: `mailto:${personal.email}`,
                      color: '#38FF62'
                    },
                    { 
                      icon: Phone, 
                      text: personal.phone, 
                      href: `tel:${personal.phone}`,
                      color: '#4ECDC4'
                    },
                    { 
                      icon: MapPin, 
                      text: personal.location, 
                      href: null,
                      color: '#FFA726'
                    },
                    { 
                      icon: Linkedin, 
                      text: 'LinkedIn Profile', 
                      href: `https://${personal.linkedin}`,
                      color: '#45B7D1'
                    },
                    { 
                      icon: Github, 
                      text: 'GitHub Profile', 
                      href: `https://${personal.github}`,
                      color: '#AB47BC'
                    }
                  ].map(({ icon: Icon, text, href, color }, index) => (
                    <div key={index} className="group/item flex items-center space-x-3 p-2 hover:bg-[rgba(56,255,98,0.05)] transition-all duration-300 cursor-pointer">
                      <div 
                        className="p-2 transition-all duration-300 group-hover/item:scale-110"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-normal text-[#232323] hover:text-[#38FF62] transition-colors duration-300 flex-1"
                          style={{ 
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            fontSize: 'clamp(14px, 1.8vw, 16px)'
                          }}
                        >
                          {text}
                        </a>
                      ) : (
                        <span
                          className="font-normal text-[#232323] flex-1"
                          style={{ 
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            fontSize: 'clamp(14px, 1.8vw, 16px)'
                          }}
                        >
                          {text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="mt-6 pt-4 border-t border-[rgba(35,35,35,0.1)]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#38FF62] rounded-full animate-pulse" />
                    <span 
                      className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      AVAILABLE FOR OPPORTUNITIES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="flex justify-center pt-[95.2px] animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center space-y-4 text-[#232323] hover:text-[#38FF62] transition-all duration-300"
          >
            <span 
              className="font-mono text-[10px] uppercase tracking-[0.05em] group-hover:scale-110 transition-transform duration-300"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              DISCOVER MORE
            </span>
            
            <div className="relative">
              <ArrowDown size={24} className="animate-bounce group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#38FF62] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            
            {/* Scroll progress indicator */}
            <div className="w-px h-16 bg-gradient-to-b from-[#38FF62] to-transparent opacity-50" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;