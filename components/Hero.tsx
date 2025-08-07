import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { GridBackgroundDemo } from './ui/GridBackground';

export const Hero = () => {
  return (
    <div className="pt-10 overflow-hidden">
      {/* White spotlight - centered and large */}
      <Spotlight
        className="absolute top-[10%] left-[10%] h-[80vh] w-[80vw]"
        fill="white"
      />

      {/* Blue spotlight - same position for overlay effect */}
      <Spotlight
        className="absolute top-[10%] left-[10%] h-[120vh] w-[120vw]"
        fill="blue"
      />

      {/* Purple spotlight - offset to right for contrast */}
      <Spotlight
        className="absolute top-[30%] left-[80%] h-[120vh] w-[60vw]"
        fill="purple"
      />

      {/* Main hero content */}
      <GridBackgroundDemo />
    </div>
  );
};
