import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Recipes API route is working.",
  });
}