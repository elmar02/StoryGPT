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

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        
        const buffer = await response.arrayBuffer();

        const coversDir = path.join(process.cwd(), 'public', 'covers');

        const fileName = `${Date.now()}-${title.replace(/\s+/g, '_')}.jpg`;

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
