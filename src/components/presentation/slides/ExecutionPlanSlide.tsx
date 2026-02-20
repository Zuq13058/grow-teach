import { motion } from "framer-motion";
import { ArrowDown, Search, AlertCircle, Presentation, Wrench, Users, BarChart3, Eye } from "lucide-react";

const steps = [
  { icon: Search, label: "Conduct Field Research", quarter: "Q1" },
  { icon: AlertCircle, label: "Identify Pain Points & Opportunity Areas", quarter: "Q1" },
  { icon: Presentation, label: "Present Evidence to FDE", quarter: "Q1" },
  { icon: Wrench, label: "Build Alignment for 5-8 Pedagogical Data Points", quarter: "Q1" },
  { icon: Users, label: "Onboard Principals & Teachers (Collect Feedback)", quarter: "Q1" },
  { icon: BarChart3, label: "Create Data Points and KPIs", quarter: "Q2" },
  { icon: Eye, label: "Basic Visibility to Tracking", quarter: "Q2" },
];

const q2Steps = [
  { icon: BarChart3, label: "Build Detailed KPI Tracking System", quarter: "Q2" },
  { icon: Wrench, label: "KPI Improvement Discussions", quarter: "Q2" },
];

export default function ExecutionPlanSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          Original Plan
        </span>
        <h2 className="font-display text-[56px] font-bold text-foreground mt-4 leading-tight">
          Execution Plan
        </h2>
      </motion.div>

      <div className="flex-1 flex gap-16 mt-12">
        {/* Q1 Column */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-lg mb-6"
          >
            Q1 Milestones
          </motion.div>
          <div className="space-y-3">
            {steps.filter(s => s.quarter === "Q1").map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flow-node flex items-center gap-4 flex-1 py-4 px-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{step.label}</span>
                </div>
                {i < 4 && <ArrowDown className="w-5 h-5 text-primary shrink-0 mx-auto" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Q2 Column */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slide-blue/10 text-slide-blue font-semibold text-lg mb-6"
          >
            Q2 Milestones
          </motion.div>
          <div className="space-y-3">
            {[...steps.filter(s => s.quarter === "Q2"), ...q2Steps].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flow-node flex items-center gap-4 flex-1 py-4 px-6">
                  <div className="w-10 h-10 rounded-lg bg-slide-blue/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-slide-blue" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{step.label}</span>
                </div>
                {i < 2 && <ArrowDown className="w-5 h-5 text-slide-blue shrink-0 mx-auto" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
