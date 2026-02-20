import { motion } from "framer-motion";
import { ArrowDown, Search, Eye, BarChart3, ClipboardList, AlertTriangle } from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Conduct Field Research",
    detail: null,
  },
  {
    icon: AlertTriangle,
    label: "Key Discovery",
    detail:
      "Some pedagogical KPIs are rolled out in schools but all data points are observed subjectively",
    isHighlight: true,
  },
  {
    icon: BarChart3,
    label: "Build Detailed Data-Backed KPI Tracking System",
    detail: null,
  },
  {
    icon: Eye,
    label: "Provide KPI Tracking Visibility to All Stakeholders",
    detail: "FDE to Teacher Report Card",
  },
  {
    icon: ClipboardList,
    label: "Conduct Teacher Survey",
    detail: "Build evidence for FDE for future KPI improvement discussions",
  },
];

export default function RevisedPlanSlide() {
  return (
    <div className="w-full h-full px-40 py-24 flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 slide-accent-line" />

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <span className="text-primary text-lg font-semibold uppercase tracking-widest">
          Adapted Strategy
        </span>
        <h2 className="font-display text-[56px] font-bold text-foreground mt-4 leading-tight">
          Revised Execution Plan
        </h2>
      </motion.div>

      <div className="flex-1 flex items-center justify-center mt-8">
        <div className="flex flex-col items-center gap-2 w-full max-w-[1000px]">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="w-full flex flex-col items-center"
            >
              <div
                className={`flow-node w-full flex items-center gap-5 py-5 px-8 ${
                  step.isHighlight ? "flow-node-active" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    step.isHighlight ? "bg-primary/15" : "bg-secondary"
                  }`}
                >
                  <step.icon
                    className={`w-6 h-6 ${step.isHighlight ? "text-primary" : "text-muted-foreground"}`}
                  />
                </div>
                <div>
                  <span
                    className={`text-xl font-semibold ${
                      step.isHighlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                  {step.detail && (
                    <p className="text-base text-muted-foreground mt-1 italic">"{step.detail}"</p>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowDown className="w-5 h-5 text-primary my-1 shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
