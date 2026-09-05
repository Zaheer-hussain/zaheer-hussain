import { Linkedin, Github, Mail, FileDown } from "lucide-react";

const links = [
  {
    href: "https://www.linkedin.com/in/zaheer-hussain-468328306",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/Zaheer-hussain", icon: Github, label: "GitHub" },
  { href: "mailto:zaheerhussain9620@gmail.com", icon: Mail, label: "Email" },
  { href: "/Zaheer_Hussain_Resume.pdf", icon: FileDown, label: "Resume" },
];

export function SocialSidebar() {
  return (
    <aside className="hidden lg:flex fixed left-6 bottom-0 z-40 flex-col items-center gap-6">
      <ul className="flex flex-col gap-5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={
                l.href.startsWith("http") || l.href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              aria-label={l.label}
              download={
                l.label === "Resume" ? "Zaheer_Hussain_Resume.pdf" : undefined
              }
              className="block text-muted-foreground hover:text-neon hover:-translate-y-1 transition-all duration-200"
            >
              <l.icon className="w-5 h-5" />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-px h-24 bg-gradient-to-b from-neon/40 to-transparent" />
    </aside>
  );
}
