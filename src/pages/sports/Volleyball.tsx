import { Volleyball } from "lucide-react";
import SportPage from "@/components/SportPage";

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
    />
);

export default VolleyballPage;
