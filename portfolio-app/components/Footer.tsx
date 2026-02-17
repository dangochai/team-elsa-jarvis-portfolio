import Link from "next/link";
import { Github, Twitter, Linkedin, Zap } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub Profile",
    href: "https://github.com/team-elsa-jarvis",
    icon: Github,
  },
  {
    label: "Twitter/X Profile",
    href: "https://twitter.com/team_elsa_jarvis",
    icon: Twitter,
  },
  {
    label: "LinkedIn Profile",
    href: "https://linkedin.com/company/team-elsa-jarvis",
    icon: Linkedin,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              aria-label="Team Elsa & Jarvis - Home"
            >
              <Zap className="h-4 w-4" aria-hidden="true" />
              <span>Team Elsa &amp; Jarvis</span>
            </Link>
            <span aria-hidden="true">·</span>
            <span>© {currentYear} All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-md text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
