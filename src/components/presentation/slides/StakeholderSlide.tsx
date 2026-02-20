import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, Building2, Bell } from "lucide-react";

const milestones = [
  {
    icon: CheckCircle2,
    label: "Secured Initial Alignment",
    detail: "Director Academics (Maam Riffat)",
    status: "done",
    color: "text-slide-green",
    bg: "bg-slide-green/10",
  },
  {
    icon: Clock,
    label: "Meeting Expected",
    detail: "All other directors for data set alignment",
    status: "upcoming",
    color: "text-slide-orange",
    bg: "bg-slide-orange/10",
  },
  {
    icon: Bell,
    label: "Notification Secured",
    detail: "Implement digital tools in 10 schools as pilot",
    status: "done",
    color: "text-slide-green",
    bg: "bg-slide-green/10",
  },
];

export default function StakeholderSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-slide-green text-lg font-semibold uppercase tracking-widest">
          Sub Rock 3
        </span>
        <h2 className="font-display text-[52px] font-bold text-foreground mt-4 leading-tight">
          Engaging the Right Stakeholders
        </h2>
        <p className="text-xl text-muted-foreground mt-3">
          Ensure alignment with FDE and engage Education Ministry champions
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-8">
        <div className="w-full space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="stat-card flex items-center gap-8 py-8"
            >
              <div className={`w-16 h-16 rounded-2xl ${m.bg} flex items-center justify-center shrink-0`}>
                <m.icon className={`w-8 h-8 ${m.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">{m.label}</h3>
                <p className="text-xl text-muted-foreground mt-1">{m.detail}</p>
              </div>
              <div
                className={`px-5 py-2 rounded-full text-base font-semibold ${
                  m.status === "done"
                    ? "bg-slide-green/10 text-slide-green"
                    : "bg-slide-orange/10 text-slide-orange"
                }`}
              >
                {m.status === "done" ? "Secured" : "In Progress"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
