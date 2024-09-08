"use client";

import Accessibility from "@/components/Accessibility";
import { Button, BUTTON_VARIANTS } from "@/components/Button";
import Men from "@/components/Men";
import Private from "@/components/Private";
import Star from "@/components/Star";
import TP from "@/components/Tp";
import Women from "@/components/Women";
import useBathroom from "@/hooks/useBathroom";
import Image from "next/image";
import Slider from "rc-slider";
import { useState } from "react";

import "rc-slider/assets/index.css";
import { BathroomsRecord, CommentsRecord } from "@/types/pocketbase";
import { useRouter } from "next/navigation";

const CLEANLINESS_LEVELS = ["Dangerous", "Smelly", "Clean", "Bougie"];

export default function Page({ params }: { params: { id: string } }) {
  const query = useBathroom(params.id);
  const bathroom = query.data;

  const router = useRouter();

  const [rating, setRating] = useState(0);
  const [accessibility, setAccessibility] = useState(false);
  const [hasWomen, setHasWomen] = useState(false);
  const [hasMen, setHasMen] = useState(false);
  const [hasTp, setHasTp] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cleanliness, setCleanliness] = useState(0);
  const [comment, setComment] = useState("");

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

  if (query.isSuccess && bathroom && !loaded) {
    setAccessibility(bathroom.is_accessible);
    setHasWomen(bathroom.has_women);
    setHasMen(bathroom.has_men);
    setHasTp(bathroom.has_tp);
    setIsPrivate(bathroom.is_private);
    setLoaded(true);
  }

  const submit = async () => {
    const commentData: CommentsRecord = {
      message: comment,
    };

    const createComment = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify(commentData),
    });

    const res = (await createComment.json()) as CommentsRecord;
    
    const data: BathroomsRecord = {
      overall_score: rating,
      is_accessible: accessibility,
      has_women: hasWomen,
      has_men: hasMen,
      has_tp: hasTp,
      is_private: isPrivate,
      cleanliness: CLEANLINESS_LEVELS[cleanliness],
      visitor_count: bathroom ? bathroom.visitor_count + 1 : 1,
      // @ts-expect-error - we know this is a string
      comments: bathroom ? [...bathroom.comments, res.id] : [res.id],
    };

    const updateBathroom = await fetch(`/api/bathrooms/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (updateBathroom.ok && createComment.ok) {
      router.replace(`/bathroom/${params.id}`);
    }
  };

  return (
    <div className="h-screen w-full">
      <div id="brick" />
      <div className="flex py-5 px-4 flex-col gap-y-4 rounded-xl w-full items-center mx-2 mt-[70px] bg-white">
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
          className="w-full"
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
        <div className="flex gap-4">
          <Accessibility
            filled={accessibility}
            onclick={() => {
              setAccessibility(!accessibility);
            }}
          />
          <Women
            filled={hasWomen}
            onclick={() => {
              setHasWomen(!hasWomen);
            }}
          />
          <Men
            filled={hasMen}
            onclick={() => {
              setHasMen(!hasMen);
            }}
          />
          <TP
            filled={hasTp}
            onclick={() => {
              setHasTp(!hasTp);
            }}
          />
          <Private
            filled={isPrivate}
            onclick={() => {
              setIsPrivate(!isPrivate);
            }}
          />
        </div>

        <textarea
          className="flex p-3 min-h-[60px] min-w-[250px] rounded-md"
          onChange={(e) => setComment(e.target.value)}
          style={{
            color: "#A17063",
            border: "1px solid var(--Color-Brand-accent, #BB8F83)",
            borderRadius: "5px",
          }}
          placeholder="Leave a comment"
        ></textarea>
        <Button
          variant={BUTTON_VARIANTS.SOLID}
          onclick={submit}
          className="py-2 px-4 font-bold"
        >
          Submit
        </Button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "468px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image width={184} height={200} src="/images/urinal.png" alt="urinal" />
      </div>
    </div>
  );
}
