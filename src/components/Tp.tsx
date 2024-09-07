export default function TP({
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
          ? "/icons/primary/filled/tp.png"
          : "/icons/primary/outlined/tp.png"
      }
      alt="accessibilty"
      width={20}
      height={18}
    />
  );
}
