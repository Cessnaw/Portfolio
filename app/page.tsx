import Nav from "@/components/Nav";
import { certifications, experience, projects, sidebarLinks, skills } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="flex flex-shrink-0 flex-col justify-between px-6 pb-10 pt-16 md:sticky md:top-0 md:h-screen md:w-[38%] md:px-16 md:pt-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Cess
          </h1>
          <p className="mt-3 font-medium text-accent">
            Firmware Developer — Embedded Systems
          </p>
          <p className="mt-6 max-w-[34ch] text-text-secondary">
            Building the firmware behind Sharp multifunction printers — from
            embedded C/C++ to the web UI running on the device itself.
          </p>

          <Nav />
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 md:mt-0">
          {sidebarLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="border-b border-transparent text-sm text-text-tertiary transition-colors hover:border-accent hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="max-w-[64ch] px-6 pb-32 pt-8 md:px-0 md:py-24 md:pr-16">
        <section id="about" className="mb-24 scroll-mt-12 md:mb-32">
          <p className="mb-6 text-sm text-accent before:mr-0.5 before:text-text-tertiary before:content-['//']">
            {" "}about
          </p>
          <div className="space-y-4 text-text-secondary">
            <p>
              I&apos;m a firmware developer working on{" "}
              <strong className="font-medium text-text-primary">
                Sharp MFP (multifunction printer) embedded systems
              </strong>{" "}
              — the software that runs inside the device itself, not just
              what talks to it. My work sits across embedded C/C++, the
              on-device web UI, session control, certificate management, and
              security-related firmware features.
            </p>
            <p>
              Before that, I worked on{" "}
              <strong className="font-medium text-text-primary">
                printer simulation frameworks
              </strong>{" "}
              at Kyocera Document Solutions, contributing to Japanese patent
              JP2024147345A, "Image Forming Apparatus." I&apos;ve spent a
              fair amount of time reading and translating Japanese technical
              documentation as part of that work.
            </p>
            <p>
              I&apos;m based in the Philippines and write mostly in C and
              C++, with a broader backend and full-stack range spanning
              Java, Python, and PHP.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded border border-border bg-bg-elevated px-3 py-1 text-xs text-text-secondary"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 text-sm text-text-secondary">
            <span className="text-text-tertiary">education</span>{" "}
            — B.S. Computer Engineering, Cum Laude (Major in Software
            Engineering), University of San Carlos – Talamban Campus,
            2018–2022
          </div>
        </section>

        <section id="experience" className="mb-24 scroll-mt-12 md:mb-32">
          <p className="mb-6 text-sm text-accent before:mr-0.5 before:text-text-tertiary before:content-['//']">
            {" "}experience
          </p>
          <div className="space-y-10">
            {experience.map((job) => (
              <div
                key={job.role + job.org}
                className="relative border-l-2 border-border pl-6"
              >
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full border-2 border-accent bg-bg" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p>
                    <span className="font-semibold text-text-primary">
                      {job.role}
                    </span>{" "}
                    <span className="text-text-tertiary">·</span>{" "}
                    <span className="text-accent">{job.org}</span>
                  </p>
                  <p className="whitespace-nowrap text-xs text-text-tertiary">
                    {job.period}
                  </p>
                </div>
                <div className="mt-3 space-y-2">
                  {job.fields.map((f) => (
                    <div
                      key={f.key}
                      className="flex gap-3 text-sm text-text-secondary"
                    >
                      <span className="w-20 flex-shrink-0 pt-0.5 text-xs text-text-tertiary">
                        {f.key}
                      </span>
                      <span>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {certifications.length > 0 && (
        <section id="certifications" className="mb-24 scroll-mt-12 md:mb-32">
          <p className="mb-6 text-sm text-accent before:mr-0.5 before:text-text-tertiary before:content-['//']">
            {" "}certifications
          </p>
          <div className="space-y-4">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-4 last:border-b-0"
              >
                <div>
                  <p className="font-semibold text-text-primary">
                    {c.link && c.link !== "#" ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-transparent hover:border-accent hover:text-accent"
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </p>
                  <p className="text-sm text-text-secondary">{c.issuer}</p>
                </div>
                <p className="whitespace-nowrap text-xs text-text-tertiary">
                  {c.date}
                </p>
              </div>
            ))}
          </div>
        </section>
        )}

        <section id="projects" className="mb-24 scroll-mt-12 md:mb-32">
          <p className="mb-6 text-sm text-accent before:mr-0.5 before:text-text-tertiary before:content-['//']">
            {" "}projects
          </p>
          <div>
            {projects.map((p, i) => (
              <div
                key={p.title + i}
                className={`py-7 ${
                  i === 0 ? "pt-0" : ""
                } ${i !== projects.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="font-semibold text-text-primary">
                    {p.title}
                  </span>
                  {p.link && p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-border text-xs text-text-tertiary transition-colors hover:border-accent hover:text-accent"
                    >
                      reference →
                    </a>
                  )}
                </div>
                <p className="mb-3 text-text-secondary">{p.description}</p>
                <div className="flex flex-wrap gap-x-2 text-xs text-text-tertiary">
                  {p.stack.map((s, idx) => (
                    <span key={s}>
                      {s}
                      {idx !== p.stack.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-12">
          <p className="mb-6 text-sm text-accent before:mr-0.5 before:text-text-tertiary before:content-['//']">
            {" "}contact
          </p>
          <p className="text-text-secondary">
            Open to hearing about new opportunities — reach out and
            I&apos;ll get back to you.
          </p>
          <a
            href="mailto:cessnawesleybelarmino@gmail.com"
            className="mt-2 inline-block border-b border-accent text-accent"
          >
            cessnawesleybelarmino@gmail.com
          </a>

          <footer className="mt-16 border-t border-border pt-6 text-xs leading-relaxed text-text-tertiary">
            Coded in{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline underline-offset-2 hover:text-accent"
            >
              Visual Studio Code
            </a>
            . Built with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline underline-offset-2 hover:text-accent"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline underline-offset-2 hover:text-accent"
            >
              Tailwind CSS
            </a>
            , deployed with{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline underline-offset-2 hover:text-accent"
            >
              Vercel
            </a>
            . All text is set in the{" "}
            <a
              href="https://rsms.me/inter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline underline-offset-2 hover:text-accent"
            >
              Inter
            </a>{" "}
            typeface.
          </footer>
        </section>
      </main>
    </div>
  );
}