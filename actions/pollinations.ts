'use server'

import { apiKey } from "@/libs/keys";

export async function GenerateCover(prompt: string, title: string) {  
    const response = await fetch(`${apiKey}/generate-cover`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, title }),
    });

    const data = await response.json();
    
    return data.src as string;
}