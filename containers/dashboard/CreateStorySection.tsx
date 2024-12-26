import Label from '@/components/common/Label'
import CreateStoryForm from '@/components/stories/CreateStoryForm'
import { User } from '@/types/users'
import React from 'react'

const CreateStorySection = ({session}: {session: User|null}) => {
    return (
        <section id='create-story' className='section-box section-sm space-y-6'>
            <div>
                <Label className='text-center'>Let{"'s"} Create a unique story with StoryGPT</Label>
                <p className='text-sm text-center'>Tip: If you don’t fill any optional field, our AI will choose randomly to craft a unique and surprising story just for you!</p>
            </div>
            <CreateStoryForm userId={session?.id??0}/>
        </section>
    )
}

export default CreateStorySection