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

const Comment = () => {
  return (
    <textarea
      className="flex p-3 min-h-[60px] min-w-[250px] rounded-md"
      style={{
        color: "#A17063",
        border: "1px solid var(--Color-Brand-accent, #BB8F83)",
        borderRadius: "5px",
      }}
    >
      Type your message...
    </textarea>
  );
};

const page = () => {
  return (
    <div>
      <div id="brick" />
      <div
        className="flex min-w-[321px] py-5 px-4 flex-col items-start gap-4 rounded-xl "
        style={{ background: "#FAF9F9", margin: "71px 36px" }}
      >
        <Review />
        <div>Bar</div>
        <div className="flex gap-4">
          <Accessibility />
          <Women />
          <Men />
          <TP />
          <Private />
        </div>
        <Amenities>
          <p style={{ color: "#A17063" }}>Girly pop stuff</p>
        </Amenities>
        <Comment />
        <Button
          variant={BUTTON_VARIANTS.SOLID}
          onclick={() => console.log("clicked")}
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

export default page;
