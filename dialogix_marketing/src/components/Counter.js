"use client";
import { useRef, useEffect } from "react";

export default function Counter({ to, suffix = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const step = () => {
          const inc = to / 50;
          start = Math.min(start + inc, to);
          el.textContent =
            (Number.isInteger(to) ? Math.floor(start) : start.toFixed(1)) +
            suffix;
          if (start < to) requestAnimationFrame(step);
        };
        step();
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);

  return (
    <div ref={ref} className="text-5xl font-bold mb-4">
      0{suffix}
    </div>
  );
}
