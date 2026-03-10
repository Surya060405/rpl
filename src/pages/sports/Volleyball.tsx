import { Volleyball } from "lucide-react";
import SportPage, { Pool } from "@/components/SportPage";
import matchesData from "@/data/fixtures/volleyball.json";

const rules = [
    "Each team must consist of 6 players and up to 2 substitutes. All players must be registered before the tournament begins.",
    "Boys tournament is conducted Inter-Departmental. Girls tournament is conducted Inter-Hostel.",
    "A valid College ID card is mandatory for every player. No ID means no participation.",
    "Players can only represent ONE department/hostel throughout the tournament. Cross-representation is strictly prohibited.",
    "Standard FIVB rules apply unless modified by the tournament committee. Any modifications will be communicated in advance.",
    "The match officialsʼ decisions are final and binding. Disputes must be raised through the team captain only.",
    "Teams must report to the venue at least 15 minutes before the scheduled match time. Delays beyond 10 minutes will result in a walkover.",
    "Unsportsmanlike behaviour, abusive language, or physical altercations will lead to immediate disqualification.",
];

const pools: Pool[] = [
    {
        name: "Pool A",
        gender: "Boys",
        teams: [
            { name: "MSC+PHD", played: 1, won: 1, lost: 0, pd: 12, points: 2 },
            { name: "AERO+ARCHI", played: 0, won: 0, lost: 0, pd: 0, points: 0 },
            { name: "ELECTRICAL+ETC", played: 0, won: 0, lost: 0, pd: 0, points: 0 },
            { name: "META+MINING", played: 1, won: 0, lost: 1, pd: -12, points: 0 },
        ],
    },
    {
        name: "Pool B",
        gender: "Boys",
        teams: [
            { name: "CST", played: 1, won: 1, lost: 0, pd: 13, points: 2 },
            { name: "MECHANICAL", played: 1, won: 1, lost: 0, pd: 8, points: 2 },
            { name: "IT", played: 0, won: 0, lost: 0, pd: 0, points: 0 },
            { name: "CIVIL", played: 2, won: 0, lost: 2, pd: -21, points: 0 },
        ],
    },
    {
        name: "Girls Pool",
        gender: "Girls",
        teams: [
            { name: "Sister Nivedita", played: 0, won: 0, lost: 0, pd: 0, points: 0 },
            { name: "Lt. Williams", played: 0, won: 0, lost: 0, pd: 0, points: 0 },
            { name: "Pandya Hall", played: 0, won: 0, lost: 0, pd: 0, points: 0 },
        ],
    },
];

const VolleyballPage = () => (
    <SportPage
        name="Volleyball"
        icon={Volleyball}
        category="outdoor"
        players="6 + 2 per team"
        tagline="Spikes, blocks, and relentless rallies."
        boyFormat="Inter-Departmental"
        girlFormat="Inter-Hostel"
        rules={rules}
        pools={pools}
        matches={matchesData}
        formLink="https://docs.google.com/forms/d/e/1FAIpQLSebrW3r17mW-58HW1YZ9lmik0Hg3smDhI3zT4iNx39E-imvQg/viewform?usp=publish-editor"
    />
);

export default VolleyballPage;
