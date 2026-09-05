import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#certifications", label: "credentials" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-neon text-glow">
          <span className="text-muted-foreground">~/</span>zaheer.hussain
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-neon transition-colors duration-200"
              >
                <span className="text-neon/60">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-xs px-4 py-2 border border-neon/40 text-neon hover:bg-neon/10 hover:border-neon transition-all rounded-sm"
        >
          ./connect
        </a>
      </div>
    </nav>
  );
}
