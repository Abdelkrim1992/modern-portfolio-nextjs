import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black-100">
      {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      /> */}
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      <div className="flex justify-center relative">
        <div className="max-w-[80vw]">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80vw]">
            Watch New Modern Portfolio
          </h1>
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transfer Progects To Modern Ui Designs"/>
          <p className="text-center justify-center flex tracking-wider mb-5 text-sm md:text-lg ">
          I'm Abdelkrim Salaghe a Full Stack Developer based in Agadir, Morocco
        </p>
        </div>
        
      </div>
    </div>
    
  );
}
