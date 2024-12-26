import StoryCard from '@/components/stories/StoryCard'
import React from 'react'
import Cover from '@/public/cover.webp'
import { Story } from '@/types/story'

interface Props {
    stories: Story[]
}

const StoriesSection = ({ stories }: Props) => {
    return (
        <section id='stories' className='section-box section-sm'>
            {
                stories.length !== 0 ?
                    <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                        {
                            stories.map((story, i) => (
                                <StoryCard
                                    key={i}
                                    story={story}
                                />
                            ))
                        }
                    </div>
                    : <p className='text-center text-slate-500'>There is no stories yet!</p>
            }
        </section>
    )
}

export default StoriesSection