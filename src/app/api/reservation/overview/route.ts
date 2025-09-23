import { ReservationsDummyData } from "@/dummydata/reservations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(ReservationsDummyData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "failed to load reservations" },
      { status: 500 }
    );
  }
}
