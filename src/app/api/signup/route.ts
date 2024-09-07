import { pb } from "@/utils/client"

export async function POST(request: Request) {
    const body = await request.json();

    const user = {
      email: body.email,
      password: body.password,
      passwordConfirm: body.password
    };

    const record = pb.collection("users").create(user);

    return new Response(JSON.stringify(record), {
        headers: {
          "content-type": "application/json",
        },
    });
}