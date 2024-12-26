import { db } from "@/libs/db";
import { Story } from "@/types/story";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    // Query the story by ID
    const query = `SELECT * FROM stories WHERE id = ?`;
    const connection = await db.getConnection()

    const [rows] = await connection.execute(query, [id]);

    const stories = rows as Story[];

    if (stories.length === 0) {
      return NextResponse.json(
        { story: null, message: "Story not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { story: stories[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}