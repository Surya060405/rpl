import { motion } from "framer-motion";
import ReminiscenceLogo from "@/assets/reminiscence-75.png";
import { Link } from "react-router-dom";
import { ArrowRight, IdCard, Trophy, Building2, Users, Scale, GraduationCap, ShieldCheck } from "lucide-react";
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
    title: "Boys — Inter-Departmental",
    description: "All sports for boys will be conducted Department Wise. All departments must register their teams before the tournament begins.",
  },
  {
    icon: Building2,
    title: "Girls — Inter-Hostel",
    description: "All sports for girls will be conducted Inter-Hostel wise, except Badminton which is conducted Department Wise for both boys and girls.",
  },
  {
    icon: ShieldCheck,
    title: "Badminton — All Departments",
    description: "Badminton will be conducted Department Wise for both boys and girls. Departments must register their teams separately.",
  },
  {
    icon: Users,
    title: "Day Scholars",
    description: "Day Scholars can register in the tournament by contacting the respective JMCR/Sports Secretary of any Hall/Hostel.",
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
            className="flex flex-col items-center mt-20 sm:mt-24 md:mt-28 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-medium tracking-widest uppercase ${!isLoading ? 'typewriter' : 'opacity-0'}`}>
              Richardson Hall Presents
            </p>
          </motion.div>

          {/* Reminiscence Logo and "x" separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="flex flex-col items-center mb-2 sm:mb-4 px-4"
          >
            <img
              src={ReminiscenceLogo}
              alt="Reminiscence"
              className="h-20 sm:h-28 md:h-36 lg:h-24 w-auto max-w-full object-contain"
            />
            <span className="text-muted-foreground text-lg sm:text-xl mt-1 sm:mt-2 italic font-light">x</span>
          </motion.div>

          {/* RPL 5.0 Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0 }}
            className="px-2"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-2 lg:mb-4 glow-text">
              <span className="text-primary">RPL 5.0</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-6 md:mb-10 font-light tracking-wide">
              Rabindranath Tagore Premier League
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.5 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 font-light tracking-wide italic"
          >
            Sting the Competition
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.7 }}
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-foreground text-background font-display text-sm sm:text-base font-semibold tracking-wider rounded-lg glow-button hover:scale-105 transition-transform duration-300"
            >
              Explore Events
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>


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
