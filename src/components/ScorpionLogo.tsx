import scorpionImg from "@/assets/Rich_Logo_Transparent.png";

const ScorpionLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <img
      src={scorpionImg}
      alt="RPL Scorpion Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default ScorpionLogo;
