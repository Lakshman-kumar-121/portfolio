// components/AosInitializer.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({ once: true ,
        }); // Initialize AOS and set 'once' to true to trigger animations only once
  }, []);
  

  return <div/>;
};

export default AosInitializer;
