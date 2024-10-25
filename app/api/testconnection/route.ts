// app/api/testconnection/route.ts
import { NextResponse } from "next/server";
import getDbConnection from "../../../lib/db";

export async function GET() {
  try {
    await getDbConnection();
    return NextResponse.json({ message: "Database connection established successfully!" });
  } catch (error:any) {
    console.error("Error in database connection:", error);
    return NextResponse.json(
      { message: "Database connection failed!", error: error.message },
      { status: 500 }
    );
  }
}
