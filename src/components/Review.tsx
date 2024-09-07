import React from "react";
import Star from "./Star";
interface ReviewParams {
  reviewScore: number;
  setReviewScore: (value: number) => void;
}
const Review = ({ reviewScore, setReviewScore }: ReviewParams) => {
  const handleScore = (inputScore: number) => {
    if (inputScore == 1 && reviewScore == 1) {
      setReviewScore(0);
    } else {
      setReviewScore(inputScore);
    }
  };
  return (
    <div className="flex gap-4">
      <Star filled={reviewScore > 0} onClick={() => handleScore(1)} />
      <Star filled={reviewScore > 1} onClick={() => handleScore(2)} />
      <Star filled={reviewScore > 2} onClick={() => handleScore(3)} />
      <Star filled={reviewScore > 3} onClick={() => handleScore(4)} />
      <Star filled={reviewScore > 4} onClick={() => handleScore(5)} />
    </div>
  );
};

export default Review;
