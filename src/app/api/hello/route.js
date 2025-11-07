import {NextResponse} from "next/server";
import {getHelloMessage, postHelloMessage} from "@/lib/hello";

export async function GET() {
  const data = getHelloMessage();
  return NextResponse.json(data);
}

export async function POST(req) {
  const data = await req.json();
  const {name} = data;
  const message = postHelloMessage(name);
  return NextResponse.json(message);
}
