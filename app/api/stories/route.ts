import { db } from "@/libs/db";
import { NewStory, Story } from "@/types/story";
import { NextResponse } from "next/server";

// GET: Fetch stories, optionally filtered by userId
export async function GET(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");
  
  try {
    let query = "SELECT * FROM stories";
    let values: string[] = [];

    if (userId) {
      query += ' WHERE "userId" = $1';
      values.push(userId);
    }

    query += " ORDER BY id DESC";
    const result = await db.query(query, values);
    const stories = result.rows as Story[];

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

// POST: Create a new story
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
      INSERT INTO stories ("title", "length", "description", "genre", "coverUrl", "userId")
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
    `;
    const values = [
      newStory.title,
      newStory.length,
      newStory.description,
      newStory.genre,
      newStory.coverUrl,
      newStory.userId,
    ];

    const result = await db.query(query, values);
    const newStoryId = result.rows[0].id;

    return NextResponse.json(
      {
        id: newStoryId,
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
