import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.CAL_API_KEY;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  if (!apiKey || !calLink) {
    return NextResponse.json({ error: "Missing configuration" }, { status: 500 });
  }

  try {
    // Extract username from link: https://cal.com/username/slug
    const urlParts = calLink.replace(/\/$/, "").split("/");
    const username = urlParts[urlParts.length - 2];

    // Fetch user info to get event types
    // Using v1 API for broad compatibility
    const response = await fetch(`https://api.cal.com/v1/event-types?apiKey=${apiKey}`);
    
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch event types" }, { status: response.status });
    }

    const data = await response.json();
    // Find the event type that matches our slug
    const eventSlug = urlParts[urlParts.length - 1];
    const eventType = data.event_types.find((et: any) => et.slug === eventSlug);

    if (!eventType) {
      return NextResponse.json({ error: "Event type not found" }, { status: 404 });
    }

    // Now fetch availability for this event type
    const dateFrom = new Date().toISOString();
    const dateTo = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // Look 7 days ahead

    const availResponse = await fetch(
      `https://api.cal.com/v1/availability?apiKey=${apiKey}&eventTypeId=${eventType.id}&dateFrom=${dateFrom}&dateTo=${dateTo}`
    );

    if (!availResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch availability" }, { status: availResponse.status });
    }

    const availData = await availResponse.json();
    return NextResponse.json({ 
      nextSlot: availData.slots?.[Object.keys(availData.slots)[0]]?.[0]?.time || null 
    });
  } catch (error) {
    console.error("Cal.com API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
