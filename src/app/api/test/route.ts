import { pb } from "@/utils/client";

export async function GET(request: Request) {
  const resultList = await pb.collection("users").getList(1, 50);

  return new Response(JSON.stringify(resultList), {
    headers: {
      "content-type": "application/json",
    },
  });
}