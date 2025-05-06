import FadeIn from "./FadeIn";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* dark left‑to‑right gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/65 to-[var(--color-primary)]/65">
        <div className="container mx-auto px-6 h-full flex items-center justify-center text-center">
          <FadeIn className="max-w-5xl">
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">
              A Modern Classroom Experience
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12">
              Track attendance, manage participation, and minimize
              distractions—so you can focus on teaching, not tech
            </p>

            <Link
              href="#signup"
              className="bg-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)]/85 text-[var(--color-primary)] px-8 py-4 rounded-md text-lg font-bold transition-colors duration-300 whitespace-nowrap"
            >
              Get Started
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* bouncing arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-scroll-bounce">
        <i className="ri-arrow-down-line ri-lg" />
      </div>
    </section>
  );
}
