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
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          Looking Ahead
        </span>
        <h2 className="font-display text-[56px] font-bold text-foreground mt-4 leading-tight">
          Next Steps
        </h2>
      </motion.div>

      <div className="flex-1 flex gap-12 mt-10">
        {/* Steps list */}
        <div className="flex-1 flex flex-col gap-5">
          {nextSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="stat-card flex items-center gap-6 py-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xl font-semibold text-foreground">{step.label}</p>
              <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
            </motion.div>
          ))}
        </div>

        {/* KPI Donut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[500px] stat-card-gold stat-card flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">ACR-KPI Tracking Coverage</h3>
          <p className="text-base text-muted-foreground mb-6">Current + Projected with Digital Tools</p>
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
              <div className="w-3 h-3 rounded-full bg-slide-green" />
              <span className="text-sm text-muted-foreground">Current 63%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">+20-25% Digital</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-4 text-center">
            Minimizing principal workload while expanding KPI coverage
          </p>
        </motion.div>
      </div>
    </div>
  );
}
