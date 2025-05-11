import { Session } from "@/types/users";
import { NextResponse } from "next/server";
import {db} from "@/libs/db";

export async function POST(req: Request) {
    try {
        const { newUser }: { newUser: Session } = await req.json();

        if (!newUser.email || !newUser.password || !newUser.fullname) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const query = `
            INSERT INTO users (email, password, fullname)
            VALUES ($1, $2, $3)
        `;
        const values = [newUser.email, newUser.password, newUser.fullname];

        await db.query(query, values);

        return NextResponse.json(
            { message: 'User added successfully', success: true },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Internal Server Error', success: false },
            { status: 500 }
        );
    }
}
