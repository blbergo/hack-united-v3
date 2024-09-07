import { pb } from "@/utils/client";

export async function POST(request: Request) {
  const data = await request.json();
  const bathroom = await pb.collection("bathrooms").create(data);

  return new Response(JSON.stringify(bathroom), {
    headers: {
      "content-type": "application/json",
    },
  });
}
