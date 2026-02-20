import { ReactNode, useEffect, useRef, useState } from "react";

interface SlideLayoutProps {
  children: ReactNode;
}

export default function SlideLayout({ children }: SlideLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const scaleX = parent.clientWidth / 1920;
          const scaleY = parent.clientHeight / 1080;
          setScale(Math.min(scaleX, scaleY));
        }
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div
        className="slide-container absolute left-1/2 top-1/2"
        style={{
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
