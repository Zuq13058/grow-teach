import { motion } from "framer-motion";
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
  LabelList,
} from "recharts";

const promotionFactorData = [
  { name: "Classroom Teaching Quality", value: 70.2, fill: "hsl(210, 70%, 50%)" },
  { name: "Other Factors", value: 29.8, fill: "hsl(30, 85%, 55%)" },
];

const examResultsData = [
  { name: "Combined equally with other factors", value: 62.0 },
  { name: "Only as a small supporting factor", value: 15.2 },
  { name: "As the main factor", value: 14.2 },
  { name: "Should not be used / Other minor responses", value: 8.6 },
];

export default function SurveyResultsSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          Survey Insights
        </span>
        <h2 className="font-display text-[52px] font-bold text-foreground mt-4 leading-tight">
          Teacher Survey Results
        </h2>
      </motion.div>

      <div className="flex-1 flex gap-12 mt-10">
        {/* Pie Chart - Most Important Factor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 stat-card flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
            Most Important Factor for Teacher Promotion
          </h3>
          <div className="w-72 h-72 mt-4">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={promotionFactorData}
                  innerRadius={0}
                  outerRadius={120}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={2}
                  stroke="hsl(var(--card))"
                  label={({ name, value }) => `${value}%`}
                  labelLine={false}
                >
                  {promotionFactorData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-8 mt-6">
            {promotionFactorData.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.fill }} />
                <span className="text-base text-muted-foreground">
                  {d.name} ({d.value}%)
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bar Chart - Use of Student Exam Results */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1 stat-card flex flex-col"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Use of Student Exam Results in Teacher Promotion Decisions
          </h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={examResultsData}
                layout="vertical"
                margin={{ top: 10, right: 80, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 14 }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  label={{
                    value: "Percentage (%)",
                    position: "insideBottom",
                    offset: -5,
                    fill: "hsl(var(--muted-foreground))",
                    fontSize: 14,
                  }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={280}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 14 }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <Bar dataKey="value" fill="hsl(210, 70%, 50%)" radius={[0, 6, 6, 0]} barSize={40}>
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(v: number) => `${v}%`}
                    style={{ fill: "hsl(var(--foreground))", fontSize: 16, fontWeight: 600 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
