'use client'
import React, { FormEvent, useState } from 'react'
import Select, { Option } from '../common/Select'
import { ages, conflicts, endings, genres, lengths, perspectives } from '@/libs/story'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
import Error from '../common/Error'
import { NewStory, StoryFormData } from '@/types/story'
import { CreateStory } from '@/actions/story'
import { generatePrompt } from '@/libs/prompt'
import { GenerateCover } from '@/actions/pollinations'
import GenerateStory from '@/actions/gemini'
import { useRouter } from 'next/navigation'

const CreateStoryForm = ({userId}: {userId: number}) => {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as unknown as StoryFormData;
        
        setPending(prev=>!prev)
        try {
            const {title, genre, length} = data
            const {coverPrompt, storyPrompt} = generatePrompt(data)
            const [cover, story] = await Promise.all([GenerateCover(coverPrompt, title), GenerateStory(storyPrompt)])
            const newStory: NewStory = {
                title,
                coverUrl: cover,
                description: story,
                genre,
                length,
                userId
            }
            const result = await CreateStory(newStory)
            if(result.success){
                router.push(`/stories/${result.id}`)
                return
            }
            else setError(result.message)
        } catch (error) {
            console.log(error)
            setError('failed to fetch')
        }
        finally {
            setPending(prev => !prev)
        }
    }
    return (
        <form onSubmit={handleSubmit} className='space-y-3 sm:p-4 sm:rounded sm:border sm:border-slate-700'>
            <div className='grid lg:grid-cols-2 gap-3'>
                <Input required placeholder='E.g. The Kingdom of Evergreen' label="Title *" type="text" name="title" id="title" />
                <Input placeholder='E.g. a futuristic city' label="Location" type="text" name="location" id="location" />
                <Input placeholder='E.g. magic, forest, dragon' label="Keywords" type="text" name="keywords" id="keywords" />
                <Input placeholder='E.g. Harry Potter' label="Main Characters" type="text" name="main_characters" id="main_characters" />
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                <Select required label='Genre *' name='genre' id='genre'>
                    <Option value="">Choose Genre</Option>
                    {
                        genres.map((genre, index) => (
                            <Option value={genre} key={index}>{genre}</Option>
                        ))
                    }
                </Select>
                <Select required label='Length *' name='length' id='length'>
                    <Option value="">Choose Length</Option>
                    {
                        lengths.map((length, index) => (
                            <Option value={length} key={index}>{length}</Option>
                        ))
                    }
                </Select>
                <Select label='Perspective' name='perspective' id='perspective'>
                    <Option value="">Choose Perspective</Option>
                    {
                        perspectives.map((perspective, index) => (
                            <Option value={perspective} key={index}>{perspective}</Option>
                        ))
                    }
                </Select>
                <Select label='Age' name='age' id='age'>
                    <Option value="">Choose Age</Option>
                    {
                        ages.map((age, index) => (
                            <Option value={age} key={index}>{age}</Option>
                        ))
                    }
                </Select>
                <Select label='Ending' name='ending' id='ending'>
                    <Option value="">Choose Ending</Option>
                    {
                        endings.map((ending, index) => (
                            <Option value={ending} key={index}>{ending}</Option>
                        ))
                    }
                </Select>
                <Select label='Conflict' name='conflict' id='conflict'>
                    <Option value="">Choose Conflict</Option>
                    {
                        conflicts.map((conflict, index) => (
                            <Option value={conflict} key={index}>{conflict}</Option>
                        ))
                    }
                </Select>
            </div>
            <TextArea rows={6} label='Notes' name='notes' id='notes' placeholder='E.g., The main character is a brave knight seeking a magical sword...' />
            <p className='text-teal-500 text-sm'>* required</p>
            <Error message={error} />
            <button disabled={pending} className='w-full p-3 bg-teal-500 font-semibold text-slate-950 rounded'>Create the Story</button>
        </form>
    )
}

export default CreateStoryForm