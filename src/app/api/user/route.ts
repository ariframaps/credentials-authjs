import { UserDummyData } from "@/dummydata/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(UserDummyData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "failed to load user" }, { status: 500 });
  }
}
