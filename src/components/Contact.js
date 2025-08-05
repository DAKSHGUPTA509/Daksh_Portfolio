import React, { useState } from 'react';
import { portfolioData } from '../mock/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, User, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-[95.2px] bg-white">
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
            LET'S CONNECT
          </h2>
          
          <div 
            className="font-mono text-[10px] md:text-[18px] font-normal text-[#232323] uppercase tracking-[0.05em] mt-6"
            style={{ fontFamily: 'ui-monospace, monospace' }}
          >
            READY FOR YOUR NEXT DATA PROJECT
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[47.6px]">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-[47.6px]">
            
            {/* Contact Details */}
            <div className="bg-[#F2F2F2] border border-[rgba(35,35,35,0.1)] p-6">
              <h3 
                className="font-mono text-[14px] font-normal text-[#232323] uppercase mb-6 tracking-[0.05em]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    label: 'EMAIL', 
                    value: personal.email, 
                    href: `mailto:${personal.email}`,
                    description: 'Best way to reach me'
                  },
                  { 
                    icon: Phone, 
                    label: 'PHONE', 
                    value: personal.phone, 
                    href: `tel:${personal.phone}`,
                    description: 'Available Mon-Fri, 9AM-6PM'
                  },
                  { 
                    icon: MapPin, 
                    label: 'LOCATION', 
                    value: personal.location, 
                    href: null,
                    description: 'Open to remote opportunities'
                  }
                ].map(({ icon: Icon, label, value, href, description }, index) => (
                  <div key={index} className="border-l-2 border-[#38FF62] pl-4">
                    <div className="flex items-center mb-2">
                      <Icon size={16} className="text-[#232323] mr-2" />
                      <span 
                        className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {label}
                      </span>
                    </div>
                    
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal text-[#232323] hover:opacity-70 transition-opacity duration-150 block mb-1"
                        style={{ 
                          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                          fontSize: 'clamp(16px, 2.5vw, 20px)'
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="font-normal text-[#232323] block mb-1"
                        style={{ 
                          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                          fontSize: 'clamp(16px, 2.5vw, 20px)'
                        }}
                      >
                        {value}
                      </span>
                    )}
                    
                    <p 
                      className="font-normal text-[rgba(35,35,35,0.7)]"
                      style={{ 
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        fontSize: 'clamp(12px, 1.5vw, 14px)'
                      }}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#F2F2F2] border border-[rgba(35,35,35,0.1)] p-6">
              <h3 
                className="font-mono text-[14px] font-normal text-[#232323] uppercase mb-6 tracking-[0.05em]"
                style={{ fontFamily: 'ui-monospace, monospace' }}
              >
                SOCIAL PROFILES
              </h3>
              
              <div className="space-y-4">
                {[
                  { 
                    icon: Linkedin, 
                    label: 'LINKEDIN', 
                    href: `https://${personal.linkedin}`,
                    description: 'Professional network'
                  },
                  { 
                    icon: Github, 
                    label: 'GITHUB', 
                    href: `https://${personal.github}`,
                    description: 'Code repositories'
                  }
                ].map(({ icon: Icon, label, href, description }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 border border-[rgba(35,35,35,0.1)] hover:bg-white hover:translate-y-[-2px] transition-all duration-200 group"
                  >
                    <Icon size={20} className="text-[#232323] mr-4" />
                    <div className="flex-1">
                      <div 
                        className="font-mono text-[12px] font-normal text-[#232323] uppercase tracking-[0.05em] mb-1"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {label}
                      </div>
                      <div 
                        className="font-normal text-[rgba(35,35,35,0.7)] group-hover:text-[#232323] transition-colors duration-200"
                        style={{ 
                          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                          fontSize: 'clamp(12px, 1.5vw, 14px)'
                        }}
                      >
                        {description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F2F2F2] border border-[rgba(35,35,35,0.1)] p-6">
              <div className="flex items-center mb-6">
                <MessageCircle size={24} className="text-[#232323] mr-4" />
                <h3 
                  className="font-mono text-[14px] font-normal text-[#232323] uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  SEND A MESSAGE
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label 
                      className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em] flex items-center"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      <User size={14} className="mr-2" />
                      YOUR NAME
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-white border border-[#232323] focus:border-[#38FF62] focus:ring-1 focus:ring-[#38FF62]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label 
                      className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em] flex items-center"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      <Mail size={14} className="mr-2" />
                      EMAIL ADDRESS
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white border border-[#232323] focus:border-[#38FF62] focus:ring-1 focus:ring-[#38FF62]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label 
                    className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em] flex items-center"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    <FileText size={14} className="mr-2" />
                    SUBJECT
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="bg-white border border-[#232323] focus:border-[#38FF62] focus:ring-1 focus:ring-[#38FF62]"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    className="font-mono text-[10px] font-normal text-[#232323] uppercase tracking-[0.05em] flex items-center"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    <MessageCircle size={14} className="mr-2" />
                    MESSAGE
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, role, or collaboration opportunity..."
                    rows={6}
                    required
                    className="bg-white border border-[#232323] focus:border-[#38FF62] focus:ring-1 focus:ring-[#38FF62] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#38FF62] border-none px-6 py-3 font-mono text-[12px] font-normal text-[#232323] uppercase cursor-pointer transition-all duration-200 min-h-[44px] flex items-center justify-center tracking-[0.05em] ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-[#2AE052] hover:scale-[1.02] active:bg-[#1DC943] active:scale-[0.98]'
                  }`}
                  style={{ fontFamily: 'ui-monospace, monospace' }}
                >
                  <Send size={16} className={`mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;