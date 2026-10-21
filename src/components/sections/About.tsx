import { GraduationCap, Rocket, Megaphone, Database, Bot, Crosshair, LayoutTemplate } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const journey = [
  {
    icon: GraduationCap,
    title: "Escola do infoproduto",
    text: "Comecei no digital vendendo infoproduto. Aprendi na prática a criar oferta, escrever copy e comprar tráfego com o próprio dinheiro.",
  },
  {
    icon: Rocket,
    title: "R$ 200 mil+ com um único produto",
    text: "Em 2024 um infoproduto passou dos R$ 200 mil em faturamento. Foi ali que eu entendi como uma máquina de vendas funciona de ponta a ponta.",
  },
  {
    icon: Database,
    title: "Do infoproduto pra empresas",
    text: "Hoje aplico esse know-how em negócios reais: gestão de tráfego, CRM próprio e automações com IA, sozinho e em parceria com a V10 Digital.",
  },
];

const services = [
  {
    icon: Megaphone,
    title: "Tráfego pago",
    text: "Campanhas Meta Ads com segmentação, criativos testados e acompanhamento diário de custo por lead.",
  },
  {
    icon: Database,
    title: "Carvalho CRM",
    text: "Meu CRM de WhatsApp com IA que atende 24h, faz follow-up e agenda com Pix, tudo num quadro de vendas.",
  },
  {
    icon: Bot,
    title: "Soluções com IA",
    text: "Atendimento, qualificação e follow-up automatizados com inteligência artificial integrada ao seu processo.",
  },
  {
    icon: LayoutTemplate,
    title: "Páginas e funis",
    text: "Landing pages e funis de venda pensados pra converter o tráfego que você já está pagando.",
  },
];

export function About() {
  return (
    <Section id="sobre">
      <RevealOnScroll variant="blur">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            Sobre mim
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            Aprendi a vender
            <br />
            <span className="font-serif-display text-electric">no próprio bolso.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Sou Evandro Carvalho. Há 5 anos no mercado digital, hoje junto tráfego, CRM e IA numa
            estrutura só, pra empresa que quer vender mais e com previsibilidade.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
        <RevealOnScroll variant="fade-left" delay={100}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-electric/15 bg-gradient-to-br from-electric/[0.06] to-transparent p-7 md:p-9">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-electric/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-electric">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              Trajetória
            </div>
            <ul className="space-y-6">
              {journey.map(({ icon: Icon, title, text }, i) => (
                <RevealOnScroll key={title} variant="fade-up" delay={i * 120 + 200}>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric/10 text-electric">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display text-base font-bold text-foreground md:text-lg">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{text}</p>
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" delay={200}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-whatsapp/20 bg-gradient-to-br from-whatsapp/[0.08] to-transparent p-7 md:p-9">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-whatsapp/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-whatsapp">
              <Crosshair className="h-3 w-3" />
              O que eu faço
            </div>
            <ul className="space-y-6">
              {services.map(({ icon: Icon, title, text }, i) => (
                <RevealOnScroll key={title} variant="fade-up" delay={i * 120 + 300}>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display text-base font-bold text-foreground md:text-lg">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{text}</p>
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
