import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, ExternalLink, CheckCircle2, Info } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

type SportCategory = "outdoor" | "indoor";

interface SportPageProps {
    name: string;
    icon: React.ElementType;
    category: SportCategory;
    players: string;
    tagline: string;
    boyFormat: string;
    girlFormat: string;
    rules: string[];
    formLink?: string;
}

const categoryColors: Record<SportCategory, string> = {
    outdoor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    indoor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
};

const SportPage = ({
    name,
    icon: Icon,
    category,
    players,
    tagline,
    boyFormat,
    girlFormat,
    rules,
    formLink = "#",
}: SportPageProps) => {
    return (
        <Layout>
            {/* Back link */}
            <div className="container mx-auto px-4 pt-8">
                <Link
                    to="/events"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="text-sm font-medium">Back to Events</span>
                </Link>
            </div>

            {/* Hero */}
            <section className="pt-8 pb-16 md:pb-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex justify-center mb-6"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
                                <div className="relative glass-card p-6 rounded-full">
                                    <Icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Category badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            className="flex justify-center mb-4"
                        >
                            <Badge
                                variant="outline"
                                className={`${categoryColors[category]} capitalize px-4 py-1.5 text-sm`}
                            >
                                {category}
                            </Badge>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white"
                        >
                            {name}
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-muted-foreground text-lg md:text-xl mb-8 italic"
                        >
                            {tagline}
                        </motion.p>

                        {/* Info pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-muted-foreground font-medium">{players}</span>
                            </div>
                            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
                                <span className="text-primary font-semibold">♂</span>
                                <span className="text-muted-foreground">{boyFormat}</span>
                            </div>
                            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
                                <span className="text-primary font-semibold">♀</span>
                                <span className="text-muted-foreground">{girlFormat}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent max-w-3xl mx-auto" />
            </div>

            {/* Rules & Regulations */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="h-8 w-1 bg-primary rounded-full" />
                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                Rules &amp; <span className="text-primary">Regulations</span>
                            </h2>
                        </motion.div>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="space-y-4"
                        >
                            {rules.map((rule, i) => (
                                <motion.li key={i} variants={itemVariants}>
                                    <div className="glass-card p-4 rounded-xl flex items-start gap-4 group hover:border-primary/40 transition-colors duration-300">
                                        <span className="flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </span>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                            {rule}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent max-w-3xl mx-auto" />
            </div>

            {/* Register Now CTA */}
            <section className="py-20 pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Ready to <span className="text-primary">Compete?</span>
                        </h2>
                        <p className="text-muted-foreground mb-8 text-base md:text-lg">
                            Secure your spot in the tournament. Register your team now before
                            slots fill up.
                        </p>

                        <motion.a
                            href={formLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-base tracking-wider rounded-xl glow-button transition-all duration-300 shadow-lg shadow-primary/30"
                        >
                            Register Now
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>

                        {formLink === "#" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground/60"
                            >
                                <Info className="w-3.5 h-3.5" />
                                <span>Registration link coming soon</span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default SportPage;
