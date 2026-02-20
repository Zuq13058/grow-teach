import { motion } from "framer-motion";

export default function TitleSlide() {
  return (
    <div className="slide-gradient-overlay w-full h-full flex flex-col justify-center items-center relative px-40">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-slide-blue/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/5 mb-12">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-lg font-medium tracking-wide uppercase">
            Policy Reform Initiative
          </span>
        </div>

        <h1 className="font-display text-[96px] leading-[1.05] font-bold text-foreground mb-8">
          Our Rock:
          <br />
          <span className="text-primary">Teacher Promotion</span>
          <br />
          Policy
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl text-muted-foreground max-w-[900px] mx-auto leading-relaxed"
        >
          Redesigning the teacher promotion system to be based on{" "}
          <span className="text-foreground font-medium">teaching capability</span> and{" "}
          <span className="text-foreground font-medium">classroom impact</span>, rather than years of
          service.
        </motion.p>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-16 left-40 right-40 flex justify-between items-center text-muted-foreground text-lg"
      >
        <span>Performance-Based Promotion Framework</span>
        <span className="text-primary font-medium">2026</span>
      </motion.div>
    </div>
  );
}
