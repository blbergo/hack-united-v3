export default function Star({ filled = false }) {
  return <img src={filled ? "/icons/primary/filled/star.png" : "/icons/primary/outlined/star.png"} alt="star" width={20} height={18} />;
}
