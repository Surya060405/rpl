import { motion } from "framer-motion";
import ScorpionLogo from "@/components/ScorpionLogo";
import richardsonHallImg from "@/assets/richardson-hall.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-primary">Us</span>
        </motion.h2>

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
                The Rabindranath Tagore Premier League (RPL) is the most anticipated annual sports extravaganza at IIEST, Shibpur, proudly organized by Richardson Hall, the oldest and most prestigious residential hall on campus. More than just a tournament, RPL is a celebration of sportsmanship, competitive spirit, and unbreakable camaraderie, bringing together students from every department and hall/hostel under one roof of passion, energy, and rivalry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now in its fifth edition, RPL 5.0 arrives bigger, fiercer, and louder than ever, a testament to Richardson Hall's enduring commitment to nurturing not just engineers, but well-rounded champions. Let the games begin.
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
                Richardson Hall stands as the oldest and one of the most prestigious halls at IIEST, Shibpur, a timeless Hall that has been shaping lives and legacy since 1951, and will continue to do so till infinity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nestled at the most prime location within the campus. It sits gracefully near the iconic Centenary Alumni Gate, the Main Gate of IIEST, Shibpur, with the sprawling Lords Ground stretching out before it and the distinguished Netaji Bhavan standing close by. Every corner of its surroundings speaks of history, pride, and purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond its architecture and location, what truly sets Richardson Hall apart is the strength of its alumni connections. The bonds forged within its walls have transcended time, creating a network of accomplished individuals who carry the spirit of Richardson Hall wherever they go, a legacy not just of bricks and mortar, but of brotherhood, excellence, and belonging.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be a part of Richardson Hall is to embrace a way of life, one that is lived with passion, pride, and an unshakable sense of identity. As the motto of the Hall boldly declares, "Live Rich, Die Rich", a reminder that those who walk these halls don't just reside here, they carry its richness within them for a lifetime.
              </p>
              <p className="text-primary font-display font-semibold italic text-xl">
                Rich Rulzz... and it always will.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
