const ScorpionLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Metallic gradient for the body */}
        <linearGradient id="metallicBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="25%" stopColor="#9CA3AF" />
          <stop offset="50%" stopColor="#D1D5DB" />
          <stop offset="75%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        
        {/* Royal blue accent gradient */}
        <linearGradient id="royalBlueAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="50%" stopColor="#6B8DD6" />
          <stop offset="100%" stopColor="#4169E1" />
        </linearGradient>
        
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Shadow */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4169E1" floodOpacity="0.5" />
        </filter>
      </defs>
      
      {/* Main body - central oval */}
      <ellipse
        cx="50"
        cy="55"
        rx="18"
        ry="22"
        fill="url(#metallicBody)"
        stroke="url(#royalBlueAccent)"
        strokeWidth="1.5"
        filter="url(#shadow)"
      />
      
      {/* Body segments */}
      <ellipse cx="50" cy="48" rx="12" ry="6" fill="url(#metallicBody)" opacity="0.8" />
      <ellipse cx="50" cy="58" rx="14" ry="5" fill="url(#metallicBody)" opacity="0.8" />
      <ellipse cx="50" cy="67" rx="11" ry="4" fill="url(#metallicBody)" opacity="0.8" />
      
      {/* Tail - curved upward with segments */}
      <path
        d="M50 33 Q55 25, 60 20 Q68 12, 75 8 Q82 4, 85 8 Q88 12, 82 18"
        stroke="url(#metallicBody)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
      
      {/* Tail segments overlay */}
      <circle cx="52" cy="30" r="3.5" fill="url(#metallicBody)" stroke="url(#royalBlueAccent)" strokeWidth="0.5" />
      <circle cx="58" cy="22" r="3" fill="url(#metallicBody)" stroke="url(#royalBlueAccent)" strokeWidth="0.5" />
      <circle cx="66" cy="14" r="2.5" fill="url(#metallicBody)" stroke="url(#royalBlueAccent)" strokeWidth="0.5" />
      <circle cx="75" cy="9" r="2" fill="url(#metallicBody)" stroke="url(#royalBlueAccent)" strokeWidth="0.5" />
      
      {/* Stinger */}
      <path
        d="M82 18 L88 12 L84 20 Z"
        fill="url(#royalBlueAccent)"
        filter="url(#glow)"
      />
      
      {/* Pincers - Left */}
      <path
        d="M32 55 Q22 48, 15 42 Q10 38, 8 42 Q6 48, 12 52 Q18 56, 28 58"
        stroke="url(#metallicBody)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
      <path
        d="M8 42 L4 35 L10 40 Z"
        fill="url(#royalBlueAccent)"
        filter="url(#glow)"
      />
      
      {/* Pincers - Right */}
      <path
        d="M68 55 Q78 48, 85 42 Q90 38, 92 42 Q94 48, 88 52 Q82 56, 72 58"
        stroke="url(#metallicBody)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
      <path
        d="M92 42 L96 35 L90 40 Z"
        fill="url(#royalBlueAccent)"
        filter="url(#glow)"
      />
      
      {/* Legs - Left side */}
      <path d="M35 52 Q28 58, 22 62" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 58 Q26 65, 20 70" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 65 Q28 72, 22 78" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 72 Q32 80, 28 86" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      
      {/* Legs - Right side */}
      <path d="M65 52 Q72 58, 78 62" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      <path d="M66 58 Q74 65, 80 70" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 65 Q72 72, 78 78" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 72 Q68 80, 72 86" stroke="url(#metallicBody)" strokeWidth="2" strokeLinecap="round" />
      
      {/* Eyes - glowing royal blue */}
      <circle cx="44" cy="42" r="2.5" fill="url(#royalBlueAccent)" filter="url(#glow)" />
      <circle cx="56" cy="42" r="2.5" fill="url(#royalBlueAccent)" filter="url(#glow)" />
      <circle cx="44" cy="42" r="1" fill="white" opacity="0.8" />
      <circle cx="56" cy="42" r="1" fill="white" opacity="0.8" />
    </svg>
  );
};

export default ScorpionLogo;
