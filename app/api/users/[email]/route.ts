import { db } from "@/libs/db";
import { User } from "@/types/users";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { email: string } }) {
    const { email } = params;

    try {
        const query = `
            SELECT * FROM users WHERE email = $1
        `;
        const values = [email];

        const result = await db.query(query, values);

        const users = result.rows as User[];

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { user: users[0] },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
