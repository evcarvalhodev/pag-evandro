import { Compass, Workflow, Crosshair, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const steps = [
  {
    days: "Etapa 01",
    label: "Diagnóstico",
    title: "Entendo o seu negócio antes de propor qualquer coisa",
    desc: "Conversa estratégica, análise de como você vende hoje e onde os leads e as vendas estão se perdendo.",
    icon: Compass,
    color: "from-[hsl(230,90%,62%)] to-[hsl(220,95%,70%)]",
    accent: "hsl(var(--electric))",
    highlights: ["Análise do funil", "Gargalos mapeados"],
  },
  {
    days: "Etapa 02",
    label: "Estratégia",
    title: "Desenho a solução certa pro seu momento",
    desc: "Tráfego, CRM, IA ou tudo junto. Você recebe um plano claro do que vai ser feito, em que ordem e por quê.",
    icon: Workflow,
    color: "from-[hsl(270,80%,60%)] to-[hsl(280,85%,70%)]",
    accent: "hsl(270,80%,60%)",
    highlights: ["Plano de ação", "Metas definidas"],
  },
  {
    days: "Etapa 03",
    label: "Execução",
    title: "Coloco a máquina pra rodar",
    desc: "Campanhas no ar, CRM implantado, automações com IA configuradas e tudo integrado num fluxo só.",
    icon: Crosshair,
    color: "from-[hsl(38,92%,55%)] to-[hsl(30,95%,60%)]",
    accent: "hsl(var(--gold))",
    highlights: ["Ads + CRM + IA", "Tudo integrado"],
  },
  {
    days: "Etapa 04",
    label: "Otimização",
    title: "Acompanho os números e ajusto toda semana",
    desc: "Custo por lead, taxa de resposta, vendas. Você acompanha os resultados e eu otimizo o que não estiver performando.",
    icon: Rocket,
    color: "from-[hsl(145,60%,45%)] to-[hsl(145,70%,55%)]",
    accent: "hsl(var(--whatsapp))",
    highlights: ["Relatórios", "Melhoria contínua"],
  },
];

export function Process() {
  return (
    <Section id="processo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[hsl(var(--electric)/0.04)] blur-[120px]" />
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[hsl(var(--whatsapp)/0.04)] blur-[100px]" />
      </div>

      <RevealOnScroll variant="blur">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-soft">
            <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--electric))] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Como eu trabalho
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            Do diagnóstico ao
            <br />
            resultado,{" "}
            <span className="relative inline-block">
              <span className="font-serif-display text-whatsapp">sem enrolação.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 C50 2, 150 2, 198 8" stroke="hsl(var(--whatsapp))" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Sem reunião desnecessária, sem espera de aprovação em 4 níveis. Você fala direto comigo.
          </p>
        </div>
      </RevealOnScroll>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-7 top-0 bottom-0 w-px md:left-9">
          <div className="h-full w-full bg-gradient-to-b from-[hsl(var(--electric))] via-[hsl(var(--whatsapp)/0.4)] to-transparent" />
        </div>

        <div className="space-y-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <RevealOnScroll key={i} variant="fade-left" delay={i * 150}>
                <div className="group relative flex gap-5 md:gap-7">
                  <div className="relative z-10 shrink-0">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl md:h-[72px] md:w-[72px]`}>
                      <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.8} />
                    </div>
                    <span className="absolute -right-1.5 -top-1.5 grid h-7 w-7 place-items-center rounded-full bg-foreground text-[10px] font-bold text-background ring-[3px] ring-background shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {!isLast && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 mt-1">
                        <ArrowRight className="h-3.5 w-3.5 rotate-90 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-soft-lg group-hover:border-[hsl(var(--electric)/0.2)] md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="rounded-md bg-[hsl(var(--electric)/0.08)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.15em] text-electric">
                        {step.days}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {step.label}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {step.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-whatsapp" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll variant="zoom" delay={600}>
          <div className="relative z-10 ml-[3.25rem] mt-6 md:ml-[4.25rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--whatsapp)/0.3)] bg-[hsl(var(--whatsapp)/0.06)] px-5 py-2.5 shadow-soft">
              <Rocket className="h-4 w-4 text-whatsapp" />
              <span className="text-sm font-semibold text-foreground">
                Resultado: máquina de vendas rodando
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
