import { motion } from "framer-motion";
import { 
  Trophy, 
  Target, 
  Swords,
  CircleDot,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

type SportCategory = "outdoor" | "indoor";

interface Sport {
  name: string;
  icon: React.ElementType;
  category: SportCategory;
  description: string;
  players: string;
}

const sports: Sport[] = [
  {
    name: "Cricket",
    icon: Trophy,
    category: "outdoor",
    description: "The clash of willow and leather. Inter-Departmental Cricket Tournament where departments battle for supremacy in the ultimate test of skill, strategy, and team spirit.",
    players: "11 per team",
  },
  {
    name: "Volleyball",
    icon: Target,
    category: "outdoor",
    description: "Spikes, blocks, and relentless rallies. Inter Hall/Hostel Volleyball Tournament — a showcase of power, coordination, and aerial dominance on the court.",
    players: "6 per team",
  },
  {
    name: "Chess",
    icon: Swords,
    category: "indoor",
    description: "Where minds wage war. Inter Hall/Hostel Chess Tournament — a silent battlefield of tactics, foresight, and calculated brilliance.",
    players: "1 per team",
  },
  {
    name: "Badminton",
    icon: CircleDot,
    category: "indoor",
    description: "Lightning reflexes meet pinpoint precision. Inter Hall/Hostel Badminton Tournament featuring fierce rallies and razor-sharp smashes.",
    players: "1-2 per team",
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
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            The <span className="text-primary glow-text">Arena</span>
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
                className="glass-card p-6 relative group cursor-pointer overflow-hidden"
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
