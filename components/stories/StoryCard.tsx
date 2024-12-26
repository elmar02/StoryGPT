'use client'
import { Story } from '@/types/story'
import { faBookmark as faSave } from '@fortawesome/free-regular-svg-icons'
import { faInfo, faBookmark as faSaved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const play_fair = Playfair_Display({
    weight: '900',
    subsets: ['latin']
})

const open_sans = Open_Sans({
    weight: '400',
    subsets: ['latin']
})

interface Props {
    story: Story
}

const StoryCard = ({ story }: Props) => {
    const [saved, setSaved] = useState(false)
    const {coverUrl, description, genre, id, length, title} = story
    const toggleSave = () => {
        setSaved(prev => !prev)
    }
    return (
        <div className='card p-3 bg-slate-900 rounded'>
            <div className='grid grid-cols-2 sm:grid-cols-1 gap-3'>
                <div className='card-img relative bg-slate-950'>
                    <Image src={coverUrl} alt={title} fill className='object-cover' />
                </div>
                <div className='space-y-2 flex flex-col justify-between'>
                    <div className='space-y-1'>
                        <div className='space-x-1 text-xs font-semibold text-slate-900'>
                            <span className='bg-teal-500 rounded-md px-1'>{genre}</span>
                            <span className='bg-teal-500 rounded-md px-1'>{length}</span>
                        </div>
                        <h1 title={title} className={`text-lg ${play_fair.className} line-clamp-1`}>{title}</h1>
                        <div className={`text-sm ${open_sans.className} line-clamp-3`}>
                            <ReactMarkdown
                                components={{
                                    h2: ({ node, ...props }) => <h2 {...props} className="hidden" />,
                                    p: ({ node, ...props }) => (
                                        <p {...props} />
                                    ),
                                }}
                            >
                                {description}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className='read-more flex items-center gap-2'>
                        <Link href={`/stories/${id}`} className='info-text p-2 border rounded border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-500 inline-block'>
                            <span>
                                Read More
                            </span>
                            <FontAwesomeIcon className='px-1' icon={faInfo} />
                        </Link>
                        <button onClick={toggleSave} className='p-2 rounded border text-slate-500 border-slate-500 hover:text-slate-400 hover:border-slate-400 transition-colors'>
                            <FontAwesomeIcon icon={saved ? faSaved : faSave} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryCard