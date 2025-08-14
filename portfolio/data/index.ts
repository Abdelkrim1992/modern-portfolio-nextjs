import fs from 'fs';
import path from 'path';

// Define the GlobeData type
export interface GlobePlace {
  name: string;
  lat: number;
  lng: number;
  size: number;
  color: string;
}

export interface GlobeData {
  places: GlobePlace[];
}

// Function to get globe data
export function getGlobeData(): GlobeData {
  try {
    const filePath = path.join(process.cwd(), 'data', 'globe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent) as GlobeData;
  } catch (error) {
    // Fallback data if the file doesn't exist or can't be parsed
    return {
      places: [
        { name: 'New York', lat: 40.7128, lng: -74.0060, size: 0.5, color: '#ffffff' },
        { name: 'London', lat: 51.5074, lng: -0.1278, size: 0.5, color: '#ffffff' },
        { name: 'Tokyo', lat: 35.6762, lng: 139.6503, size: 0.5, color: '#ffffff' },
      ]
    };
  }
}