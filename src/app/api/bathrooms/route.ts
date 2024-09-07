import { pb } from "@/utils/client";

export async function GET() {
  // Later: get list based on longitude and latitude
  const bathrooms = await pb.collection("bathrooms").getList();

  return new Response(JSON.stringify(bathrooms), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const bathroom = await pb.collection("bathrooms").create(data);

  return new Response(JSON.stringify(bathroom), {
    headers: {
      "content-type": "application/json",
    },
  });
}