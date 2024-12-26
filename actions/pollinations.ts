'use server'

export async function GenerateCover(prompt: string, title: string) {  
    const response = await fetch('http://localhost:3000/api/generate-cover', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, title }),
    });

    const data = await response.json();
    
    return data.src as string;
}