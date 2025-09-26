import { LatestbookingDummyData } from "@/dummydata/latest_booking";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        status_code: 200,
        data: LatestbookingDummyData,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/latest-booking failed:", err);
    return NextResponse.json(
      {
        success: false,
        status_code: 500,
        errors: "Failed to load bookings",
      },
      { status: 500 }
    );
  }
}
