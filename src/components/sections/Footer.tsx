import { Instagram, ArrowUpRight, MapPin, Sparkles, Mail, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/components/WhatsAppButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import portrait from "@/assets/evandro-portrait.jpg";

const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#cases" },
  { label: "Carvalho CRM", href: "#crm" },
  { label: "Depoimentos", href: "#provas" },
  { label: "Como trabalho", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "Tráfego pago Meta Ads",
  "Carvalho CRM",
  "Soluções com IA",
  "Páginas e funis",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-dark-section text-dark-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="aurora-orb animate-aurora-1 left-[-10%] top-[-20%] h-[420px] w-[420px] bg-electric/25" />
        <div className="aurora-orb animate-aurora-2 right-[-10%] bottom-[-30%] h-[480px] w-[480px] bg-whatsapp/20" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-[0.12]" />
      <div className="noise-overlay absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-glow/60 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
        <RevealOnScroll variant="fade-up">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-5">
            <div className="relative shrink-0">
              <div className="orbital-ring absolute -inset-1.5 rounded-full opacity-60" />
              <img
                src={portrait}
                alt="Evandro Carvalho"
                className="relative h-14 w-14 rounded-full border border-white/15 object-cover object-center"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="font-display text-lg font-bold tracking-tight text-white">
                Evandro Carvalho
              </div>
              <p className="mt-0.5 text-sm leading-relaxed text-dark-muted">
                Tráfego, CRM e IA pra empresas que querem vender mais.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <RevealOnScroll variant="fade-up" delay={0}>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
                Navegação
              </div>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-dark-foreground/80 transition-colors hover:text-electric-glow"
                    >
                      <span className="h-px w-3 bg-white/15 transition-all group-hover:w-6 group-hover:bg-electric-glow" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={80}>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
                O que entrego
              </div>
              <ul className="mt-4 space-y-2.5">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-dark-foreground/80">
                    <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-whatsapp-glow" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={160}>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
                Contato
              </div>
              <ul className="mt-4 space-y-3 text-sm text-dark-foreground/80">
                <li>
                  <a href="mailto:evcarvalhodev@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-electric-glow">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-whatsapp-glow" />
                    evcarvalhodev@gmail.com
                  </a>
                </li>
                <li>
                  <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-whatsapp-glow">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-whatsapp-glow" />
                    (12) 99185-7568
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-electric-glow" />
                  Brasil · remoto
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={240}>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
                Redes sociais
              </div>
              <div className="mt-4 flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/evandro_ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-electric-glow"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp/50 hover:bg-whatsapp/10 hover:text-whatsapp-glow"
                  aria-label="WhatsApp"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                </a>
                <a
                  href="mailto:evcarvalhodev@gmail.com"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-electric-glow"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="fade-up" delay={300}>
          <div className="mt-12 border-t border-white/[0.06] pt-6">
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dark-muted">
                © 2026 Evandro Carvalho
              </span>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-dark-muted">
                <a href="#" className="transition-colors hover:text-dark-foreground">Privacidade</a>
                <span className="h-3 w-px bg-white/10" />
                <a href="#" className="transition-colors hover:text-dark-foreground">Termos</a>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-dark-muted">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-whatsapp" />
                100% online
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
