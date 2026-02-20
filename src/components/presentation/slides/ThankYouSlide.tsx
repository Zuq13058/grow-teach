import { motion } from "framer-motion";

export default function ThankYouSlide() {
  return (
    <div className="slide-gradient-overlay w-full h-full flex flex-col justify-center items-center relative px-40">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-slide-blue/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display text-[120px] font-bold text-foreground leading-none"
        >
          Thank <span className="text-primary">You</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-40 h-1 bg-primary mx-auto mt-10 mb-10 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-2xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed"
        >
          Questions, feedback, or ideas — we'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14"
        >
          <p className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-4">Team</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-2xl font-medium text-foreground">
            <span>Zeeshan Usiad</span>
            <span>Sameer Sheikh</span>
            <span>Osama Ahmed</span>
            <span>Haroon Ali</span>
            <span>Momina Raja</span>
            <span>Hasnat Tariq</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 text-lg text-muted-foreground"
      >
        Performance-Based Promotion Framework · 2026
      </motion.div>
    </div>
  );
}
