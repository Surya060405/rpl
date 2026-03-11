import { MdSportsCricket } from "react-icons/md";
import SportPage, { Pool } from "@/components/SportPage";
import matchesData from "@/data/fixtures/cricket.json";

const rules = [
    "RPL Inter-Departmental Cricket Jersey is mandatory to participate. No Jersey means No Participation.",
    "Each team must consist of 11 players and up to 4 substitutes. All players must be registered before the tournament begins.",
    "Boys tournament is conducted Inter-Departmental. Girls tournament is conducted Inter-Hostel.",
    "A valid College ID card is mandatory for every player. No ID means no participation.",
    "Players can only represent ONE department/hostel throughout the tournament. Cross-representation is strictly prohibited.",
    "The match officialsʼ decisions are final and binding. Any disputes must be raised through the team captain only.",
    "Use of abusive language, unsportsmanlike behaviour, or physical altercations will result in immediate disqualification of the player and possible team penalty.",
    "Teams must report to the venue at least 15 minutes before the scheduled match time. Delays beyond 10 minutes will result in a walkover.",
    "Matches will follow standard BCCI/ICC rules unless modified by the tournament committee. Any rule modifications will be communicated before the start.",
];

const pools: Pool[] = [
    {
        name: "Pool A",
        gender: "Boys",
        teams: [
            { name: "MSC+PHD", played: 3, won: 3, lost: 0, nrr: 4.056, points: 6, qualified: true },
            { name: "MECHANICAL", played: 3, won: 2, lost: 1, nrr: 2.595, points: 4 },
            { name: "ELECTRICAL", played: 3, won: 2, lost: 1, nrr: 2.164, points: 4 },
            { name: "AERO+ARCHI", played: 4, won: 1, lost: 3, nrr: -5.875, points: 2 },
            { name: "CST", played: 3, won: 0, lost: 3, nrr: -2.476, points: 0 },
        ],
    },
    {
        name: "Pool B",
        gender: "Boys",
        teams: [
            { name: "CIVIL", played: 3, won: 3, lost: 0, nrr: 4.278, points: 6, qualified: true },
            { name: "META+MINING", played: 3, won: 2, lost: 1, nrr: -0.346, points: 4 },
            { name: "ETC", played: 2, won: 1, lost: 1, nrr: 1.042, points: 2 },
            { name: "IT", played: 3, won: 1, lost: 2, nrr: -0.626, points: 2 },
            { name: "MTECH", played: 3, won: 0, lost: 3, nrr: -4.111, points: 0 },
        ],
    },
    {
        name: "Girls Pool",
        gender: "Girls",
        teams: [
            { name: "Pandya Hall", played: 0, won: 0, lost: 0, points: 0 },
            { name: "Lt. Williams", played: 0, won: 0, lost: 0, points: 0 },
            { name: "Sister Nivedita", played: 0, won: 0, lost: 0, points: 0 },
        ],
    },
];

const Cricket = () => (
    <SportPage
        name="Cricket"
        icon={MdSportsCricket}
        category="outdoor"
        players="11 + 4 per team"
        tagline="The clash of willow and leather."
        boyFormat="Inter-Departmental"
        girlFormat="Inter-Hostel"
        rules={rules}
        pools={pools}
        matches={matchesData}
        formLink="https://forms.gle/s2zR3bBXy9Azb4jc9"
    />
);

export default Cricket;
