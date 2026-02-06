import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, IdCard, Trophy, Building2, Users, Scale, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";
import HeroFogScene from "@/components/HeroFogScene";
import AboutSection from "@/components/AboutSection";

const rules = [
  {
    icon: IdCard,
    title: "College ID Mandatory",
    description: "College ID card is mandatory for each participant in the tournament.",
  },
  {
    icon: Trophy,
    title: "Cricket - Department Wise",
    description: "Cricket will be played Department Wise. All the departments must register their teams before the Tournament.",
  },
  {
    icon: Building2,
    title: "Other Sports - Hall/Hostel Wise",
    description: "All the other sports will be played Hall/Hostel wise. One person can play from any single Hall/Hostel only.",
  },
  {
    icon: Users,
    title: "Day Scholars",
    description: "Day Scholars can register in tournament by contacting with respective JMCR/Sports Secretary of any Hall/Hostel.",
  },
  {
    icon: GraduationCap,
    title: "Alumni Participation",
    description: "Alumni from respective Departments and Halls/Hostels can participate in the tournament.",
  },
  {
    icon: Scale,
    title: "Rule Violations",
    description: "Violation of General Rules will lead to direct disqualification from the tournament.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Home = ({ isLoading = false }: { isLoading?: boolean }) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Three.js Fog Background */}
        <HeroFogScene />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={`text-lg md:text-xl text-muted-foreground mb-4 font-medium tracking-widest uppercase ${!isLoading ? 'typewriter' : 'opacity-0'}`}>
              Richardson Hall Presents
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 glow-text">
              <span className="text-primary">RPL 5.0</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-10 font-light tracking-wide">
              Rabindranath Tagore Premier League
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 font-light tracking-wide italic"
          >
            Sting the Competition
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-display font-semibold tracking-wider rounded-lg glow-button hover:scale-105 transition-transform duration-300"
            >
              Explore Events
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* General Rules Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
          >
            General <span className="text-primary">Rules</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rules.map((rule, index) => (
              <motion.div
                key={rule.title}
                variants={itemVariants}
                className="glass-card p-6 border-accent-left card-hover"
              >
                <rule.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{rule.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {rule.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
