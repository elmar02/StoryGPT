import Label from '@/components/common/Label'
import React from 'react'
import StoryCard from '@/components/stories/StoryCard'
import Cover from '@/public/cover.webp'
import Link from 'next/link'
import { Story } from '@/types/story'

interface Props {
    stories: Story[]
}

const StoriesSection = ({ stories }: Props) => {
    return (
        <section id='stories' className='section-box'>
            <Label className='text-center'>Discover Stories Created by Our Community</Label>
            <p className='text-center text-sm'>See what others have created! Check out the <Link className='underline text-teal-500' href={'/stories'}>Stories</Link> page for more!</p>
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
                {
                    stories.map((story, i) => (
                        <StoryCard
                            key={i}
                            story={story}
                        />
                    ))
                }
            </div>
            <div className='text-center mt-4'>
            </div>
        </section>
    )
}

export default StoriesSection