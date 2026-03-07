/**
 * NORTH LEDGER ADVISORY — Stats Section
 * Design: Dark Luxury Fintech
 * Dark band with animated financial statistics
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

const stats = [
  { prefix: "$", value: 65, suffix: "M+", label: "Total Assets Managed", isDecimal: false },
  { prefix: "", value: 85, suffix: "+", label: "Business Clients Served", isDecimal: false },
  { prefix: "$", value: 85, suffix: "K+", label: "Tax Savings Delivered", isDecimal: false },
  { prefix: "", value: 98, suffix: "%", label: "Client Retention Rate", isDecimal: false },
];

function StatItem({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.isDecimal ? Math.round(stat.value * 10) : stat.value, 2200, isVisible);

  return (
    <div
      className={`text-center fade-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="font-display text-5xl md:text-6xl font-300 text-white mb-2 leading-none">
        <span className="text-[#D4AF37]">{stat.prefix}</span>
        {stat.isDecimal ? (count / 10).toFixed(1) : count}
        <span className="text-[#D4AF37]">{stat.suffix}</span>
      </div>
      <div className="font-heading text-xs text-white/40 uppercase tracking-[0.2em]">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="bg-[#0F1E2E] py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
