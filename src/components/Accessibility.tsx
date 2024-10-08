export default function Accessibility({
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
          ? "/icons/primary/filled/accessibility.png"
          : "/icons/primary/outlined/accessibility.png"
      }
      alt="accessibilty"
      width={20}
      height={18}
    />
  );
}
