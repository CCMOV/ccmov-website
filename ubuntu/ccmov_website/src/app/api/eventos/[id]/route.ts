import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "eventos.json");

async function readEvents() {
  try {
    const jsonData = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
}

async function writeEvents(events: any[]) {
  await fs.writeFile(dataFilePath, JSON.stringify(events, null, 2), "utf-8");
}

// GET a single event by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const events = await readEvents();
  const event = events.find((e: any) => e.id === params.id);
  if (event) {
    return NextResponse.json(event);
  } else {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }
}

// PUT (update) an event by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const updatedEventData = await request.json();
    let events = await readEvents();
    const eventIndex = events.findIndex((e: any) => e.id === params.id);

    if (eventIndex === -1) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    // Ensure the ID is not changed by the update
    events[eventIndex] = { ...events[eventIndex], ...updatedEventData, id: params.id };
    await writeEvents(events);
    return NextResponse.json(events[eventIndex]);
  } catch (error) {
    console.error("Failed to update event:", error);
    return NextResponse.json({ message: "Error updating event", error: (error as Error).message }, { status: 500 });
  }
}

// DELETE an event by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    let events = await readEvents();
    const initialLength = events.length;
    events = events.filter((e: any) => e.id !== params.id);

    if (events.length === initialLength) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    await writeEvents(events);
    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Failed to delete event:", error);
    return NextResponse.json({ message: "Error deleting event", error: (error as Error).message }, { status: 500 });
  }
}

