import { LatestbookingDummyData } from "@/dummydata/latest_booking";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(LatestbookingDummyData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "failed to load bookings" },
      { status: 500 }
    );
  }
}
