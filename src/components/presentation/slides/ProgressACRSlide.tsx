import { motion } from "framer-motion";
import { CheckCircle2, Clock, Target } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const surveyData = [
  { name: "Received", value: 650, fill: "hsl(40, 85%, 55%)" },
  { name: "Remaining", value: 150, fill: "hsl(220, 15%, 22%)" },
];

const kpiMapping = [
  { name: "Mapped", value: 63, fill: "hsl(155, 65%, 45%)" },
  { name: "To Map", value: 37, fill: "hsl(220, 15%, 22%)" },
];

const progressItems = [
  {
    label: "End-to-End ACR Process Captured",
    status: "done",
    icon: CheckCircle2,
  },
  {
    label: "FDE-KPIs Mapped with Digital Coach Indicators",
    status: "done",
    icon: CheckCircle2,
  },
  {
    label: "Performance Visibility System (Dashboard) Developed",
    status: "done",
    icon: CheckCircle2,
  },
  {
    label: "Teacher Survey Rolled Out",
    status: "progress",
    icon: Clock,
    detail: "650 / 800 responses",
  },
];

export default function ProgressACRSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          Sub Rock 1
        </span>
        <h2 className="font-display text-[52px] font-bold text-foreground mt-4 leading-tight">
          Teacher Voice & Evaluation Tool
        </h2>
      </motion.div>

      <div className="flex-1 flex gap-10 mt-10">
        {/* Left: Checklist */}
        <div className="flex-1 flex flex-col gap-5">
          {progressItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="stat-card flex items-start gap-5 py-6"
            >
              <item.icon
                className={`w-7 h-7 shrink-0 mt-0.5 ${
                  item.status === "done" ? "text-slide-green" : "text-primary"
                }`}
              />
              <div>
                <p className="text-xl font-semibold text-foreground">{item.label}</p>
                {item.detail && (
                  <p className="text-lg text-primary mt-1 font-medium">{item.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Charts */}
        <div className="w-[520px] flex flex-col gap-8">
          {/* Survey Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="stat-card-gold stat-card flex-1 flex flex-col items-center justify-center"
          >
            <p className="text-lg text-muted-foreground font-medium mb-4">Teacher Survey Progress</p>
            <div className="w-48 h-48">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={surveyData}
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    strokeWidth={0}
                  >
                    {surveyData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-4xl font-bold text-primary mt-2">81%</p>
            <p className="text-base text-muted-foreground">650 of 800 target</p>
          </motion.div>

          {/* KPI Mapping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
            className="stat-card flex items-center gap-6 py-6"
          >
            <Target className="w-10 h-10 text-slide-green shrink-0" />
            <div>
              <p className="text-3xl font-bold text-foreground">63%</p>
              <p className="text-base text-muted-foreground">
                ACR-KPIs trackable via Digital Coach
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
