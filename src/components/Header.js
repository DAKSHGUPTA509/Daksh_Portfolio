import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' }, 
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      {/* Enhanced Grid Background */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#F2F2F2] opacity-100 pointer-events-none z-[-1]" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(35, 35, 35, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(35, 35, 35, 0.03) 1px, transparent 1px)',
             backgroundSize: '47.6px 47.6px'
           }}>
      </div>

      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-[rgba(242,242,242,0.95)] backdrop-blur-lg border-b border-[rgba(56,255,98,0.3)] shadow-[0_4px_32px_rgba(35,35,35,0.1)]' 
            : 'bg-[#F2F2F2] border-b border-[#232323]'
          }
        `}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative">
          <div className="flex items-center justify-between h-[95.2px]">
            
            {/* Enhanced Logo */}
            <div 
              className="group cursor-pointer relative"
              onClick={() => scrollToSection('hero')}
            >
              <div className="flex items-center space-x-3">
                <div className={`
                  p-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                  ${scrolled ? 'bg-[rgba(56,255,98,0.1)]' : 'bg-transparent'}
                `}>
                  <Zap 
                    size={20} 
                    className={`
                      transition-all duration-500 group-hover:text-[#38FF62] 
                      ${scrolled ? 'text-[#38FF62] animate-pulse' : 'text-[#232323]'}
                    `} 
                  />
                </div>
                
                <div 
                  className={`
                    font-mono text-[24px] font-normal uppercase tracking-[0.05em] transition-all duration-500
                    ${scrolled 
                      ? 'text-[#38FF62] text-shadow-glow' 
                      : 'text-[#232323] group-hover:text-[#38FF62]'
                    }
                  `}
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  DAKSH.GUPTA
                </div>
              </div>
              
              {/* Animated underline */}
              <div className={`
                absolute bottom-[-8px] left-0 h-0.5 bg-[#38FF62] transition-all duration-500 
                ${scrolled ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'}
              `} />
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(({ label, id }, index) => (
                <button
                  key={id}
                  className={`
                    group relative font-mono text-[12px] font-normal uppercase tracking-[0.05em] 
                    px-4 py-2 transition-all duration-300 overflow-hidden
                    ${scrolled 
                      ? 'text-[#232323] hover:text-[#38FF62]' 
                      : 'text-[#232323] hover:text-[#38FF62]'
                    }
                  `}
                  style={{ 
                    fontFamily: 'ui-monospace, monospace',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => scrollToSection(id)}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-[rgba(56,255,98,0.1)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  {/* Text with hover effect */}
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {label}
                  </span>
                  
                  {/* Dot indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#38FF62] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <button
              className={`
                md:hidden p-3 transition-all duration-300 hover:scale-110 hover:rotate-180
                ${scrolled ? 'text-[#38FF62]' : 'text-[#232323] hover:text-[#38FF62]'}
              `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="animate-spin" />
                ) : (
                  <Menu size={24} />
                )}
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#38FF62] blur-lg opacity-0 hover:opacity-30 transition-opacity duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`
          md:hidden transition-all duration-500 overflow-hidden
          ${isMenuOpen 
            ? 'max-h-screen opacity-100 border-t border-[rgba(56,255,98,0.3)]' 
            : 'max-h-0 opacity-0'
          }
        `}>
          <div className="bg-[rgba(242,242,242,0.98)] backdrop-blur-lg">
            <nav className="flex flex-col py-6 px-6 space-y-2">
              {navItems.map(({ label, id }, index) => (
                <button
                  key={id}
                  className={`
                    group relative font-mono text-[12px] font-normal uppercase tracking-[0.05em] 
                    text-left py-4 px-4 transition-all duration-300 hover:scale-105 overflow-hidden
                    text-[#232323] hover:text-[#38FF62] animate-fadeInUp
                  `}
                  style={{ 
                    fontFamily: 'ui-monospace, monospace',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => scrollToSection(id)}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(56,255,98,0.1)] to-transparent transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {label}
                    </span>
                    <div className="w-2 h-2 bg-[#38FF62] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Border accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#38FF62] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                </button>
              ))}
              
              {/* Mobile menu footer */}
              <div className="pt-4 mt-4 border-t border-[rgba(35,35,35,0.1)]">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#38FF62] rounded-full animate-pulse" />
                  <span 
                    className="font-mono text-[10px] font-normal text-[rgba(35,35,35,0.7)] uppercase tracking-[0.05em]"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    AVAILABLE FOR OPPORTUNITIES
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Header glow effect */}
        {scrolled && (
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#38FF62] to-transparent animate-pulse" />
        )}
      </header>
    </>
  );
};

export default Header;