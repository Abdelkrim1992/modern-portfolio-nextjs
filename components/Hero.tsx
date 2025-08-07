import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/GridBackground'

export const Hero = () => {
    return (
        <div className='pb-10 pt-10'>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 sm:-top-45 sm:-left-32 md:-top-30 h-screen" fill='white'/>
                <Spotlight className="top-28 left-full h-[80vh] w-[50vw]" fill='purple'/>
                <Spotlight className="top- left-80 h-[80vh] w-[50vw]" fill='blue'/>
                <GridBackgroundDemo />
            </div>
            
        </div>
    )
}
