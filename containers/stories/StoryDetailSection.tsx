import React from 'react'
import Label from '@/components/common/Label'
import { Source_Sans_3 } from 'next/font/google'
import { Story } from '@/types/story'
import ReactMarkdown from 'react-markdown';
import SaveButton from '@/components/common/SaveButton'
import Image from 'next/image';

const sourcesans = Source_Sans_3({
    weight: '400',
    subsets: ['latin']
})

const StoryDetailSection = ({ story }: { story: Story }) => {
    return (
        <section id='story-detail' className='section-box section-sm'>
            <Label className='text-center'>{story.title}</Label>
            <div className='mt-8'>
                <div className='relative sm:w-[30%] aspect-square sm:float-left sm:mr-2 sm:mb-1'>
                    <Image src={story.coverUrl} fill alt='title' className='object-cover object-center' />
                </div>
                <div className={`${sourcesans.className} text-center sm:text-left mt-2 sm:mt-0`}>
                    <ReactMarkdown
                        components={{
                            h2: ({ node, ...props }) => <h2 {...props} className="hidden" />,
                            p: ({ node, ...props }) => (
                                <p className='mb-2' {...props} />
                            ),
                        }}
                    >
                        {story.description}
                    </ReactMarkdown>
                </div>
            </div>
            <div className='clearfix'></div>
            <div className='flex flex-row gap-y-2 justify-between items-center'>
                <div className='space-x-1 text-sm font-semibold text-slate-900'>
                    <span className='bg-teal-500 rounded-md p-1'>{story.genre}</span>
                </div>
                <SaveButton id={story.id}/>
            </div>
        </section>
    )
}

export default StoryDetailSection