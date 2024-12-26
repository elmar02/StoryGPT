import { Session } from "@/types/users";
import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import { db } from "@/libs/db";
import { decryptValue, encryptValue } from "@/libs/crypto";
import { authKey } from "@/libs/keys";

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
            VALUES (?, ?, ?)
        `;
        const values = [newUser.email, newUser.password, newUser.fullname];
        const connection = await db.getConnection()
        const [result] = await connection.execute(query, values);


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