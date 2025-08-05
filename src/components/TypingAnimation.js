import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  texts = ["Machine Learning Engineer", "Data Scientist", "AI Researcher", "Python Developer"], 
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-pulse text-[#38FF62]">|</span>
    </span>
  );
};

export default TypingAnimation;