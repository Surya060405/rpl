import { MdSportsCricket } from "react-icons/md";
import SportPage from "@/components/SportPage";

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
        formLink="https://docs.google.com/forms/d/118AoY1oh--rrCyikZAJH7kM2AddFw4EYb9Fp5vmskJ4/edit"
    />
);

export default Cricket;
