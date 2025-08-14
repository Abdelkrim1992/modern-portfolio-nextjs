'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Create a dynamic import for ThreeGlobe to ensure it only loads on the client side
// This is important because three.js requires the window object
const Globe = dynamic(() => import('three-globe').then(mod => mod.default || mod), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading globe...</div>
});

// Import THREE from the actual three package directly
import * as THREE from 'three';

// Create dummy data for the globe if the actual data file doesn't exist
const dummyGlobeData = {
  places: [
    { name: 'New York', lat: 40.7128, lng: -74.0060, size: 0.5, color: '#ffffff' },
    { name: 'London', lat: 51.5074, lng: -0.1278, size: 0.5, color: '#ffffff' },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503, size: 0.5, color: '#ffffff' },
  ]
};

export default function GlobeComponent() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [globeData, setGlobeData] = useState(dummyGlobeData);

  useEffect(() => {
    // Function to initialize the globe
    const initGlobe = async () => {
      if (!containerRef.current || !Globe) return;
      
      try {
        // Try to fetch actual globe data if available
        try {
          const response = await fetch('/api/globe-data');
          const data = await response.json();
          setGlobeData(data);
        } catch (error) {
          console.log('Using default globe data');
        }

        // Create scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 200;

        const renderer = new THREE.WebGLRenderer({ 
          antialias: true,
          alpha: true 
        });
        
        renderer.setSize(
          containerRef.current.clientWidth, 
          containerRef.current.clientHeight
        );
        
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(renderer.domElement);

        // Create the globe with Three-Globe
        const globe = new Globe({
          waitForGlobeReady: true,
          animateIn: true,
        })
          .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
          .backgroundColor('rgba(0,0,0,0)')
          .pointsData(globeData.places)
          .pointColor('color')
          .pointAltitude('size')
          .pointRadius(0.5);

        globe.scale.set(100, 100, 100);
        scene.add(globe);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          globe.rotation.y += 0.001;
          renderer.render(scene, camera);
        };

        // Handle resize
        const handleResize = () => {
          if (!containerRef.current) return;
          camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();
        setLoading(false);

        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
          scene.remove(globe);
          renderer.dispose();
        };
      } catch (error) {
        console.error('Error initializing globe:', error);
        setLoading(false);
      }
    };

    // Initialize globe with a small delay to ensure component is mounted
    const timeoutId = setTimeout(() => {
      initGlobe();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-lg bg-transparent"
      style={{ minHeight: '400px' }}
    >
      {loading && (
        <div className="w-full h-full flex items-center justify-center">
          Loading globe...
        </div>
      )}
    </div>
  );
}