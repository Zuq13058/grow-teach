import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import SlideLayout from "./SlideLayout";
import TitleSlide from "./slides/TitleSlide";
import ProblemSlide from "./slides/ProblemSlide";
import SubRocksSlide from "./slides/SubRocksSlide";
import ExecutionPlanSlide from "./slides/ExecutionPlanSlide";
import RevisedPlanSlide from "./slides/RevisedPlanSlide";
import ProgressACRSlide from "./slides/ProgressACRSlide";
import SurveyResultsSlide from "./slides/SurveyResultsSlide";
import PrincipalWorkloadSlide from "./slides/PrincipalWorkloadSlide";
import StakeholderSlide from "./slides/StakeholderSlide";
import NextStepsSlide from "./slides/NextStepsSlide";

const slides = [
  TitleSlide,
  ProblemSlide,
  SubRocksSlide,
  ExecutionPlanSlide,
  RevisedPlanSlide,
  ProgressACRSlide,
  SurveyResultsSlide,
  PrincipalWorkloadSlide,
  StakeholderSlide,
  NextStepsSlide,
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };

    const handleFsChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, [next, prev, isFullscreen, toggleFullscreen]);

  const CurrentSlide = slides[current];

  return (
    <div className="flex flex-col h-screen bg-background select-none">
      {/* Main slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <SlideLayout>
              <CurrentSlide />
            </SlideLayout>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {current > 0 && (
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {current < slides.length - 1 && (
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom bar */}
      <div className="h-16 bg-card border-t border-border flex items-center px-6 gap-4">
        {/* Progress dots */}
        <div className="flex gap-2 flex-1 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-8"
                  : i < current
                  ? "bg-primary/40"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <span className="text-sm text-muted-foreground font-medium tabular-nums">
          {current + 1} / {slides.length}
        </span>

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
