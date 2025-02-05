'use client';

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // Initialize with a default width (can be 0 or a reasonable default)
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array means this effect runs once on mount

  return width;
};

export default useWindowWidth; 