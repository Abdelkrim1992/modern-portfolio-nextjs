'use client';

import { GridGlobe } from '@/components/ui/GridGlobe';

export default function GlobePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black-100">
      <div className="container max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white text-center">Interactive Globe</h1>
        <p className="text-white/70 text-center max-w-2xl mx-auto">
          This interactive 3D globe showcases global locations using Three.js and the three-globe library.
        </p>
        <div className="w-full h-[600px]">
          <GridGlobe />
        </div>
      </div>
    </main>
  );
}