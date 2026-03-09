import { FaTableTennis } from "react-icons/fa";
import SportPage, { Pool } from "@/components/SportPage";
import matchesData from "@/data/fixtures/tabletennis.json";

const rules = [
    "Each team must consist of 5 players. All players must be registered before the tournament begins.",
    "Boys tournament is conducted Inter-Departmental. Girls tournament is conducted Inter-Hostel.",
    "Winning Team: 3 Points | Losing Team: 0 Points. Round Difference between the teams is a deciding factor.",
    "A valid College ID card is mandatory for every player. No ID means no participation.",
    "Players can only represent ONE department/hostel throughout the tournament. Cross-representation is strictly prohibited.",
    "Standard ITTF rules apply unless modified by the tournament committee. Any modifications will be communicated in advance.",
    "The match officialsʼ decisions are final and binding. Disputes must be raised through the team captain only.",
    "Teams must report to the venue at least 10 minutes before the scheduled match time. Delays beyond 10 minutes will result in a walkover.",
    "Unsportsmanlike behaviour, abusive language, or physical altercations will lead to immediate disqualification.",
];

const pools: Pool[] = [
    {
        name: "Pool A",
        gender: "Boys",
        teams: [
            { name: "IT", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "PHD+MSC", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "META+MINING", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "ETC", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "MECHANICAL", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
        ],
    },
    {
        name: "Pool B",
        gender: "Boys",
        teams: [
            { name: "AERO+ARCHI", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "ELECTRICAL", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "CIVIL", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "MTECH", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "CST", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
        ],
    },
    {
        name: "Girls Pool",
        gender: "Girls",
        teams: [
            { name: "Pandya Hall", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "Lt. Williams", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
            { name: "Sister Nivedita", played: 0, won: 0, lost: 0, rd: 0, points: 0 },
        ],
    },
];

const TableTennisPage = () => (
    <SportPage
        name="Table Tennis"
        icon={FaTableTennis}
        category="indoor"
        players="5 per team"
        tagline="Lightning reflexes meet pinpoint precision."
        boyFormat="Inter-Departmental"
        girlFormat="Inter-Hostel"
        rules={rules}
        pools={pools}
        matches={matchesData}
        formLink="https://forms.gle/dCSmgnSu2phQc3mXA"
    />
);

export default TableTennisPage;
