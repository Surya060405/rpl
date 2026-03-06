import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import rplVideo from "@/assets/RPL 5.0 Video.mp4";

const ParallaxVideoSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // 3D Parallax transforms
    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative py-24 md:py-40 w-full overflow-hidden flex justify-center items-center"
            style={{ perspective: "2000px" }}
        >
            {/* Background ambient glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />

            {/* 3D Floating Video Container */}
            <motion.div
                style={{ y, rotateX, scale, opacity }}
                className="relative w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden glass-card shadow-[0_0_50px_hsl(var(--primary)/0.3)] border border-primary/40 z-10"
            >
                <video
                    ref={videoRef}
                    src={rplVideo}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                />

                {/* Decorative text overlay inside video */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black/10">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest text-white/30 mix-blend-overlay uppercase">
                        RPL 5.0
                    </h2>
                </div>

                {/* Controls */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-white hover:bg-primary/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-lg"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100" />
                    ) : (
                        <Volume2 className="w-5 h-5 md:w-6 md:h-6 opacity-100" />
                    )}
                </button>
            </motion.div>

            {/* Smoother edge blending gradients */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default ParallaxVideoSection;
