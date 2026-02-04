import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  category: string;
}

interface DaySchedule {
  [key: string]: ScheduleEvent[];
}

const scheduleData: DaySchedule = {
  day1: [
    { time: "09:00 AM", title: "Opening Ceremony", location: "Main Auditorium", category: "ceremony" },
    { time: "10:30 AM", title: "Cricket Qualifiers", location: "Sports Ground A", category: "outdoor" },
    { time: "11:00 AM", title: "Chess Round 1", location: "Indoor Hall B", category: "indoor" },
    { time: "02:00 PM", title: "Badminton Qualifiers", location: "Sports Complex", category: "indoor" },
    { time: "04:00 PM", title: "BGMI Registration", location: "Gaming Arena", category: "esports" },
  ],
  day2: [
    { time: "09:00 AM", title: "Football Quarter Finals", location: "Main Ground", category: "outdoor" },
    { time: "10:00 AM", title: "Table Tennis Semis", location: "Indoor Hall A", category: "indoor" },
    { time: "12:00 PM", title: "Cricket Semi Finals", location: "Sports Ground A", category: "outdoor" },
    { time: "03:00 PM", title: "BGMI Showdown", location: "Gaming Arena", category: "esports" },
    { time: "05:00 PM", title: "Tug of War Finals", location: "Main Ground", category: "outdoor" },
  ],
  day3: [
    { time: "09:00 AM", title: "Valorant Finals", location: "Gaming Arena", category: "esports" },
    { time: "11:00 AM", title: "Cricket Finals", location: "Main Stadium", category: "outdoor" },
    { time: "02:00 PM", title: "Football Finals", location: "Main Ground", category: "outdoor" },
    { time: "04:00 PM", title: "Award Ceremony", location: "Main Auditorium", category: "ceremony" },
    { time: "06:00 PM", title: "Closing Celebration", location: "Central Lawn", category: "ceremony" },
  ],
};

const categoryBadgeColors: Record<string, string> = {
  ceremony: "bg-rose-500/20 text-rose-400",
  outdoor: "bg-emerald-500/20 text-emerald-400",
  indoor: "bg-amber-500/20 text-amber-400",
  esports: "bg-violet-500/20 text-violet-400",
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

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
            Battle <span className="text-primary glow-text">Timeline</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Three days of intense competition. Plan your attendance and never miss a moment.
          </motion.p>
        </div>
      </section>

      {/* Schedule Tabs */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-12"
            >
              <TabsList className="bg-obsidian/60 backdrop-blur-xl border border-glass-border/20 p-1">
                {["day1", "day2", "day3"].map((day, index) => (
                  <TabsTrigger
                    key={day}
                    value={day}
                    className="font-display px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  >
                    Day {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {/* Tab Content */}
            {Object.entries(scheduleData).map(([day, events]) => (
              <TabsContent key={day} value={day} className="mt-0">
                <AnimatePresence mode="wait">
                  {activeDay === day && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-3xl mx-auto"
                    >
                      {/* Timeline */}
                      <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                        {/* Events */}
                        {events.map((event, index) => (
                          <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex items-start gap-6 mb-8 ${
                              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                          >
                            {/* Time marker */}
                            <div
                              className={`hidden md:block w-[calc(50%-2rem)] text-right ${
                                index % 2 === 0 ? "md:text-right" : "md:text-left"
                              }`}
                            >
                              <span className="font-display text-primary font-semibold">
                                {event.time}
                              </span>
                            </div>

                            {/* Node */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-[0_0_15px_hsl(var(--primary))]" />

                            {/* Event card */}
                            <div
                              className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-5 card-hover`}
                            >
                              <div className="md:hidden mb-2">
                                <span className="font-display text-primary text-sm font-semibold">
                                  {event.time}
                                </span>
                              </div>
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="font-display text-lg font-semibold">
                                  {event.title}
                                </h3>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full capitalize ${
                                    categoryBadgeColors[event.category]
                                  }`}
                                >
                                  {event.category}
                                </span>
                              </div>
                              <p className="text-muted-foreground text-sm">
                                📍 {event.location}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
