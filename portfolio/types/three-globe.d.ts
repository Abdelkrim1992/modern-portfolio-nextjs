declare module 'three-globe' {
  import { Object3D } from 'three';

  interface ThreeGlobeOptions {
    waitForGlobeReady?: boolean;
    animateIn?: boolean;
    [key: string]: any;
  }

  class ThreeGlobe extends Object3D {
    constructor(options?: ThreeGlobeOptions);
    
    // Common methods
    globeImageUrl(url: string): ThreeGlobe;
    bumpImageUrl(url: string): ThreeGlobe;
    showGlobe(show: boolean): ThreeGlobe;
    showAtmosphere(show: boolean): ThreeGlobe;
    atmosphereColor(color: string): ThreeGlobe;
    atmosphereAltitude(altitude: number): ThreeGlobe;
    
    // Points related methods
    pointsData(data: any[]): ThreeGlobe;
    pointColor(accessor: string | ((d: any) => string)): ThreeGlobe;
    pointAltitude(accessor: string | ((d: any) => number)): ThreeGlobe;
    pointRadius(accessor: string | ((d: any) => number)): ThreeGlobe;
    pointResolution(resolution: number): ThreeGlobe;
    pointMerge(merge: boolean): ThreeGlobe;

    // Background
    backgroundColor(color: string): ThreeGlobe;

    // General accessors
    width(): number;
    height(): number;
    scale: {
      set(x: number, y: number, z: number): void;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  }

  export default ThreeGlobe;
}