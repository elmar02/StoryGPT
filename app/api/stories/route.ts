import { db } from "@/libs/db";
import { NewStory, Story } from "@/types/story";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");
  
  try {
    const connection = await db.getConnection()

    let query = "SELECT * FROM stories";
    let values: string[] = [];

    if (userId) {
      query += " WHERE userId = ?";
      values.push(userId);
    }

    query += " ORDER BY id DESC";
    const [rows] = await connection.execute(query, values);
    const stories = rows as Story[]

    return NextResponse.json(
      { stories },
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

export async function POST(req: Request) {
  try {
      const { newStory }: { newStory: NewStory } = await req.json();

      if (!newStory.title || !newStory.length || !newStory.description || !newStory.genre || !newStory.coverUrl || !newStory.userId) {
          return NextResponse.json(
              { success: false, message: "Missing required fields" },
              { status: 400 }
          );
      }

      const query = `
          INSERT INTO stories (title, length, description, genre, coverUrl, userId)
          VALUES (?, ?, ?, ?, ?, ?)
      `;
      const values = [
          newStory.title,
          newStory.length,
          newStory.description,
          newStory.genre,
          newStory.coverUrl,
          newStory.userId,
      ];

      const connection = await db.getConnection()

      const [result]: any = await connection.execute(query, values);

      return NextResponse.json(
          {
              id: result.insertId,
              success: true,
              message: "Story created successfully",
          },
          { status: 201 }
      );
  } catch (error) {
      console.error(error);
      return NextResponse.json(
          { success: false, message: "Internal Server Error" },
          { status: 500 }
      );
  }
}