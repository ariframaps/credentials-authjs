import { LatestbookingDummyData } from "@/dummydata/latest_booking";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    return NextResponse.json(
      {
        success: true,
        status_code: 200,
        data: LatestbookingDummyData,
      },
      { status: 200 }
    );
  } catch (_err) {
    return NextResponse.json(
      { error: "failed to load bookings" },
      { status: 500 }
    );
  }
}
