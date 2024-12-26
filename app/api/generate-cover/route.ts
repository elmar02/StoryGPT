import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const { prompt, title } = await req.json();

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json({ error: 'Prompt is required and must be a string.' }, { status: 400 });
        }

        const apiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1048&height=1048&nologo=true&enhance=true`;

        const response = await fetch(apiUrl,{
            cache: 'no-store'
        });

        console.log('1');
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        
        console.log('2');
        const buffer = await response.arrayBuffer();
        
        console.log('3');
        const coversDir = path.join(process.cwd(), 'public', 'covers');
        
        const fileName = `${Date.now()}-${title.replace(/[<>:"/\\|?*]/g, '_')}.jpg`;
        
        const filePath = path.join(coversDir, fileName);
        
        if (!fs.existsSync(coversDir)) {
            fs.mkdirSync(coversDir, { recursive: true });
        }
        
        fs.writeFileSync(filePath, Buffer.from(buffer));

        const imageUrl = `/covers/${fileName}`; 
               
        return NextResponse.json({ src: imageUrl }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
