"use client";

import { Address } from "@/components/Address";
import Star from "@/components/Star";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const [rating, setRating] = useState(0);

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
    </div>
  );
}
