import { pb } from "@/utils/client";

export async function POST(request: Request) {
  const body = await request.json();
  const comment = await pb.collection("comments").create(body);
  return new Response(JSON.stringify(comment), { status: 201 });
}
