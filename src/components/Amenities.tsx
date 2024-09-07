interface AmenitiesProps {
  children: React.ReactNode;
}
const Amenities = ({ children }: AmenitiesProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className="w-4 h-4"
        style={{ border: "1px solid var(--Color-Brand-Button, #A17063)" }}
      />
      {children}
    </div>
  );
};

export default Amenities;
