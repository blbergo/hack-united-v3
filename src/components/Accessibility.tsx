export default function Accessibility({ filled = false }) {
  return (
    <img
      src={
        filled
          ? "/icons/primary/filled/star.png"
          : "/icons/primary/outlined/star.png"
      }
      alt="accessibilty"
      width={20}
      height={18}
    />
  );
}
