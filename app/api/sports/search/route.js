import { NextResponse } from "next/server";
import sports from "../data.json"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const filteredSports = sports.filter(sport => sport.title.toLowerCase().includes(query.toLowerCase()))
  return NextResponse.json(filteredSports)
}