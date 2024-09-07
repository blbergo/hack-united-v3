"use client";
import { useState } from "react";

export default function Page() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
  }
  
  return (
    <form className="flex flex-col gap-5">
      <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" className="border max-w-40"/>
      <input type="text" onChange={(e) => setPassword(e.target.value)} name="password" className="border max-w-40"/>
      <button onClick={login} className = "border max-w-40">Sign In</button>
    </form>
  );
}