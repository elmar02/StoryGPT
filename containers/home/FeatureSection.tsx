import Label from '@/components/common/Label'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBookmark, faBrain, faMagic, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Eczar } from 'next/font/google'
import React from 'react'

const eczar = Eczar({
    weight: '700',
    subsets: ['latin']
})
const FeatureSection = () => {
    return (
        <section id='features' className='section-box'>
            <Label className='text-center'>What you can do in StoryGPT</Label>
            <p className='text-sm text-center'>Explore the limitless possibilities of storytelling with these powerful features of StoryGPT</p>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 gap-8 mt-14'>
                <FeatureItem
                    title='AI-Powered Creativity'
                    description='Harness the power of AI to create unique, captivating stories—from thrilling adventures to magical fairytales, tailored to your ideas.'
                    icon={faBrain}
                />
                <FeatureItem
                    title='Genre and Style Customization'
                    description='Explore diverse genres and tones to craft stories that match your vision, from epic sci-fi to heartfelt romances or chilling horrors.'
                    icon={faMagic}
                />
                <FeatureItem
                    title='Save and Revisit Stories'
                    description='Save your favorite stories for future reading or editing and build a personal library of your creations.'
                    icon={faBookmark}
                />
                <FeatureItem
                    title='Immersive Text-to-Speech'
                    description='Let your stories come alive with text-to-speech narration, featuring multiple voice styles and accents.'
                    icon={faVolumeUp}
                />
            </div>
        </section>
    )
}

interface ItemProps {
    title: string,
    description: string,
    icon: IconProp
}

const FeatureItem = ({ description, icon, title }: ItemProps) => {
    return (
        <div className='space-y-4 group'>
            <div className='space-y-7'>
                <FontAwesomeIcon icon={icon} className='text-2xl text-teal-500 group-hover:-translate-y-2 transition-transform' />
                <h1 className={`text-teal-500 ${eczar.className} text-lg`}>{title}</h1>
                <hr className='border-teal-500 w-[50px]' />
            </div>
            <p className='text-sm'>{description}</p>
        </div>
    )
}

export default FeatureSection