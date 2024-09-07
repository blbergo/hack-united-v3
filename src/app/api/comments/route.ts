import { pb } from "@/utils/client";

export async function POST(request: Request) {
  const body = await request.json();
  await pb.collection("comments").create(body);
  return new Response(null, { status: 201 });
}
