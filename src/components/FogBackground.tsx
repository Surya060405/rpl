import { motion } from "framer-motion";

const FogBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
      
      {/* Animated fog layers */}
      <motion.div
        className="absolute inset-0 animate-fog-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[100px] animate-pulse-glow"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 animate-fog-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div 
          className="absolute top-3/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/25 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 animate-fog-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div 
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[150px] animate-pulse-glow"
          style={{ transform: "translate(-50%, -50%)", animationDelay: "4s" }}
        />
      </motion.div>
      
      {/* Secondary fog elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[80px] animate-fog-1" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-primary/15 blur-[90px] animate-fog-2" />
      </motion.div>
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />
    </div>
  );
};

export default FogBackground;
