import { sessionCheck } from "@/lib/actions/sessionCheck";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await sessionCheck();
    return NextResponse.json(
      {
        success: true,
        status_code: 200,
        data: user,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/user failed:", err);
    return NextResponse.json(
      {
        success: false,
        status_code: 500,
        errors: "Failed to load user",
      },
      { status: 500 }
    );
  }
}
