"use client";

import { useEffect, useState } from "react";
import { certifications } from "@/lib/data";

const baseLinks = [
  { href: "#about", label: "about()" },
  { href: "#experience", label: "experience()" },
  { href: "#certifications", label: "certifications()" },
  { href: "#projects", label: "projects()" },
  { href: "#contact", label: "contact()" },
];

const links =
  certifications.length > 0
    ? baseLinks
    : baseLinks.filter((l) => l.href !== "#certifications");

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Section navigation" className="mt-12">
      <ul className="space-y-4">
        {links.map((l) => {
          const isActive = active === l.href.slice(1);
          return (
            <li key={l.href}>
              <a
                href={l.href}
                className={`inline-flex items-baseline gap-2 text-sm transition-colors ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-tertiary hover:text-text-primary"
                }`}
              >
                <span
                  className={`h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-6" : "w-0"
                  }`}
                />
                <span className={isActive ? "text-accent" : ""}>
                  {l.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}