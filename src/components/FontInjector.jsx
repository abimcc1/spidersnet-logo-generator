import React, { useEffect } from 'react';
import { fontOptions } from '../fontOptions.jsx';

const FontInjector = () => {

    useEffect(() => {
      fontOptions.forEach((font) => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = font.import;
        document.head.appendChild(styleTag);
      });
    }, []);
  
    return null; // This component doesn't render anything
  };
  
export default FontInjector;