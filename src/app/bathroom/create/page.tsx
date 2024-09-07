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
import { Fredoka } from "next/font/google";
import { Button, BUTTON_VARIANTS } from "@/components/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const CLEANLINESS_LEVELS = ["Dangerous", "Smelly", "Clean", "Bougie"];

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();

  const [rating, setRating] = useState(0);
  const [accessibility, setAccessibility] = useState(false);
  const [hasWomen, setHasWomen] = useState(false);
  const [hasMen, setHasMen] = useState(false);
  const [hasTp, setHasTp] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [dryerType, setDryerType] = useState("NONE");
  const [toiletCount, setToiletCount] = useState(1);
  const [urinalCount, setUrinalCount] = useState(0);
  const [urinalType, setUrinalType] = useState("NONE");
  const [cleanliness, setCleanliness] = useState(0);

  return (
    <div
      className={`w-full h-screen flex flex-col bg-white px-5 ${fredoka.className}`}
    >
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
      <p className="text-xl font-bold text-black mt-[14px]">Dryer Type</p>
      <span className="mt-[5x] gap-x-4 flex flex-row">
        {["AIR", "PAPER", "HAND", "NONE"].map((type) => (
          <Button
            onclick={() => setDryerType(type)}
            variant={
              dryerType === type
                ? BUTTON_VARIANTS.SOLID
                : BUTTON_VARIANTS.OUTLINE
            }
            key={type}
          >
            <p className="py-2 px-4 font-bold">{type}</p>
          </Button>
        ))}
      </span>

      <p className="text-xl font-bold text-black mt-[14px]">Toilet Count</p>
      <span className="mt-[5px] gap-x-4 flex flex-row">
        <Image src={"/icons/toilet.png"} alt="minus" width={51} height={51} />
        <input
          type="number"
          onChange={(e) => setToiletCount(Number(e.target.value))}
          value={toiletCount}
          className="text-primary w-[50px] font-bold text-xl"
        />
        <Image src={"/icons/urinal.png"} alt="plus" width={46} height={51} />
        <input
          type="number"
          onChange={(e) => setUrinalCount(Number(e.target.value))}
          value={urinalCount}
          className="text-primary w-[50px] font-bold text-xl"
        />
      </span>

      {urinalCount > 0 && (
        <>
          <p className="text-xl font-bold text-black mt-[14px]">Urinal Type</p>
          <span className="mt-[5px] gap-x-4 flex flex-row">
            {["DIVIDED", "UNDIVIDED", "NONE"].map((type) => (
              <Button
                onclick={() => setUrinalType(type)}
                variant={
                  urinalType === type
                    ? BUTTON_VARIANTS.SOLID
                    : BUTTON_VARIANTS.OUTLINE
                }
                key={type}
              >
                <p className="py-2 px-4 font-bold">{type}</p>
              </Button>
            ))}
          </span>
        </>
      )}
      <p className="font-bold text-xl text-black">Cleanliness</p>
      <span className="w-full flex flex-row justify-center">
        <p className="bg-primary text-secondary font-bold text-lg p-2 rounded-lg">
          {CLEANLINESS_LEVELS[cleanliness]}
        </p>
      </span>
      <Slider
        onChange={(value) => setCleanliness(value as number)}
        min={0}
        max={3}
        styles={{
          track: {
            backgroundColor: "#A17063",
          },
          rail: {
            backgroundColor: "#D6B992",
          },
          handle: {
            backgroundColor: "#A17063",
          },
        }}
        dotStyle={{
          backgroundColor: "#A17063",
        }}
      />
      <span className="flex flex-row w-full justify-center">
        <Button
          className="mt-[20px] w-fit p-3 font-bold"
          variant={BUTTON_VARIANTS.SOLID}
        >
          Submit
        </Button>
      </span>
    </div>
  );
}
