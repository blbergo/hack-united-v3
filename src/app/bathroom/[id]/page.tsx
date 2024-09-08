"use client";

import Accessibility from "@/components/Accessibility";
import { Button, BUTTON_VARIANTS } from "@/components/Button";
import Men from "@/components/Men";
import Private from "@/components/Private";
import Star from "@/components/Star";
import TP from "@/components/Tp";
import Women from "@/components/Women";
import useBathroom from "@/hooks/useBathroom";
import { CommentsRecord } from "@/types/pocketbase";
import { Fredoka } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "rc-slider/assets/index.css";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const query = useBathroom(params.id);
  const bathroom = query.data;

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return (
      <div>
        Error: {query.error ? query.error.message : "An error occurred"}
      </div>
    );
  }

  return (
    <div className={`${fredoka.className} w-full h-screen bg-white p-5`}>
      <button className="mt-[10px]" onClick={() => router.push("/map")}>
        <Image src="/icons/x.png" alt="back" width={24} height={24} />
      </button>
      {query.isSuccess && bathroom && (
        <>
          <h1 className="font-bold text-black text-5xl">{bathroom.name}</h1>
          <Image
            src={"/images/bathroom.png"}
            alt={bathroom.name}
            width={212}
            height={317}
          />
          <span className="flex flex-row gap-x-4 mt-[10px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star filled={i <= bathroom.overall_score} key={i} />
            ))}
            <p className="text-primary font-bold">{bathroom.visitor_count}</p>
          </span>
          <p className="text-black font-bold text-xl">
            Scent: {bathroom.cleanliness}
          </p>
          <span className="flex flex-row gap-x-4">
            <Accessibility filled={bathroom.is_accessible} />
            <Women filled={bathroom.has_women} />
            <Men filled={bathroom.has_men} />
            <TP filled={bathroom.has_tp} />
            <Private filled={bathroom.is_private} />
          </span>
          <p className="text-black font-bold text-xl">Dryer Type</p>
          <span className="flex flex-row gap-x-4">
            {["AIR", "PAPER", "HAND", "NONE"].map((type) => (
              <button
                disabled
                className={`${
                  bathroom.dryer_type === type
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                } py-2 px-4 font-bold rounded-lg`}
                key={type}
              >
                {type}
              </button>
            ))}
          </span>
          <span className="flex flex-row gap-x-4 mt-[10px] items-center">
            <Image
              src="/icons/toilet.png"
              alt="toilet"
              width={51}
              height={51}
            />
            <p className="text-primary font-bold text-xl">
              {bathroom.number_of_stalls}
            </p>
            <Image
              src="/icons/urinal.png"
              alt="urinal"
              width={51}
              height={51}
            />
            <p className="text-primary font-bold text-xl">
              {bathroom.number_of_urinals}
            </p>
          </span>
          <Button
            onclick={() => {
              router.push(`/bathroom/create/${bathroom.id}/review`);
            }}
            variant={BUTTON_VARIANTS.SOLID}
            className="mt-[10px] p-3 font-bold"
          >
            Leave A Review
          </Button>
          <div className="bg-slate-200 rounded-lg p-2 flex flex-col gap-y-3 mt-[10px]">
            {bathroom.comments.length > 0 &&
              (bathroom.expand.comments as CommentsRecord[]).map(
                (comment, idx) => (
                  <div key={idx} className="mt-[10px]">
                    <p className="text-black font-bold text-xl">
                      &quot;{comment.message}&quot; - Bryan Bergo
                    </p>
                  </div>
                )
              )}
          </div>
        </>
      )}
    </div>
  );
}
