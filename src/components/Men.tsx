
export default function Men({
  filled = false,
  onclick,
}: {
  filled?: boolean;
  onclick?: () => void;
}) {
  return (
    <img
      onClick={onclick}
      src={
        filled
          ? "/icons/primary/filled/men.png"
          : "/icons/primary/outlined/men.png"
      }
      alt="accessibilty"
      width={20}
      height={18}
    />
  );
}
