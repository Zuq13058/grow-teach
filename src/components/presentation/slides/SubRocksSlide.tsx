import { motion } from "framer-motion";
import { Users, Clipboard, Handshake } from "lucide-react";

export default function SubRocksSlide() {
  const rocks = [
    {
      icon: Users,
      number: "01",
      title: "Center Teacher Voice & Co-Create Evaluation Tools",
      desc: "Deliver a co-created, digital, performance-based ACR system deployed in 15-20 schools and formally endorsed by the FDE.",
      color: "border-slide-gold",
      accent: "text-primary",
    },
    {
      icon: Clipboard,
      number: "02",
      title: "Reduce Principal's Manual Workload",
      desc: "Automate key administrative workflows to shift 80% of principal's time from manual tasks to teacher development.",
      color: "border-slide-blue",
      accent: "text-slide-blue",
    },
    {
      icon: Handshake,
      number: "03",
      title: "Engage the Right Stakeholders",
      desc: "Ensure alignment with FDE and engage Education Ministry champions for policy endorsement.",
      color: "border-slide-green",
      accent: "text-slide-green",
    },
  ];

  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          Strategic Pillars
        </span>
        <h2 className="font-display text-[64px] font-bold text-foreground mt-4 leading-tight">
          Our Sub Rocks
        </h2>
      </motion.div>

      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-3 gap-10 w-full">
          {rocks.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className={`stat-card border-l-4 ${r.color} flex flex-col gap-6`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-5xl font-display font-bold ${r.accent} opacity-30`}>
                  {r.number}
                </span>
                <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center`}>
                  <r.icon className={`w-7 h-7 ${r.accent}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground leading-snug">{r.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
