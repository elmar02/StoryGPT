'use client'
import StoriesSection from '@/containers/stories/StoriesSection'
import { RootState } from '@/redux/store'
import { Story } from '@/types/story'
import React from 'react'
import { useSelector } from 'react-redux'

interface Props {
    stories: Story[]
}

const SavesWrapper = ({ stories }: Props) => {
    const saves = useSelector((state: RootState)=> state.save.saves)
    return (
        <StoriesSection stories={stories.filter((story)=>saves.includes(story.id))}/>
    )
}

export default SavesWrapper