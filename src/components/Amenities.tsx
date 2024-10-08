import { useState } from "react";

interface AmenitiesProps {
  children: React.ReactNode;
  onclick?: () => void;
}
const Amenities = ({ children, onclick }: AmenitiesProps) => {
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle the checked status

  return (
    <div className="flex gap-2 items-center">
      <input
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
        type="checkbox"
        className="w-4 h-4"
        style={{ border: "1px solid var(--Color-Brand-Button, #A17063)" }}
      />
      {children}
    </div>
  );
};

export default Amenities;
