import { FaTableTennis } from "react-icons/fa";
import SportPage from "@/components/SportPage";

const rules = [
    "Each team must consist of 5 players. All players must be registered before the tournament begins.",
    "Boys tournament is conducted Inter-Departmental. Girls tournament is conducted Inter-Hostel.",
    "A valid College ID card is mandatory for every player. No ID means no participation.",
    "Players can only represent ONE department/hostel throughout the tournament. Cross-representation is strictly prohibited.",
    "Standard ITTF rules apply unless modified by the tournament committee. Any modifications will be communicated in advance.",
    "The match officialsʼ decisions are final and binding. Disputes must be raised through the team captain only.",
    "Teams must report to the venue at least 10 minutes before the scheduled match time. Delays beyond 10 minutes will result in a walkover.",
    "Unsportsmanlike behaviour, abusive language, or physical altercations will lead to immediate disqualification.",
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
    />
);

export default TableTennisPage;
