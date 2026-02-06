import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScorpionLogo from "@/components/ScorpionLogo";

interface DayInfo {
  day: string;
  date: string;
  highlights: string[];
}

const timelineData: DayInfo[] = [
  {
    day: "Day 1",
    date: "19th February",
    highlights: [
      "The War Begins",
      "Inauguration & Opening Ceremony",
      "First Round Clashes",
    ],
  },
  {
    day: "Day 2",
    date: "20th February",
    highlights: [
      "The Heat Rises",
      "Knockout & Quarter Finals",
      "Esports Showdowns Ignite",
    ],
  },
  {
    day: "Day 3",
    date: "21st February",
    highlights: [
      "The Grand Finale",
      "Championship Battles Conclude",
      "Victory Celebration & Awards",
    ],
  },
];

const Schedule = () => {
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
            Three days of intense competition. Gear up for the ultimate showdown.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent" />

            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative mb-20 last:mb-0"
                >
                  {/* Scorpion node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-background border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)] flex items-center justify-center">
                    <ScorpionLogo size={28} />
                  </div>

                  {/* Content row */}
                  <div
                    className={`flex items-start ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Card side */}
                    <div
                      className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        isLeft ? "md:pr-0" : "md:pl-0"
                      }`}
                    >
                      <div className="relative rounded-lg border border-primary/40 bg-obsidian/70 backdrop-blur-md p-6 shadow-[0_0_25px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.3)] transition-shadow duration-500">
                        {/* Day title */}
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary glow-text text-center mb-5 uppercase tracking-wider">
                          {item.day}
                        </h3>

                        {/* Highlights */}
                        <div className="space-y-3">
                          {item.highlights.map((text) => (
                            <p
                              key={text}
                              className="text-muted-foreground text-sm md:text-base text-center uppercase tracking-wide"
                            >
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for center line */}
                    <div className="hidden md:block w-20 shrink-0" />

                    {/* Date side */}
                    <div
                      className={`hidden md:flex md:w-[calc(50%-2.5rem)] items-center ${
                        isLeft ? "justify-start" : "justify-end"
                      }`}
                    >
                      <span className="font-display text-xl md:text-2xl text-foreground/80 font-semibold tracking-wide">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Mobile date */}
                  <div className="md:hidden ml-20 mt-3">
                    <span className="font-display text-base text-foreground/70 font-semibold">
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
