'use client'
import Label from '@/components/common/Label'
import React from 'react'
import AboutImage from '@/public/about.webp'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { scrollToSection } from '@/libs/link'
const AboutSection = () => {
  return (
    <section id='about' className='section-box py-1'>
      <div className='grid md:grid-cols-2 gap-y-2 gap-x-8 items-center '>
        <div className='space-y-3 py-4 text-center md:text-start'>
          <Label>What is StoryGPT?</Label>
          <p>
            StoryGPT is your personal AI-powered storyteller, designed to bring your imagination to life. Whether you’re envisioning a futuristic adventure, a gripping mystery, or a magical fairytale, StoryGPT is here to craft unique, immersive tales tailored to your ideas.
          </p>
          <div>
            With just a few clicks, you can:
            <ul className='italic text-teal-500'>
              <li>✨ Choose from a variety of genres and themes.</li>
              <li>✨ Generate fully personalized stories.</li>
              <li>✨ Save and revisit your creations anytime.</li>
            </ul>
          </div>
          <div className='grid grid-cols-2 gap-1'>
            <button onClick={()=>scrollToSection('start')} className='p-3 rounded bg-teal-500 text-slate-950 hover:bg-teal-400 transition-all'>
              Get Started <FontAwesomeIcon icon={faArrowDownLong} />
            </button>
            <button onClick={()=>scrollToSection('features')} className='p-3 rounded text-teal-500 border hover:border-teal-400 hover:text-teal-400 border-transparent transition-all'>
              See Features
            </button>
          </div>
        </div>
        <div className='relative h-[300px]'>
          <Image fill className='object-contain object-center rounded-md' src={AboutImage} alt='about-image' />
        </div>
      </div>
    </section>
  )
}

export default AboutSection