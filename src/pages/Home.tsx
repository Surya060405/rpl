import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, IdCard, Clock, Scale, GraduationCap } from "lucide-react";
import ScorpionLogo from "@/components/ScorpionLogo";
import Layout from "@/components/Layout";

const rules = [
  {
    icon: IdCard,
    title: "ID Required",
    description: "All participants must carry valid institutional ID cards for verification.",
  },
  {
    icon: Clock,
    title: "Report Early",
    description: "Teams must report 30 minutes before their scheduled match time.",
  },
  {
    icon: Scale,
    title: "Fair Play",
    description: "Unsportsmanlike conduct will result in immediate disqualification.",
  },
  {
    icon: GraduationCap,
    title: "Alumni Policy",
    description: "Alumni participants must register separately with proof of graduation.",
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

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Large scorpion silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] as const }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <ScorpionLogo size={600} className="animate-float" />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 glow-text">
              RABINDRANATH
              <br />
              <span className="text-primary">PREMIER LEAGUE</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 font-light tracking-wide"
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
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute -right-10 -bottom-10 opacity-5">
                  <ScorpionLogo size={200} />
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  The <span className="text-primary">Legacy</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rabindranath Premier League stands as a testament to athletic excellence 
                  and competitive spirit. For over a decade, we have been the premier 
                  inter-departmental sports tournament, bringing together the finest 
                  athletes from every corner of our institution.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From the thundering cricket pitches to the strategic chess boards, 
                  from intense football matches to the digital battlegrounds of esports — 
                  RPL is where champions are forged and legends are born.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                <ScorpionLogo size={300} className="relative z-10 animate-float" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
