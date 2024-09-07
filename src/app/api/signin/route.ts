import { pb } from "@/utils/client";

export async function POST(request: Request) {
    const body = await request.json();

    await pb.collection("users").authWithPassword(body.email, body.password);

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);

    return new Response(JSON.stringify({}), {
        headers: {
          "content-type": "application/json",
        },
    });
}