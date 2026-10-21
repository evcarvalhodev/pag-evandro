import { CalendarCheck, ShieldCheck, Repeat, Mic, BarChart3, Building2, MessageSquare, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const features = [
  {
    icon: CalendarCheck,
    title: "IA que agenda de verdade",
    text: "Vê o horário livre na agenda, recebe o Pix, confere o comprovante e marca a consulta sozinha. Depois manda os lembretes.",
  },
  {
    icon: MessageSquare,
    title: "Atendente 24h no WhatsApp",
    text: "Entende áudio, foto, vídeo e print de anúncio. Conduz até a venda e chama a equipe quando precisa.",
  },
  {
    icon: ShieldCheck,
    title: "Travas contra invenção",
    text: "A IA não promete o que não fez, não confirma horário que não existe e não deixa texto técnico chegar ao cliente.",
  },
  {
    icon: Repeat,
    title: "Follow-up inteligente",
    text: "A IA decide se vale chamar de novo e escreve uma mensagem personalizada, num ritmo humano que protege o número.",
  },
  {
    icon: Mic,
    title: "Central de Comando",
    text: "O dono pergunta por texto ou voz (\"quantos leads ontem?\") e o CRM responde com os dados da loja.",
  },
  {
    icon: BarChart3,
    title: "Relatórios que importam",
    text: "Leads, conversão, funil, ranking da equipe, anúncio × direto e tempo de resposta da IA × equipe.",
  },
];

const tags = ["WhatsApp (QR e API oficial)", "Google Agenda", "Pix", "Transcrição de áudio", "Multiempresa", "App no celular"];

export function CrmShowcase() {
  return (
    <Section id="crm" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-[hsl(var(--whatsapp)/0.05)] blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[hsl(var(--electric)/0.05)] blur-[110px]" />
      </div>

      <RevealOnScroll variant="blur">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-whatsapp" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-whatsapp">
              Produto próprio
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            Carvalho CRM:
            <br />
            <span className="font-serif-display text-whatsapp">a IA que atende e agenda.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            CRM de atendimento por WhatsApp que eu desenvolvi para negócios que vendem por conversa.
            Em produção numa clínica de harmonização facial, com mais clientes em implantação.
          </p>
        </div>
      </RevealOnScroll>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }, i) => (
          <RevealOnScroll key={title} variant="fade-up" delay={i * 90}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--whatsapp)/0.3)] hover:shadow-soft-lg md:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{text}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll variant="fade-up" delay={200}>
        <div className="relative mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Building2 className="h-3 w-3 text-electric" />
              {t}
            </span>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll variant="zoom" delay={300}>
        <div className="relative mt-10 text-center">
          <WhatsAppButton size="lg" glow message="Oi Evandro, vi seu portfólio e quero conhecer o Carvalho CRM.">
            Quero ver o CRM funcionando
          </WhatsAppButton>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
