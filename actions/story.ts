'use server'
import GenerateStory from "./gemini"
import { GenerateCover } from "./pollinations"
import { NewStory, Story, StoryFormData } from "@/types/story"

export async function CreateStory(newStory: NewStory) {
    const response = await fetch(`http://localhost:3000/api/stories`, {
        method: 'POST',
        body: JSON.stringify({
            newStory
        })
    })
    const result: { id?: number, success: boolean, message: string } = await response.json()
    return result
}

export async function GetStories(userId?: number) {       
    const url = `http://localhost:3000/api/stories${userId ? `?userId=${userId}` : ''}` 
    const response = await fetch(url,{
        cache: 'no-store'
    })
    const result: { stories: Story[] } = await response.json()
    return result.stories
}

export async function GetStoriesById(id: string) {
    const response = await fetch(`http://localhost:3000/api/stories/${id}`,{
        cache: 'no-store'
    })
    const result: {story: Story|null} = await response.json()
    return result
}