import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import scorpionLogo from "@/assets/Rich_Logo_Transparent.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-10"
      >
        <motion.img
          src={scorpionLogo}
          alt="Logo"
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
          animate={{
            filter: [
              "drop-shadow(0 0 20px hsl(225 73% 57% / 0.4))",
              "drop-shadow(0 0 40px hsl(225 73% 57% / 0.7))",
              "drop-shadow(0 0 20px hsl(225 73% 57% / 0.4))",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 md:w-64 h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-primary/60"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 font-display text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground"
      >
        Preparing the Arena
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
