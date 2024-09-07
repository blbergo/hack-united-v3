export default function Star({
  filled = false,
  onClick,
}: {
  filled?: boolean;
  onClick?: () => void;
}) {
  return (
    <img
      onClick={onClick}
      src={
        filled
          ? "/icons/primary/filled/star.png"
          : "/icons/primary/outlined/star.png"
      }
      alt="star"
      width={20}
      height={18}
    />
  );
}
