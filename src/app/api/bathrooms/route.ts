import { pb } from "@/utils/client";
import { sortByDistance } from "@/utils/distance";

export async function POST(request: Request) {
  const body = await request.json();

  const lat = body.latitude;
  const long = body.longitude;
  const page = body.page;

  // TODO: filter by rendered lat long
  const query = await pb.collection("bathrooms").getList(page, 50);
  const bathrooms = sortByDistance(query.items, lat, long);
  
  return new Response(JSON.stringify(bathrooms), {
    headers: {
      "content-type": "application/json",
    },
  });
}
