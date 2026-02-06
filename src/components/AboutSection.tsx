import { motion } from "framer-motion";
import ScorpionLogo from "@/components/ScorpionLogo";
import richardsonHallImg from "@/assets/richardson-hall.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Row 1: The Legacy (left) + Scorpion Logo (right) */}
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

        {/* Row 2: Richardson Hall Image (left) + Richardson Hall Text (right) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mt-12 md:mt-16"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="glass-card overflow-hidden relative">
                <img
                  src={richardsonHallImg}
                  alt="Richardson Hall illuminated with blue lights at night"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Watermark */}
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <ScorpionLogo size={200} />
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Richardson <span className="text-primary">Hall</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                It was a 3 storey Hostel and was possibly built in early sixties.
                Here, only final and pre-final years' students normally stayed.
                The design was different from that of Downing Hall as well as
                Hostels 7-16. It had 3 wings at 120 degrees separation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Usually, the final year boys stayed at the 2nd floor, which was
                more airy. The Hostel had no fans. It was located near the main
                gate and a slushy pond existed near it. Facing this Hostel is the
                ground "Lords".
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
