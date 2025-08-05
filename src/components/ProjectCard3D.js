import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Eye, Code, Database, BarChart3, Brain } from 'lucide-react';

const ProjectCard3D = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Machine Learning': return Brain;
      case 'Computer Vision': return Eye;
      case 'NLP & Machine Learning': return Code;
      case 'Data Analysis': return BarChart3;
      case 'Sports Analytics': return TrendingUp;
      case 'Financial ML': return Database;
      default: return Code;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  const getGradientColor = (category) => {
    switch (category) {
      case 'Machine Learning': return 'from-[#38FF62] to-[#2AE052]';
      case 'Computer Vision': return 'from-[#FF6B6B] to-[#FF5252]';
      case 'NLP & Machine Learning': return 'from-[#4ECDC4] to-[#44B3B9]';
      case 'Data Analysis': return 'from-[#45B7D1] to-[#3A9BC1]';
      case 'Sports Analytics': return 'from-[#FFA726] to-[#FF9800]';
      case 'Financial ML': return 'from-[#AB47BC] to-[#9C27B0]';
      default: return 'from-[#38FF62] to-[#2AE052]';
    }
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div
        className={`
          relative bg-white border border-[rgba(35,35,35,0.1)] overflow-hidden
          transition-all duration-500 ease-out cursor-pointer
          ${isHovered 
            ? 'transform translate-y-[-8px] scale-[1.02] shadow-[0_20px_40px_rgba(35,35,35,0.15)]' 
            : 'transform translate-y-0 scale-100 shadow-[0_4px_20px_rgba(35,35,35,0.1)]'
          }
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? 'translateY(-8px) scale(1.02) rotateX(2deg) rotateY(2deg)' 
            : 'translateY(0) scale(1) rotateX(0) rotateY(0)'
        }}
      >
        {/* Animated background gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${getGradientColor(project.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#38FF62] rounded-full opacity-60 animate-bounce"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </>
        )}

        {/* Header with 3D effect */}
        <div className="relative p-6 border-b border-[rgba(35,35,35,0.1)] overflow-hidden">
          {/* Category badge with animation */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div 
                className={`
                  p-2 bg-gradient-to-br ${getGradientColor(project.category)} 
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                `}
              >
                <CategoryIcon size={16} className="text-white" />
              </div>
              <span 
                className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em] bg-[rgba(56,255,98,0.1)] px-2 py-1 group-hover:bg-[rgba(56,255,98,0.2)] transition-colors duration-300"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                {project.category}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 text-[#232323] hover:bg-[#38FF62] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Github size={18} />
              </button>
              <button className="p-2 text-[#232323] hover:bg-[#38FF62] hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-12">
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
          
          {/* Animated title */}
          <h3 
            className="font-normal text-[#232323] mb-3 group-hover:text-[#38FF62] transition-colors duration-300"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              lineHeight: '1.2'
            }}
          >
            {project.title}
          </h3>
          
          <p 
            className="font-normal text-[#232323] leading-[1.33] mb-4 group-hover:text-[rgba(35,35,35,0.8)] transition-colors duration-300"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(14px, 1.8vw, 16px)'
            }}
          >
            {project.description}
          </p>

          {/* Animated metrics */}
          {project.metrics && (
            <div className="flex items-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <TrendingUp size={16} className="text-[#38FF62] mr-2 group-hover:animate-pulse" />
              <span 
                className="font-mono text-[12px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                {project.metrics}
              </span>
            </div>
          )}

          {/* Glowing line animation */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#38FF62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Technologies with hover effects */}
        <div className="p-6">
          <div className="mb-6">
            <h4 
              className="font-mono text-[12px] font-normal text-[#232323] uppercase tracking-[0.05em] mb-3 flex items-center"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              <Code size={14} className="mr-2 group-hover:text-[#38FF62] transition-colors duration-300" />
              TECH STACK
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[rgba(35,35,35,0.05)] font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em] border border-[rgba(35,35,35,0.1)] hover:bg-[#38FF62] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ 
                    fontFamily: 'ui-monospace, monospace',
                    animationDelay: `${techIndex * 0.1}s`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced CTA button */}
          <button className="w-full relative overflow-hidden bg-transparent border border-[#232323] px-6 py-3 font-mono text-[12px] font-normal text-[#232323] uppercase cursor-pointer transition-all duration-300 min-h-[44px] flex items-center justify-center tracking-[0.05em] group-hover:border-[#38FF62] group-hover:text-[#38FF62] group-hover:scale-[1.02] group-hover:shadow-[0_4px_20px_rgba(56,255,98,0.2)]">
            
            {/* Animated background fill */}
            <div className="absolute inset-0 bg-[#38FF62] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            
            <div className="relative flex items-center z-10 group-hover:text-white transition-colors duration-300">
              <Eye size={16} className="mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span style={{ fontFamily: 'ui-monospace, monospace' }}>
                EXPLORE PROJECT
              </span>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />
          </button>
        </div>

        {/* 3D depth indicator */}
        <div 
          className={`
            absolute top-2 right-2 w-2 h-2 bg-[#38FF62] rounded-full opacity-0 
            group-hover:opacity-100 transition-all duration-300 animate-pulse
          `}
        />
      </div>
    </div>
  );
};

export default ProjectCard3D;