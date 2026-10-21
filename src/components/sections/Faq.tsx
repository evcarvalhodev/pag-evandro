import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const faqs = [
  {
    q: "Você atende qual tipo de negócio?",
    a: "Empresas e negócios locais que precisam de mais leads e vendas, além de quem vende produto digital. Já atuei com infoproduto, loja de veículos e empresas que usam o Carvalho CRM.",
  },
  {
    q: "Preciso contratar tudo junto (tráfego, CRM e IA)?",
    a: "Não. Cada frente funciona sozinha. Mas o resultado é maior quando o tráfego gera o lead, o CRM organiza e a IA ajuda no atendimento e no follow-up. No diagnóstico eu te falo o que faz sentido pro seu momento.",
  },
  {
    q: "O que é o Carvalho CRM?",
    a: "É o CRM de atendimento por WhatsApp que eu desenvolvi. A IA responde 24h, entende áudio e foto, faz follow-up, confere comprovante de Pix e marca na agenda. Eu mesmo faço a implantação no seu negócio.",
  },
  {
    q: "Quanto preciso investir em anúncios?",
    a: "Depende do objetivo e da região. A verba de anúncios é separada do meu trabalho e vai direto pra plataforma. No primeiro papo eu te passo uma recomendação realista.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Campanhas de tráfego começam a gerar leads nos primeiros dias. A otimização é contínua: o custo por lead tende a cair conforme os dados chegam.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Você me chama no WhatsApp, a gente conversa uns 15 minutos e eu te digo com sinceridade se e como eu posso ajudar.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <RevealOnScroll variant="blur">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">FAQ</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            As dúvidas que <span className="font-serif-display text-whatsapp">sempre</span> aparecem.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Se a sua não está aqui, manda no WhatsApp — eu respondo pessoalmente.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <RevealOnScroll key={i} variant="fade-up" delay={i * 80}>
              <AccordionItem
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft transition-colors data-[state=open]:border-electric/30 md:px-7"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold tracking-tight hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </RevealOnScroll>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
