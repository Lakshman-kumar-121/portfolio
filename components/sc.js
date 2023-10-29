import React, { useState, useEffect } from 'react';
import styles from '../styles/Sc.module.css';
import {AiOutlineArrowUp} from 'react-icons/ai';
import mystyles from './styles';
import { thememde } from './modecontext';
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mode = thememde;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrollPercentage);
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
    style={mode? mystyles.gototop : null}
      onClick={scrollToTop}
      className={`${styles['scroll-to-top']} ${isVisible ? styles['visible'] : ''}`
    }
    >
      <AiOutlineArrowUp/>
    </button>
  );
}

export default ScrollToTopButton;