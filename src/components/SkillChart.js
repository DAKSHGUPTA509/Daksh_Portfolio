import React, { useState, useEffect } from 'react';

const SkillChart = ({ skills, title, color = "#38FF62" }) => {
  const [animatedLevels, setAnimatedLevels] = useState({});
  
  // Mock skill levels based on skill importance
  const skillLevels = {
    // Programming Languages
    'Python': 95,
    'R': 85,
    'SQL': 90,
    'JavaScript': 75,
    'C/C++': 70,
    'Java': 65,
    
    // Libraries
    'Pandas': 95,
    'NumPy': 95,
    'Scikit-learn': 90,
    'TensorFlow': 85,
    'Matplotlib': 80,
    'Seaborn': 80,
    
    // Visualization Tools
    'Power BI': 85,
    'Tableau': 80,
    
    // Tools
    'Jupyter Notebook': 95,
    'GitHub': 90,
    'MySQL': 85,
    'VS Code': 90,
    'Google Colab': 90,
    
    // Core Skills
    'Machine Learning': 95,
    'Data Analysis': 95,
    'Statistical Analysis': 90,
    'Data Mining': 85,
    'Predictive Modeling': 90,
    'Data Cleaning': 95,
    'ETL': 80,
    
    // Default for others
    'default': 75
  };

  useEffect(() => {
    // Animate skill levels on mount
    const timer = setTimeout(() => {
      const animated = {};
      skills.forEach((skill, index) => {
        setTimeout(() => {
          animated[skill] = skillLevels[skill] || skillLevels.default;
          setAnimatedLevels(prev => ({ ...prev, ...animated }));
        }, index * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <div className="space-y-4">
      {skills.map((skill, index) => {
        const level = animatedLevels[skill] || 0;
        const isAnimated = animatedLevels[skill] !== undefined;
        
        return (
          <div key={skill} className="group">
            <div className="flex justify-between items-center mb-2">
              <span 
                className="font-normal text-[#232323] group-hover:text-[#38FF62] transition-colors duration-300"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: 'clamp(14px, 1.8vw, 16px)'
                }}
              >
                {skill}
              </span>
              <span 
                className="font-mono text-[12px] font-normal text-[rgba(35,35,35,0.7)] group-hover:text-[#38FF62] transition-colors duration-300"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                {level}%
              </span>
            </div>
            
            <div className="relative h-2 bg-[rgba(35,35,35,0.1)] overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out group-hover:brightness-110"
                style={{
                  width: `${isAnimated ? level : 0}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}dd)`,
                  boxShadow: `0 0 10px ${color}33`
                }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
              
              {/* Skill level indicator */}
              {isAnimated && (
                <div
                  className="absolute top-0 w-1 h-full bg-white opacity-80 transition-all duration-1000 ease-out"
                  style={{ left: `${level}%`, transform: 'translateX(-50%)' }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillChart;