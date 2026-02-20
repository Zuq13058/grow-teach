import { motion } from "framer-motion";
import { CheckCircle2, User, BookOpen, Clock, Wallet } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const features = [
  { icon: User, label: "School Profile Feature", status: "done" },
  { icon: BookOpen, label: "My Satt Feature", status: "done" },
  { icon: Clock, label: "New Admission Management", status: "done" },
  { icon: Wallet, label: "Budget Management", status: "done" },
];

const timeData = [
  { task: "Manual Admin", before: 80, after: 20 },
  { task: "Teacher Dev", before: 20, after: 80 },
];

export default function PrincipalWorkloadSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-slide-blue text-xl font-semibold uppercase tracking-widest">
          Sub Rock 2
        </span>
        <h2 className="font-display text-[52px] font-bold text-foreground mt-4 leading-tight">
          Reduce Principal's Manual Workload
        </h2>
        <p className="text-2xl text-foreground/90 mt-3">
          Automate key administrative workflows → shift 80% of time to teacher development
        </p>
      </motion.div>

      <div className="flex-1 flex gap-12 mt-10 min-h-0">
        {/* Features Grid - larger cards, spread to use height */}
        <div className="flex-1 flex flex-col justify-evenly">
          <h3 className="text-3xl font-bold text-foreground mb-4">Features Developed via FDSing</h3>
          <div className="grid grid-cols-2 gap-8 flex-1 content-evenly">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="stat-card flex items-center gap-5 py-8"
              >
                <div className="w-14 h-14 rounded-xl bg-slide-blue/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-8 h-8 text-slide-blue" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">{f.label}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle2 className="w-5 h-5 text-slide-green" />
                    <span className="text-base text-slide-green font-medium">Completed</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chart - larger labels, use more vertical space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[550px] stat-card flex flex-col flex-1 min-h-0"
        >
          <h3 className="text-3xl font-bold text-foreground mb-2">Time Allocation Target</h3>
          <p className="text-lg text-foreground/90 mb-6">Before vs After Automation</p>
          <div className="flex-1 min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeData} layout="vertical" barSize={44}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 22%)" />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 16 }} unit="%" />
                <YAxis type="category" dataKey="task" tick={{ fill: "hsl(40, 20%, 95%)", fontSize: 18 }} width={120} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220, 22%, 14%)",
                    border: "1px solid hsl(220, 15%, 22%)",
                    borderRadius: 8,
                    color: "hsl(40, 20%, 95%)",
                  }}
                />
                <Bar dataKey="before" name="Before" fill="hsl(0, 72%, 55%)" radius={[0, 6, 6, 0]} />
                <Bar dataKey="after" name="After (Target)" fill="hsl(155, 65%, 45%)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
