import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the globe data from the JSON file
    const filePath = path.join(process.cwd(), 'data', 'globe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    // Return the data as JSON response
    return NextResponse.json(data);
  } catch (error) {
    // If there's an error, return a fallback data
    const fallbackData = {
      places: [
        { name: 'New York', lat: 40.7128, lng: -74.0060, size: 0.5, color: '#ffffff' },
        { name: 'London', lat: 51.5074, lng: -0.1278, size: 0.5, color: '#ffffff' },
        { name: 'Tokyo', lat: 35.6762, lng: 139.6503, size: 0.5, color: '#ffffff' },
      ]
    };
    
    return NextResponse.json(fallbackData);
  }
}