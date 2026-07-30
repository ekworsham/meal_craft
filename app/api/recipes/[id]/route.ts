import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Recipe API route is working.",
  });
}