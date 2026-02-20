import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown } from "lucide-react";

export default function ProblemSlide() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Years of Service",
      desc: "Promotions heavily weighted toward tenure, not teaching quality",
      color: "text-slide-red",
      bg: "bg-slide-red/10",
    },
    {
      icon: AlertTriangle,
      title: "Subjective Data Scoring",
      desc: "Evaluation criteria don't reflect actual classroom effectiveness",
      color: "text-slide-orange",
      bg: "bg-slide-orange/10",
    },
  ];

  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          The Challenge
        </span>
        <h2 className="font-display text-[64px] font-bold text-foreground mt-4 leading-tight">
          Problem Statement
        </h2>
      </motion.div>

      <div className="flex-1 flex items-center mt-8">
        <div className="grid grid-cols-2 gap-10 w-full max-w-[1200px] mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="stat-card flex flex-col gap-6"
            >
              <div className={`w-16 h-16 rounded-2xl ${p.bg} flex items-center justify-center`}>
                <p.icon className={`w-8 h-8 ${p.color}`} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">{p.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="stat-card-gold stat-card mt-8 py-8"
      >
        <p className="text-2xl text-foreground text-center leading-relaxed">
          <span className="text-primary font-semibold">Proposed Shift →</span> A Performance-based
          promotion framework that evaluates teachers on their{" "}
          <span className="font-semibold">teaching effectiveness</span> and{" "}
          <span className="font-semibold">contribution to student learning</span>.
        </p>
      </motion.div>
    </div>
  );
}
