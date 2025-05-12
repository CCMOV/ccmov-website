import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "eventos.json");

async function readEvents() {
  try {
    const jsonData = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    // If file doesn't exist or other error, return empty array
    return [];
  }
}

async function writeEvents(events: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(events, null, 2), "utf-8");
}

// GET all events
export async function GET() {
  const events = await readEvents();
  return NextResponse.json(events);
}

// POST a new event
export async function POST(request: Request) {
  try {
    const newEvent = await request.json();
    const events = await readEvents();
    
    // Add a unique ID (simple timestamp-based ID for this example)
    newEvent.id = Date.now().toString();
    events.push(newEvent);
    await writeEvents(events);
    
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error("Failed to create event:", error);
    return NextResponse.json({ message: "Error creating event", error: (error as Error).message }, { status: 500 });
  }
}

