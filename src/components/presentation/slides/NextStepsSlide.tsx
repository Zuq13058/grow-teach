import { motion } from "framer-motion";
import { Rocket, School, FlaskConical, Award, Link2, Monitor, ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const nextSteps = [
  { icon: Monitor, label: "Release digital tools for digitization" },
  { icon: School, label: "Include all 10 pilot schools in CRO experiments" },
  { icon: Award, label: "Secure endorsement on KPI tracking from FDE & Ministry Champion" },
  { icon: Link2, label: "Link ACR-KPI tracking with digitization" },
];

const kpiData = [
  { name: "Current Digital Coach", value: 63, fill: "hsl(155, 65%, 45%)" },
  { name: "Digital Tools (+20-25%)", value: 22, fill: "hsl(40, 85%, 55%)" },
  { name: "Remaining", value: 15, fill: "hsl(220, 15%, 22%)" },
];

export default function NextStepsSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-primary text-xl font-semibold uppercase tracking-widest">
          Looking Ahead
        </span>
        <h2 className="font-display text-[56px] font-bold text-foreground mt-4 leading-tight">
          Next Steps
        </h2>
      </motion.div>

      <div className="flex-1 flex gap-12 mt-8 min-h-0">
        {/* Steps list - larger text, spread vertically to use bottom space */}
        <div className="flex-1 flex flex-col justify-evenly gap-6">
          {nextSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="stat-card flex items-center gap-7 py-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-semibold text-foreground flex-1 leading-snug">{step.label}</p>
              <ArrowRight className="w-6 h-6 text-foreground/80 shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* KPI Donut - larger labels, fill height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[500px] stat-card-gold stat-card flex flex-col items-center justify-center flex-1 min-h-0"
        >
          <h3 className="text-3xl font-bold text-foreground mb-2">ACR-KPI Tracking Coverage</h3>
          <p className="text-lg text-foreground/90 mb-6">Current + Projected with Digital Tools</p>
          <div className="w-64 h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={kpiData}
                  innerRadius={70}
                  outerRadius={110}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={0}
                >
                  {kpiData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-slide-green" />
              <span className="text-base font-medium text-foreground">Current 63%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary" />
              <span className="text-base font-medium text-foreground">+20-25% Digital</span>
            </div>
          </div>
          <p className="text-xl text-foreground/90 mt-4 text-center font-medium">
            Minimizing principal workload while expanding KPI coverage
          </p>
        </motion.div>
      </div>
    </div>
  );
}
