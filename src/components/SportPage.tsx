import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle2, Calendar, Clock, MapPin, Trophy } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

type SportCategory = "outdoor" | "indoor";

export interface Match {
    Team1: string;
    Team2: string;
    Date: string;
    Time: string;
    Venue: string;
    isCompleted: boolean;
    Winner: string;
}

export interface PoolTeam {
    name: string;
    played?: number;
    won?: number;
    lost?: number;
    points?: number;
    nrr?: number;
    rd?: number;
}

export interface Pool {
    name: string;
    gender?: "Boys" | "Girls";
    teams: (string | PoolTeam)[];
}

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
    pools?: Pool[];
    matches?: Match[];
}

const categoryColors: Record<SportCategory, string> = {
    outdoor: "bg-white/10 text-white border-white/20",
    indoor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
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
    pools = [],
    matches = [],
}: SportPageProps) => {
    const upcomingMatches = matches.filter(m => !m.isCompleted);
    const pastMatches = matches.filter(m => m.isCompleted);

    const hasGenderPools = pools.some(p => p.gender);
    const [activePoolTab, setActivePoolTab] = useState<"Boys" | "Girls">("Boys");

    const displayedPools = hasGenderPools
        ? pools.filter(p => !p.gender || p.gender === activePoolTab)
        : pools;

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

            {/* Pools Section */}
            {pools.length > 0 && (
                <section className="py-12 md:py-16 bg-white/5 border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center gap-3 mb-8 md:mb-10"
                            >
                                <div className="h-7 w-1 bg-primary rounded-full" />
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    Tournament <span className="text-primary">Pools</span>
                                </h2>
                            </motion.div>

                            {hasGenderPools && (
                                <div className="flex justify-center mb-8">
                                    <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                                        <button
                                            onClick={() => setActivePoolTab("Boys")}
                                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activePoolTab === "Boys"
                                                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                                                : "text-muted-foreground hover:text-white"
                                                }`}
                                        >
                                            Boys
                                        </button>
                                        <button
                                            onClick={() => setActivePoolTab("Girls")}
                                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activePoolTab === "Girls"
                                                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                                                : "text-muted-foreground hover:text-white"
                                                }`}
                                        >
                                            Girls
                                        </button>
                                    </div>
                                </div>
                            )}

                            <motion.div
                                key={activePoolTab}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {displayedPools.map((pool, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="glass-card p-0 md:p-6 border border-white/10 overflow-hidden"
                                    >
                                        <h3 className="text-xl font-display font-bold mb-4 text-primary border-b border-white/10 pb-4 p-6 md:p-0 md:pb-4">
                                            {pool.name}
                                        </h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                                                    <tr>
                                                        <th className="px-6 py-3">Team</th>
                                                        {typeof pool.teams[0] === "object" && (() => {
                                                            const teams = pool.teams as PoolTeam[];
                                                            const hasNrr = teams.some(t => t.nrr !== undefined);
                                                            const hasRd = teams.some(t => t.rd !== undefined);
                                                            return (
                                                                <>
                                                                    <th className="px-4 py-3 text-center">P</th>
                                                                    <th className="px-4 py-3 text-center">W</th>
                                                                    <th className="px-4 py-3 text-center">L</th>
                                                                    {hasNrr && <th className="px-4 py-3 text-center">NRR</th>}
                                                                    {hasRd && <th className="px-4 py-3 text-center">RD</th>}
                                                                    <th className="px-4 py-3 text-center">Pts</th>
                                                                </>
                                                            );
                                                        })()}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {pool.teams.map((team, idx) => {
                                                        const isObj = typeof team === "object";
                                                        const teamObj = isObj ? (team as PoolTeam) : null;
                                                        const teamName = isObj ? teamObj.name : team;
                                                        const p = isObj ? teamObj.played : 0;
                                                        const w = isObj ? teamObj.won : 0;
                                                        const l = isObj ? teamObj.lost : 0;
                                                        const pts = isObj ? teamObj.points : 0;
                                                        const nrr = isObj ? teamObj.nrr : undefined;
                                                        const rd = isObj ? teamObj.rd : undefined;
                                                        
                                                        const teams = pool.teams as PoolTeam[];
                                                        const hasNrr = teams.some(item => typeof item === "object" && (item as PoolTeam).nrr !== undefined);
                                                        const hasRd = teams.some(item => typeof item === "object" && (item as PoolTeam).rd !== undefined);

                                                        return (
                                                            <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                                <td className="px-6 py-4 font-medium text-white/90 whitespace-nowrap">
                                                                    {teamName as string}
                                                                </td>
                                                                {isObj && (
                                                                    <>
                                                                        <td className="px-4 py-4 text-center text-muted-foreground">{p}</td>
                                                                        <td className="px-4 py-4 text-center text-emerald-400">{w}</td>
                                                                        <td className="px-4 py-4 text-center text-destructive">{l}</td>
                                                                        {hasNrr && (
                                                                            <td className={`px-4 py-4 text-center font-mono text-xs ${nrr !== undefined && nrr > 0 ? "text-emerald-400" : nrr !== undefined && nrr < 0 ? "text-destructive" : "text-muted-foreground"}`}>
                                                                                {nrr !== undefined ? (nrr >= 0 ? "+" : "") + nrr.toFixed(3) : "-"}
                                                                            </td>
                                                                        )}
                                                                        {hasRd && (
                                                                            <td className={`px-4 py-4 text-center font-mono text-xs ${rd !== undefined && rd > 0 ? "text-emerald-400" : rd !== undefined && rd < 0 ? "text-destructive" : "text-muted-foreground"}`}>
                                                                                {rd !== undefined ? (rd >= 0 ? "+" : "") + rd : "-"}
                                                                            </td>
                                                                        )}
                                                                        <td className="px-4 py-4 text-center font-bold text-primary">{pts}</td>
                                                                    </>
                                                                )}
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Matches Section */}
            {(upcomingMatches.length > 0 || pastMatches.length > 0) && (
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Upcoming Matches */}
                            {upcomingMatches.length > 0 && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center gap-3 mb-8 md:mb-10"
                                    >
                                        <div className="h-7 w-1 bg-primary rounded-full" />
                                        <h2 className="font-display text-2xl md:text-3xl font-bold">
                                            Upcoming <span className="text-primary">Fixtures</span>
                                        </h2>
                                    </motion.div>

                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-60px" }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {upcomingMatches.map((match, i) => (
                                            <motion.div
                                                key={i}
                                                variants={itemVariants}
                                                className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-300"
                                            >
                                                <div className="bg-primary/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {match.Date}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {match.Time}
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col items-center">
                                                    <h3 className="text-xl md:text-2xl font-display font-bold mb-6 text-center text-white flex items-center justify-center gap-3 w-full">
                                                        <span className="flex-1 text-right">{match.Team1}</span>
                                                        <span className="text-sm text-white/40 font-medium italic lowercase">vs</span>
                                                        <span className="flex-1 text-left">{match.Team2}</span>
                                                    </h3>
                                                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-white/5 px-8 py-2.5 rounded-full border border-white/5">
                                                        <MapPin className="w-4 h-4 text-primary" />
                                                        {match.Venue}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            )}

                            {/* Past Matches */}
                            {pastMatches.length > 0 && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center gap-3 mb-8 md:mb-10"
                                    >
                                        <div className="h-7 w-1 bg-primary rounded-full" />
                                        <h2 className="font-display text-2xl md:text-3xl font-bold">
                                            Past <span className="text-primary">Matches</span>
                                        </h2>
                                    </motion.div>

                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-60px" }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {pastMatches.map((match, i) => (
                                            <motion.div
                                                key={i}
                                                variants={itemVariants}
                                                className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-300 relative"
                                            >
                                                {/* Completed Badge */}
                                                <div className="absolute -right-8 top-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider py-1 px-10 rotate-45 transform">
                                                    Finished
                                                </div>

                                                <div className="bg-primary/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
                                                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {match.Date}
                                                    </div>
                                                </div>
                                                <div className="p-5 flex flex-col items-center">
                                                    <div className="flex items-center justify-center gap-4 w-full mb-2">
                                                        <div className={`flex items-center justify-end gap-2 flex-1 ${match.Winner === match.Team1 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                                                            {match.Winner === match.Team1 && <Trophy className="w-4 h-4 text-primary" />}
                                                            <span className="text-lg md:text-xl font-display">{match.Team1}</span>
                                                        </div>
                                                        <span className="text-sm text-white/20 font-medium">vs</span>
                                                        <div className={`flex items-center justify-start gap-2 flex-1 ${match.Winner === match.Team2 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                                                            <span className="text-lg md:text-xl font-display">{match.Team2}</span>
                                                            {match.Winner === match.Team2 && <Trophy className="w-4 h-4 text-primary" />}
                                                        </div>
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        {match.Winner ? (
                                                            <span className="text-xs font-medium bg-primary/20 text-primary px-3 py-1 rounded-full">
                                                                {match.Winner} won
                                                            </span>
                                                        ) : (
                                                            <span className="text-xs font-medium bg-white/10 text-muted-foreground px-3 py-1 rounded-full">
                                                                Draw / No Result
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>
            )}

            {/* Divider */}
            {(upcomingMatches.length > 0 || pastMatches.length > 0) && (
                <div className="container mx-auto px-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent max-w-4xl mx-auto" />
                </div>
            )}

            {/* Rules & Regulations */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-8 md:mb-10"
                        >
                            <div className="h-7 w-1 bg-primary rounded-full" />
                            <h2 className="font-display text-2xl md:text-3xl font-bold">
                                Rules &amp; <span className="text-primary">Regulations</span>
                            </h2>
                        </motion.div>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                        >
                            {rules.map((rule, i) => (
                                <motion.li key={i} variants={itemVariants}>
                                    <div className="glass-card p-3.5 rounded-xl flex items-start gap-3 group hover:border-primary/40 transition-colors duration-300 h-full">
                                        <span className="flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </span>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {rule}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default SportPage;
