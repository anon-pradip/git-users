import { NextResponse } from "next/server";
import sports from "./data.json"
import Link from "next/link";

export async function GET(request) {
  return NextResponse.json(sports)
}