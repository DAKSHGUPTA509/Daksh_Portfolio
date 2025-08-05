import React from 'react';
import { portfolioData } from '../mock/portfolioData';
import { Heart, Mail, Phone, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#232323] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Content */}
        <div className="py-[95.2px] grid grid-cols-1 lg:grid-cols-12 gap-[47.6px]">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="font-mono text-[24px] font-normal text-white uppercase tracking-[0.05em]"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              {personal.name}
            </div>
            
            <p 
              className="font-normal text-[rgba(255,255,255,0.8)] leading-[1.33] max-w-lg"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.8vw, 18px)'
              }}
            >
              Machine Learning & Data Science Engineer passionate about transforming data into actionable insights. 
              Currently pursuing advanced AI research while building practical ML solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { label: 'PROJECTS', value: '06+' },
                { label: 'CERTIFICATIONS', value: '05+' },
                { label: 'ARTICLES', value: '3K+' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="font-normal text-white leading-none mb-1"
                    style={{ 
                      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                      fontSize: 'clamp(20px, 4vw, 32px)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="font-mono text-[8px] font-normal text-[rgba(255,255,255,0.7)] uppercase tracking-[0.05em]"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h3 
              className="font-mono text-[14px] font-normal text-white uppercase tracking-[0.05em]"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              QUICK LINKS
            </h3>
            
            <nav className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block font-normal text-[rgba(255,255,255,0.8)] hover:text-[#38FF62] transition-colors duration-200"
                  style={{ 
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                    fontSize: 'clamp(14px, 1.8vw, 16px)'
                  }}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 
              className="font-mono text-[14px] font-normal text-white uppercase tracking-[0.05em]"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              GET IN TOUCH
            </h3>
            
            <div className="space-y-4">
              {[
                { icon: Mail, text: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, text: personal.phone, href: `tel:${personal.phone}` }
              ].map(({ icon: Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center space-x-3 text-[rgba(255,255,255,0.8)] hover:text-[#38FF62] transition-colors duration-200"
                >
                  <Icon size={16} />
                  <span 
                    style={{ 
                      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                      fontSize: 'clamp(14px, 1.8vw, 16px)'
                    }}
                  >
                    {text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Linkedin, href: `https://${personal.linkedin}`, label: 'LinkedIn' },
                { icon: Github, href: `https://${personal.github}`, label: 'GitHub' }
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[rgba(255,255,255,0.2)] hover:border-[#38FF62] hover:bg-[rgba(56,255,98,0.1)] transition-all duration-200 group"
                  aria-label={label}
                >
                  <Icon size={20} className="text-[rgba(255,255,255,0.8)] group-hover:text-[#38FF62]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="flex items-center space-x-2">
            <span 
              className="font-normal text-[rgba(255,255,255,0.7)]"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(12px, 1.5vw, 14px)'
              }}
            >
              © 2025 {personal.name}. Made with
            </span>
            <Heart size={14} className="text-[#38FF62] fill-current" />
            <span 
              className="font-normal text-[rgba(255,255,255,0.7)]"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontSize: 'clamp(12px, 1.5vw, 14px)'
              }}
            >
              for data science
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span 
              className="font-mono text-[10px] font-normal text-[rgba(255,255,255,0.7)] uppercase tracking-[0.05em]"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              CURRENTLY AVAILABLE FOR OPPORTUNITIES
            </span>
            
            <button
              onClick={scrollToTop}
              className="p-2 border border-[rgba(255,255,255,0.2)] hover:border-[#38FF62] hover:bg-[rgba(56,255,98,0.1)] transition-all duration-200 group"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="text-[rgba(255,255,255,0.8)] group-hover:text-[#38FF62]" />
            </button>
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '47.6px 47.6px'
          }}
        >
        </div>
      </div>
    </footer>
  );
};

export default Footer;