'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import the Globe component dynamically to avoid SSR issues
const DynamicGlobe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      Loading globe visualization...
    </div>
  ),
});

export function GridGlobe() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-black-100 bg-opacity-50 backdrop-blur-sm rounded-xl border border-white/10">
        {isMounted && <DynamicGlobe />}
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="text-white text-xl font-bold">Global Presence</h3>
        <p className="text-white/70">Interactive 3D visualization</p>
      </div>
    </div>
  );
}