import React from 'react';
import { portfolioData } from '../mock/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  const { education, achievements, certifications } = portfolioData;

  return (
    <section id="about" className="py-[95.2px] bg-[#F2F2F2]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-[95.2px]">
          <h2 
            className="font-normal text-[#232323] uppercase leading-none"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 'clamp(40px, 8vw, 150px)'
            }}
          >
            ABOUT ME
          </h2>
          
          <div 
            className="font-mono text-[10px] md:text-[18px] font-normal text-[#232323] uppercase tracking-[0.05em] mt-6"
            style={{ fontFamily: 'ui-monospace, monospace' }}
          >
            EDUCATION & ACHIEVEMENTS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[47.6px]">
          
          {/* Education Section */}
          <div className="space-y-[47.6px]">
            
            <div className="bg-white border border-[rgba(35,35,35,0.1)] p-6 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(35,35,35,0.1)]">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-[#232323] mr-4" />
                <h3 
                  className="font-mono text-[14px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  EDUCATION
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[#38FF62] pl-6">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-[#232323] mr-2" />
                      <span 
                        className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {edu.period}
                      </span>
                      {edu.status === 'current' && (
                        <span className="bg-[#38FF62] text-[#232323] px-2 py-1 ml-2 font-mono text-[8px] uppercase">
                          CURRENT
                        </span>
                      )}
                    </div>
                    
                    <h4 
                      className="font-normal text-[#232323] mb-2"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 24px)'
                      }}
                    >
                      {edu.degree}
                    </h4>
                    
                    <p 
                      className="font-normal text-[#232323] mb-1"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(14px, 1.8vw, 16px)'
                      }}
                    >
                      {edu.institution}
                    </p>
                    
                    {edu.grade && (
                      <p 
                        className="font-mono text-[12px] text-[#232323] uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {edu.grade}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white border border-[rgba(35,35,35,0.1)] p-6 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(35,35,35,0.1)]">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-[#232323] mr-4" />
                <h3 
                  className="font-mono text-[14px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  KEY ACHIEVEMENTS
                </h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#38FF62] mt-2 mr-4 flex-shrink-0"></div>
                    <p 
                      className="font-normal text-[#232323] leading-[1.33]"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(14px, 1.8vw, 16px)'
                      }}
                    >
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="bg-white border border-[rgba(35,35,35,0.1)] p-6 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(35,35,35,0.1)]">
              <h3 
                className="font-mono text-[14px] font-normal text-[#232323] uppercase mb-6 tracking-[0.05em]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                CERTIFICATIONS
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-b border-[rgba(35,35,35,0.1)] last:border-b-0 pb-4 last:pb-0">
                    <h4 
                      className="font-normal text-[#232323] mb-2"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)'
                      }}
                    >
                      {cert.name}
                    </h4>
                    
                    <div className="flex justify-between items-center">
                      <p 
                        className="font-normal text-[rgba(35,35,35,0.7)]"
                        style={{ 
                          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                          fontSize: 'clamp(14px, 1.8vw, 16px)'
                        }}
                      >
                        {cert.issuer}
                      </p>
                      
                      <span 
                        className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;