import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Trophy,
  Volleyball
} from "lucide-react";
import { MdSportsCricket } from "react-icons/md";
import { FaTableTennis } from "react-icons/fa";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

// Custom Badminton icon combining racket + shuttlecock
const BadmintonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Racket head (oval) */}
    <ellipse cx="22" cy="20" rx="14" ry="17" fill="none" stroke="currentColor" strokeWidth="2.8" />
    {/* Racket strings - vertical */}
    <line x1="14" y1="5" x2="14" y2="35" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    <line x1="19" y1="3" x2="19" y2="37" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    <line x1="24" y1="3" x2="24" y2="37" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    <line x1="29" y1="5" x2="29" y2="35" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    {/* Racket strings - horizontal */}
    <line x1="8" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    <line x1="8" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    <line x1="8" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    {/* Racket throat */}
    <path d="M17 37 L20 44 L24 44 L27 37" stroke="currentColor" strokeWidth="2.4" fill="none" />
    {/* Racket handle */}
    <rect x="19.5" y="44" width="5" height="16" rx="2.5" fill="currentColor" />
    {/* Shuttlecock cork (bottom) */}
    <circle cx="50" cy="52" r="4" fill="currentColor" />
    {/* Shuttlecock feathers */}
    <path d="M50 48 C46 42 38 36 36 30" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M50 48 C47 41 43 33 44 26" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M50 48 C51 41 52 33 56 28" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M50 48 C53 42 60 37 62 32" stroke="currentColor" strokeWidth="1.8" fill="none" />
    {/* Feather tips connected */}
    <path d="M36 30 Q44 22 56 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.8" />
    <path d="M38 27 Q50 20 62 32" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.5" />
  </svg>
);

type SportCategory = "outdoor" | "indoor";

interface Sport {
  name: string;
  slug: string;
  icon: React.ElementType;
  category: SportCategory;
  description: string;
  players: string;
}

const sports: Sport[] = [
  {
    name: "Cricket",
    slug: "cricket",
    icon: MdSportsCricket,
    category: "outdoor",
    description: "The clash of willow and leather. Boys: Inter-Departmental | Girls: Inter-Hostel. Departments and Hostels battle for supremacy in the ultimate test of skill, strategy, and team spirit.",
    players: "11 + 4 per team",
  },
  {
    name: "Volleyball",
    slug: "volleyball",
    icon: Volleyball,
    category: "outdoor",
    description: "Spikes, blocks, and relentless rallies. Boys: Inter-Departmental | Girls: Inter-Hostel. A showcase of power, coordination, and aerial dominance on the court.",
    players: "6 + 2 per team",
  },
  {
    name: "Table Tennis",
    slug: "table-tennis",
    icon: FaTableTennis,
    category: "indoor",
    description: "Lightning reflexes meet pinpoint precision. Boys: Inter-Departmental | Girls: Inter-Hostel. Fierce rallies and razor-sharp smashes across the table.",
    players: "5 per team",
  },
  {
    name: "Badminton",
    slug: "badminton",
    icon: BadmintonIcon,
    category: "indoor",
    description: "Swift smashes and delicate drops. Mixed Inter-Departmental — 3 Boys + 2 Girls per team. Departments compete for supremacy with lightning-fast reflexes on the court.",
    players: "5 per team (3M + 2F)",
  },
];

const categoryColors: Record<SportCategory, string> = {
  outdoor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  indoor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Events = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose your battleground. From traditional sports to digital warfare,
            every arena awaits your conquest.
          </motion.p>
        </div>
      </section>

      {/* Category Legend */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {Object.entries(categoryColors).map(([category, classes]) => (
              <Badge
                key={category}
                variant="outline"
                className={`${classes} capitalize px-4 py-1.5 text-sm`}
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {sports.map((sport) => (
              <motion.div
                key={sport.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={`/events/${sport.slug}`}
                  className="block glass-card p-6 relative group cursor-pointer overflow-hidden h-full"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 border border-primary/50 rounded-xl" />
                    <div className="absolute inset-0 bg-primary/5" />
                  </div>

                  <div className="relative z-10">
                    {/* Category Badge */}
                    <Badge
                      variant="outline"
                      className={`${categoryColors[sport.category]} capitalize mb-4`}
                    >
                      {sport.category}
                    </Badge>

                    {/* Icon */}
                    <div className="mb-4">
                      <sport.icon className="w-12 h-12 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {sport.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {sport.description}
                    </p>

                    {/* Players info */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary font-medium">Players:</span>
                      <span className="text-muted-foreground">{sport.players}</span>
                    </div>

                    {/* Register CTA */}
                    <div className="mt-5">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold tracking-wider rounded-lg group-hover:bg-primary/90 transition-colors duration-300">
                        Register
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
