"use client";
import { useState } from "react";

export default function Page() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email, 
        password
      })
    })
  }

  return (
    <div className="flex flex-col min-h-screen min-w-screen justify-center items-center bg-[url('/assets/landing.png')]">
      <div className="flex flex-col h-screen items-center w-2/3 mt-6">
        <nav className="flex flex-row gap-1.5 top-6">
          <p className="font-bold font-fredoka">Already have an account?</p>
          <a className="underline" href="/signin">Log In</a>
        </nav>
        <section className="flex flex-col w-full min-h-screen justify-center items-center gap-y-10">
          <h1 className="font-bold text-5xl">Sign Up</h1>
          <form className="flex flex-col w-full pt-2 gap-4">
            <input className="border border-[#A17063] placeholder-white rounded-md p-3 bg-[#BB8F83]" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="border border-[#A17063] placeholder-white rounded-md p-3 bg-[#BB8F83]" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="text-white rounded-md px-6 py-3 bg-[#A17063]" onClick={signUp}>Sign Up</button>
          </form>
          <div className="flex flex-col w-full pt-10 gap-y-4">
            <button className="rounded-md px-6 py-3 bg-[#D6B992]">Sign up with Google</button>
            <button className="rounded-md px-6 py-3 bg-[#D6B992]">Sign up with Facebook</button>
            <button className="rounded-md px-6 py-3 bg-[#D6B992]">Sign up with Apple</button>
          </div>
        </section>
      </div>
    </div>
  );
}
