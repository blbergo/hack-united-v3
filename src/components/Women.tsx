
export default function Women({
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
          ? "/icons/primary/filled/women.png"
          : "/icons/primary/outlined/women.png"
      }
      alt="accessibilty"
      width={20}
      height={18}
    />
  );
}
