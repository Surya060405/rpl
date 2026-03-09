import SportPage from "@/components/SportPage";

// Inline BadmintonIcon reused from Events.tsx
const BadmintonIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <ellipse cx="22" cy="20" rx="14" ry="17" fill="none" stroke="currentColor" strokeWidth="2.8" />
        <line x1="14" y1="5" x2="14" y2="35" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="19" y1="3" x2="19" y2="37" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="24" y1="3" x2="24" y2="37" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="29" y1="5" x2="29" y2="35" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="8" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="8" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="8" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M17 37 L20 44 L24 44 L27 37" stroke="currentColor" strokeWidth="2.4" fill="none" />
        <rect x="19.5" y="44" width="5" height="16" rx="2.5" fill="currentColor" />
        <circle cx="50" cy="52" r="4" fill="currentColor" />
        <path d="M50 48 C46 42 38 36 36 30" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M50 48 C47 41 43 33 44 26" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M50 48 C51 41 52 33 56 28" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M50 48 C53 42 60 37 62 32" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M36 30 Q44 22 56 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.8" />
        <path d="M38 27 Q50 20 62 32" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.5" />
    </svg>
);

const rules = [
    "Badminton will be conducted Inter-Departmental and will be Mixed (Boys + Girls).",
    "Each department will field a team of 5 members: 3 Boys and 2 Girls. This composition is mandatory.",
    "A valid College ID card is mandatory for every player. No ID means no participation.",
    "Players can only represent ONE department throughout the tournament. Cross-representation is strictly prohibited.",
    "Standard BWF (Badminton World Federation) rules apply unless modified by the tournament committee. Any modifications will be communicated in advance.",
    "The match officialsʼ decisions are final and binding. Disputes must be raised through the team captain only.",
    "Teams must report to the venue at least 10 minutes before the scheduled match time. Delays beyond 10 minutes will result in a walkover.",
    "Unsportsmanlike behaviour, abusive language, or physical altercations will lead to immediate disqualification.",
];

import matchesData from "@/data/fixtures/badminton.json";

const BadmintonPage = () => (
    <SportPage
        name="Badminton"
        icon={BadmintonIcon}
        category="indoor"
        players="5 per team (3 Boys + 2 Girls)"
        tagline="Swift smashes and delicate drops — Mixed Inter-Departmental."
        boyFormat="Inter-Departmental (Mixed)"
        girlFormat="Inter-Departmental (Mixed)"
        rules={rules}
        matches={matchesData}
        formLink="https://forms.gle/pkFTftw9G863Cyuh7"
    />
);

export default BadmintonPage;
