'use client'
import HeroSlider from '@/components/slider/HeroSlider'
import React from 'react'
import HandwritingText from '@/components/vara/HandwritingText'
import Link from 'next/link'
import { Source_Sans_3 } from 'next/font/google'
import Image from 'next/image'
import LongArrowDown from '@/public/icons/long-arrow-down.svg'
import { scrollToSection } from '@/libs/link'
const sourcesans = Source_Sans_3({
    weight: '400',
    style: 'italic',
    subsets: ['latin']
})
const HeroSection = () => {
    return (
        <section id='hero' className='relative h-[calc(100vh+200px)]'>
            <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-[2]'></div>
            <div className="absolute top-0 left-0 w-full h-full z-[1] overflow-clip">
                <HeroSlider />
            </div>
            <div className='relative h-screen z-[2] pt-[8px] sm:pt-[15px] md:pt-[30px] flex-col flex flex-center px-2 sm:mx-auto sm:w-[500px] text-center'>
                <div className='w-full handwriting-container'>
                    <HandwritingText text='Step into worlds making for you' />
                </div>
                <p className={`${sourcesans.className}`}>
                    Empowered by AI, effortlessly craft captivating stories, explore uncharted worlds, weave romantic sagas, or let your imagination run wild. <br />
                    No limits, no rules—just pure storytelling freedom!
                </p>
                <Link className='text-teal-500 mt-2 sm:mt-6 bg-slate-950 border border-teal-500 p-3 rounded-md font-semibold hover:bg-teal-500 hover:text-slate-950 hover:border-slate-950 transition-colors uppercase' href={' /dashboard/create'}>Create Your Own Story</Link>
                <button onClick={()=>scrollToSection('about')} className='mt-2 py-2 border-b uppercase'>
                    Learn More
                </button>
                <button onClick={()=>scrollToSection('start')} className='absolute bottom-10'>
                    <Image src={LongArrowDown} alt='long-arrow-down' />
                </button>
            </div>
            <div className='absolute h-[200px] bottom-0 w-full z-[20] bg-gradient-to-t from-slate-950 to-transparent'></div>
        </section>
    )
}

export default HeroSection