'use client'
import StoryCard from '@/components/stories/StoryCard'
import React, { ChangeEvent, useMemo, useState } from 'react'
import { Story } from '@/types/story'
import Input from '@/components/common/Input'
import Select, { Option } from '@/components/common/Select'
import { filterStories, genres, lengths } from '@/libs/story'

interface Props {
    stories: Story[]
}

const StoriesSection = ({ stories }: Props) => {
    const [filter, setFilter] = useState({
        genre: '',
        length: '',
        search: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilter(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const filteredStories = useMemo(() => {
        const { genre, length, search } = filter
        return filterStories(stories, length, genre, search)
    }, [filter])
    return (
        <section id='stories' className='section-box section-sm space-y-3'>
            <div className='grid sm:grid-cols-2 gap-2'>
                <Input onChange={handleChange} value={filter.search} type='search' placeholder='Search' name='search' />
                <div className='grid grid-cols-2 gap-2'>
                    <Select onChange={handleChange} value={filter.genre} name='genre'>
                        <Option value="">All Genres</Option>
                        {
                            genres.map((genre, index) => (
                                <Option value={genre} key={index}>{genre}</Option>
                            ))
                        }
                    </Select>
                    <Select onChange={handleChange} value={filter.length} name='length'>
                        <Option value="">All Lengths</Option>
                        {
                            lengths.map((length, index) => (
                                <Option value={length} key={index}>{length}</Option>
                            ))
                        }
                    </Select>
                </div>
            </div>
            {
                stories.length !== 0 ?
                    filteredStories.length === 0 ? <p className='text-center text-slate-500'>No matches found.</p>
                        : <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                            {
                                filteredStories.map((story, i) => (
                                    <StoryCard
                                        key={i}
                                        story={story}
                                    />
                                ))
                            }
                        </div>
                    : <p className='text-center text-slate-500'>There is no stories yet.</p>
            }
        </section>
    )
}

export default StoriesSection