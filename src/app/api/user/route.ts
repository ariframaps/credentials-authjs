import { UserDummyData } from "@/dummydata/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    return NextResponse.json(
      {
        success: true,
        status_code: 200,
        data: UserDummyData,
      },
      { status: 200 }
    );
  } catch (_err) {
    return NextResponse.json({ error: "failed to load user" }, { status: 500 });
  }
}
