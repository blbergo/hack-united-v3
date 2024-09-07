import Image from "next/image";
import Review from "./Review";
import { useState } from "react";
import Accessibility from "./Accessibility";
import Women from "./Women";
import Men from "./Men";
import TP from "./Tp";
import Private from "./Private";
import { Button, BUTTON_VARIANTS } from "./Button";
import Slider from "rc-slider";

const Filter = ({
  setShowFilter,
}: {
  setShowFilter: (val: boolean) => void;
}) => {
  const [reviewScore, setReviewScore] = useState(0);
  const [isAccessible, setIsAccessible] = useState(false);
  const [hasFemale, setHasFemale] = useState(false);
  const [hasMale, setHasMale] = useState(false);
  const [hasTP, setHasTP] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [cleanliness, setCleanliness] = useState(0);

  const CLEANLINESS_LEVELS = ["Dangerous", "Smelly", "Clean", "Bougie"];

  const handleFilter = () => {
    console.log("Filtering");
    setShowFilter(false);
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 3,
        width: "100vw",
        minHeight: "400px",
        borderRadius: "0 0 20px 20px",
        background: " var(--Color-Brand-Button, #A17063)",
      }}
    >
      <Image
        onClick={() => setShowFilter(false)}
        src={"/icons/x.png"}
        alt="exit"
        width={30}
        height={30}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      />
      <div
        className="flex-col gap-5 p-5"
        style={{
          display: "flex",
          position: "relative",
          top: "60px",
          left: "50%",
          transform: "translate(-50%,0)",
          zIndex: 5,
          minHeight: "220px",
          width: "340px",
          borderRadius: "20px",
          background: "white",
        }}
      >
        <Review reviewScore={reviewScore} setReviewScore={setReviewScore} />
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
        <div
          style={{
            width: "300px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p className="font-bold text-xl text-black">Cleanliness</p>
          <span className="w-full flex flex-row justify-center">
            <p className="bg-primary text-white font-bold text-lg p-2 rounded-lg">
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
        </div>
      </div>
      <Button
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 6,
          background: "#BB8F83",
          padding: "12px 24px",
          borderRadius: "10px",
        }}
        variant={BUTTON_VARIANTS.SOLID}
        onclick={handleFilter}
      >
        Filter
      </Button>
    </div>
  );
};

export default Filter;
