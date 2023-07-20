import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Set-Cookie": `session=; Max-Age=${-1}`,
    },
  })
}
