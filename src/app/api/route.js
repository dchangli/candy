import { NextResponse } from "next/server";

var MyRequests = [];

export async function POST(request) {
  const data = await request.json();
  MyRequests.push(data)

  return Response.json({status: 200});
}

export async function GET(request) {
    const requestsCopy = [...MyRequests];

    MyRequests = [];

    return Response.json(requestsCopy);
}