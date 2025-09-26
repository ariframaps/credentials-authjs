import { ReservationsDummyData } from "@/dummydata/reservations";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        status_code: 200,
        data: ReservationsDummyData,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/reservations failed:", err);
    return NextResponse.json(
      {
        success: false,
        status_code: 500,
        errors: "Failed to load reservations",
      },
      { status: 500 }
    );
  }
}
