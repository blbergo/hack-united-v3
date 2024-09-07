"use client";

import Accessibility from "@/components/Accessibility";
import Amenities from "@/components/Amenities";
import { Button, BUTTON_VARIANTS } from "@/components/Button";
import Men from "@/components/Men";
import Private from "@/components/Private";
import Review from "@/components/Review";
import TP from "@/components/Tp";
import Women from "@/components/Women";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const Comment = ({
  comment,
  setComment,
}: {
  comment: string;
  setComment: (val: string) => void;
}) => {
  return (
    <textarea
      className="flex p-3 min-h-[60px] min-w-[250px] rounded-md"
      placeholder="Type your message..."
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      style={{
        color: "#A17063",
        border: "1px solid var(--Color-Brand-accent, #BB8F83)",
        borderRadius: "5px",
      }}
    />
  );
};

const Page = () => {
  const { id } = useParams();
  const [reviewScore, setReviewScore] = useState(0);
  const [isAccessible, setIsAccessible] = useState(false);
  const [hasFemale, setHasFemale] = useState(false);
  const [hasMale, setHasMale] = useState(false);
  const [hasTP, setHasTP] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("bryan will submit this data");
  };
  const handleExit = () => {
    console.log("bryan will exit this page");
  };

  return (
    <div>
      <div id="brick" />
      <div
        onClick={handleExit}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      >
        <Image width={24} height={24} src="/icons/x.png" alt="urinal" />
      </div>
      <div
        className="flex min-w-[321px] py-5 px-4 flex-col items-start gap-4 rounded-xl "
        style={{ background: "#FAF9F9", margin: "71px 36px" }}
      >
        <Review reviewScore={reviewScore} setReviewScore={setReviewScore} />
        <div>Bar</div>
        <div className="flex gap-4">
          <Accessibility
            filled={isAccessible}
            onclick={() => setIsAccessible(!isAccessible)}
          />
          <Women filled={hasFemale} onclick={() => setHasFemale(!hasFemale)} />
          <Men filled={hasMale} onclick={() => setHasMale(!hasMale)} />
          <TP filled={hasTP} onclick={() => setHasTP(!hasTP)} />
          <Private
            filled={isPrivate}
            onclick={() => setIsPrivate(!isPrivate)}
          />
        </div>
        {/* <Amenities ameneties ={amenities} setAmenities={setAmenities} /> */}

        <Comment comment={comment} setComment={setComment} />
        <Button
          variant={BUTTON_VARIANTS.SOLID}
          onclick={handleSubmit}
          className="py-2 px-4"
        >
          <p>Enter</p>
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
};

export default Page;
