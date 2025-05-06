"use client";

import Hero from "@/components/Hero";
import WhyDialogix from "@/components/WhyDialogix";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Results from "@/components/Results";
import Signup from "@/components/Signup";
import Download from "@/components/Download";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyDialogix />
      {/* <Demo /> */}

      <Features />
      <Results />
      <Download />
      <Signup />
    </>
  );
}
