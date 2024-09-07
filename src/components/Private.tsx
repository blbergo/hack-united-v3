export default function Private({
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
          ? "/icons/primary/filled/private.png"
          : "/icons/primary/outlined/private.png"
      }
      alt="accessibilty"
      width={20}
      height={18}
    />
  );
}
