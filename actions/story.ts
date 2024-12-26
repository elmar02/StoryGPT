'use server'
import { apiKey } from "@/libs/keys"
import { NewStory, Story } from "@/types/story"

export async function CreateStory(newStory: NewStory) {
    const response = await fetch(`${apiKey}/stories`, {
        method: 'POST',
        body: JSON.stringify({
            newStory
        })
    })
    const result: { id?: number, success: boolean, message: string } = await response.json()
    return result
}

export async function GetStories(userId?: number) {       
    const url = `${apiKey}/stories${userId ? `?userId=${userId}` : ''}` 
    const response = await fetch(url,{
        cache: 'no-store'
    })
    const result: { stories: Story[] } = await response.json()
    return result.stories
}

export async function GetStoriesById(id: string) {
    const response = await fetch(`${apiKey}/stories/${id}`,{
        cache: 'no-store'
    })
    const result: {story: Story|null} = await response.json()
    return result
}