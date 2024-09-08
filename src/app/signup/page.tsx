"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signUp() {
    const req = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (req.ok) {
      router.push("/map");
    }
  }

  return (
    <div className="flex flex-col h-screen min-w-full justify-center items-center bg-[url('/images/landing.png')]">
      <div className="flex flex-col h-screen items-center justify-center w-2/3 mt-6">
        <nav className="flex flex-row gap-1.5 bottom-2 fixed text-black">
          <p className="font-bold font-fredoka">Already have an account?</p>
          <a className="underline" href="/signin">
            Log In
          </a>
        </nav>
        <section className="flex flex-col w-full justify-center items-center gap-y-10">
          <h1 className="font-bold text-5xl text-black">Sign Up</h1>
          <div className="flex flex-col w-full pt-2 gap-4">
            <input
              className="border border-[#A17063] placeholder-white rounded-md p-3 bg-[#BB8F83]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-[#A17063] placeholder-white rounded-md p-3 bg-[#BB8F83]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="text-white rounded-md px-6 py-3 bg-[#A17063]"
              onClick={signUp}
            >
              Sign Up
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
