import { pb } from "@/utils/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const bathroom = await pb
    .collection("bathrooms")
    .getFirstListItem(`id="${id}"`);

  return new Response(JSON.stringify(bathroom), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const data = await request.json();
  const bathroom = await pb.collection("bathrooms").update(id, data);

  return new Response(JSON.stringify(bathroom), {
    headers: {
      "content-type": "application/json",
    },
  });
}
