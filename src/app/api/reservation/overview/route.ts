import { ReservationsDummyData } from "@/dummydata/reservations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    return NextResponse.json(
      {
        success: true,
        status_code: 200,
        data: ReservationsDummyData,
      },
      { status: 200 }
    );
  } catch (_err) {
    return NextResponse.json(
      { error: "failed to load reservations" },
      { status: 500 }
    );
  }
}
