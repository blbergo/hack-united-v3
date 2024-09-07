"use client";

import Accessibility from "@/components/Accessibility";
import { Address } from "@/components/Address";
import Men from "@/components/Men";
import Private from "@/components/Private";
import Star from "@/components/Star";
import TP from "@/components/Tp";
import Women from "@/components/Women";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();

  const [rating, setRating] = useState(0);
  const [accessibility, setAccessibility] = useState(false);
  const [hasWomen, setHasWomen] = useState(false);
  const [hasMen, setHasMen] = useState(false);
  const [hasTp, setHasTp] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col bg-white px-5">
      <button className="mt-[10px]" onClick={() => router.back()}>
        <Image src="/icons/x.png" alt="back" width={24} height={24} />
      </button>
      <Address />
      <span className="flex flex-row gap-x-4 mt-[17px]">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            onClick={() => {
              if (rating === index) {
                setRating(0);
              } else {
                setRating(index);
              }
            }}
          >
            <Star filled={index <= rating} />
          </div>
        ))}
      </span>
      <span className="mt-[14px] gap-x-4 flex flex-row">
        <Accessibility
          filled={accessibility}
          onclick={() => setAccessibility(!accessibility)}
        />
        <Women filled={hasWomen} onclick={() => setHasWomen(!hasWomen)} />
        <Men filled={hasMen} onclick={() => setHasMen(!hasMen)} />
        <TP filled={hasTp} onclick={() => setHasTp(!hasTp)} />
        <Private filled={isPrivate} onclick={() => setIsPrivate(!isPrivate)} />
      </span>
    </div>
  );
}
