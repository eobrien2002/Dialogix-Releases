"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { href: "#problems", label: "Solutions" },
  { href: "#demo", label: "Demo" },
  { href: "#features", label: "Features" },
  { href: "#results", label: "Results" },
  { href: "#download", label: "Download" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e) => {
    // smooth‑scroll + close mobile
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");
    const node = document.querySelector(id);
    if (node) {
      const top = node.getBoundingClientRect().top + window.scrollY - 72; // header height
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#">
          <img src="/DialogixLogo.svg" alt="Dialogix Logo" className="h-8" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-gray-800 hover:text-[var(--color-secondary)] transition-colors duration-300"
              onClick={handleClick}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-primary)]"
          onClick={() => setOpen(!open)}
        >
          <i className={`ri-${open ? "close" : "menu"}-line ri-lg`} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-800 hover:text-[var(--color-secondary)] py-2 transition-colors duration-300"
                onClick={handleClick}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#signup"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondaryDark)] text-white px-6 py-2 rounded-md text-center transition-colors duration-300"
              onClick={handleClick}
            >
              Sign&nbsp;Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
