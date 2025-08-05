import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import { Filter, Sparkles, Zap, TrendingUp, Code2 } from 'lucide-react';
import ProjectCard3D from './ProjectCard3D';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [filterAnimation, setFilterAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  // Get unique categories with counts
  const categoryStats = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});
  
  const categories = [
    { name: 'All', count: projects.length, icon: Code2 },
    ...Object.entries(categoryStats).map(([name, count]) => ({ 
      name, 
      count, 
      icon: Code2 
    }))
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setFilterAnimation(true);
    setSelectedCategory(category);
    setTimeout(() => setFilterAnimation(false), 300);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'All': '#38FF62',
      'Machine Learning': '#38FF62',
      'Computer Vision': '#FF6B6B',
      'NLP & Machine Learning': '#4ECDC4',
      'Data Analysis': '#45B7D1',
      'Sports Analytics': '#FFA726',
      'Financial ML': '#AB47BC'
    };
    return colors[category] || '#38FF62';
  };

  return (
    <section id="projects" className="relative py-[95.2px] bg-[#F2F2F2] overflow-hidden">
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#38FF62] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-[95.2px]">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#38FF62]" />
            <Sparkles size={24} className="mx-6 text-[#38FF62] animate-spin" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#38FF62]" />
          </div>
          
          <h2 
            className="font-normal text-[#232323] uppercase leading-none relative animate-fadeInUp"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(40px, 8vw, 150px)'
            }}
          >
            SELECTED WORK
            {/* Dynamic underline effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#38FF62] via-[#4ECDC4] to-[#FFA726] animate-pulse" />
          </h2>
          
          <div 
            className="font-mono text-[10px] md:text-[18px] font-normal text-[#232323] uppercase tracking-[0.05em] mt-6 animate-fadeInUp"
            style={{ fontFamily: 'ui-monospace, monospace', animationDelay: '0.2s' }}
          >
            MACHINE LEARNING & DATA SCIENCE PROJECTS
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-col items-center mb-[95.2px]">
          
          {/* Filter Header */}
          <div className="flex items-center mb-8 space-x-4">
            <Filter size={24} className="text-[#38FF62] animate-pulse" />
            <h3 
              className="font-mono text-[14px] font-normal text-[#232323] uppercase tracking-[0.05em]"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              PROJECT CATEGORIES
            </h3>
            <Zap size={20} className="text-[#FFA726] animate-bounce" />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
            {categories.map((category, index) => {
              const isSelected = selectedCategory === category.name;
              const categoryColor = getCategoryColor(category.name);
              
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`
                    group relative px-6 py-3 font-mono text-[12px] font-normal uppercase tracking-[0.05em] 
                    border-2 transition-all duration-500 overflow-hidden
                    ${isSelected 
                      ? 'scale-110 shadow-[0_8px_32px_rgba(56,255,98,0.3)]' 
                      : 'hover:scale-105 hover:shadow-[0_4px_20px_rgba(35,35,35,0.1)]'
                    }
                  `}
                  style={{ 
                    fontFamily: 'ui-monospace, monospace',
                    borderColor: isSelected ? categoryColor : 'rgba(35,35,35,0.2)',
                    backgroundColor: isSelected ? `${categoryColor}10` : 'white',
                    color: isSelected ? categoryColor : '#232323',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Animated background */}
                  <div 
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColor}20, transparent)`,
                      opacity: isSelected ? 1 : 0,
                      transform: isSelected ? 'scale(1)' : 'scale(0)'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-2 z-10">
                    <span className={`transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                      {category.name.replace(/&/g, '&')}
                    </span>
                    
                    {/* Project count badge */}
                    <div 
                      className={`
                        px-2 py-0.5 font-mono text-[8px] font-normal uppercase tracking-[0.05em] border transition-all duration-300
                        ${isSelected 
                          ? 'bg-white border-current' 
                          : 'bg-[rgba(35,35,35,0.05)] border-[rgba(35,35,35,0.2)] group-hover:border-current'
                        }
                      `}
                      style={{ 
                        fontFamily: 'ui-monospace, monospace',
                        color: isSelected ? categoryColor : 'rgba(35,35,35,0.7)'
                      }}
                    >
                      {category.count.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: categoryColor, filter: 'blur(8px)' }}
                  />
                </button>
              );
            })}
          </div>

          {/* Filter Stats */}
          <div className="mt-8 flex items-center space-x-8">
            <div className="text-center">
              <div 
                className="font-normal text-[#232323] leading-none"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(20px, 4vw, 32px)'
                }}
              >
                {filteredProjects.length.toString().padStart(2, '0')}
              </div>
              <div 
                className="font-mono text-[8px] font-normal text-[rgba(35,35,35,0.7)] uppercase tracking-[0.05em]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                SHOWING PROJECTS
              </div>
            </div>
            
            <div className="w-px h-8 bg-[rgba(35,35,35,0.2)]" />
            
            <div className="text-center">
              <div 
                className="font-normal text-[#38FF62] leading-none"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(20px, 4vw, 32px)'
                }}
              >
                {projects.length.toString().padStart(2, '0')}
              </div>
              <div 
                className="font-mono text-[8px] font-normal text-[rgba(35,35,35,0.7)] uppercase tracking-[0.05em]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                TOTAL PROJECTS
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div 
          className={`
            grid grid-cols-1 lg:grid-cols-2 gap-[47.6px] transition-all duration-500
            ${filterAnimation ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}
          `}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${selectedCategory}`}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard3D project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Enhanced Projects Summary */}
        <div className="mt-[95.2px]">
          <div className="text-center mb-12">
            <h3 
              className="font-mono text-[14px] font-normal text-[#232323] uppercase tracking-[0.05em] flex items-center justify-center"
              style={{ fontFamily: 'ui-monospace, monospace' }}
            >
              <TrendingUp size={20} className="mr-2 text-[#38FF62] animate-pulse" />
              PROJECT STATISTICS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[47.6px] max-w-4xl mx-auto">
            {[
              { 
                label: "TOTAL PROJECTS", 
                value: projects.length.toString().padStart(2, '0'),
                icon: Code2,
                color: "#38FF62",
                gradient: "from-[#38FF62] to-[#2AE052]"
              },
              { 
                label: "CATEGORIES", 
                value: (categories.length - 1).toString().padStart(2, '0'),
                icon: Filter,
                color: "#4ECDC4", 
                gradient: "from-[#4ECDC4] to-[#44B3B9]"
              },
              { 
                label: "AVG ACCURACY", 
                value: "89%",
                icon: TrendingUp,
                color: "#FFA726",
                gradient: "from-[#FFA726] to-[#FF9800]"
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <div 
                  key={index} 
                  className="group relative bg-white border border-[rgba(35,35,35,0.1)] p-8 text-center transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(35,35,35,0.15)] overflow-hidden"
                >
                  
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div 
                      className="p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <IconComponent 
                        size={32} 
                        style={{ color: stat.color }}
                        className="group-hover:animate-pulse"
                      />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div 
                    className="relative z-10 font-normal text-[#232323] leading-none mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                      fontSize: 'clamp(32px, 6vw, 48px)'
                    }}
                  >
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div 
                    className="relative z-10 font-mono text-[8px] md:text-[12px] font-normal text-[rgba(35,35,35,0.7)] uppercase tracking-[0.05em] group-hover:text-[#38FF62] transition-colors duration-300"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    {stat.label}
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgba(56,255,98,0.3)] transition-all duration-500" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[rgba(35,35,35,0.1)] group-hover:border-[#38FF62] transition-colors duration-500" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[rgba(35,35,35,0.1)] group-hover:border-[#38FF62] transition-colors duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;