import { AnimatePresence, motion } from "framer-motion";
import { Info, MessageCircle, Truck, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo-semfundo.png";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "../lib/contact";

const links = [
  { href: "#equipamentos", label: "Equipamentos", icon: Truck },
  { href: "#servicos", label: "Manutenção", icon: Wrench },
  { href: "#sobre", label: "Sobre", icon: Info },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-amber/15 bg-night-deep">
      <div className="mx-auto flex max-w-310 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="SNADRILL" className="h-13 w-auto sm:h-16" />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative inline-flex items-center gap-1.5 py-1 text-sm font-semibold tracking-wide transition-colors hover:text-amber ${
                  isActive ? "text-amber" : "text-cream/90"
                }`}
              >
                <link.icon className="h-4 w-4" strokeWidth={2} />
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-amber"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            );
          })}
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-bold whitespace-nowrap text-ink-strong shadow-[0_8px_20px_-8px_rgba(240,169,30,0.9)] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            {WHATSAPP_DISPLAY}
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 rounded-full bg-cream"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 rounded-full bg-cream"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 rounded-full bg-cream"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-amber/15 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 rounded-lg border-l-2 px-2 py-3 text-base font-semibold transition-colors hover:bg-white/5 hover:text-amber ${
                      isActive ? "border-amber text-amber" : "border-transparent text-cream/90"
                    }`}
                  >
                    <link.icon className="h-4.5 w-4.5" strokeWidth={2} />
                    {link.label}
                  </a>
                );
              })}
              <a
                href={WHATSAPP_URL}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-center text-sm font-bold text-ink-strong"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
