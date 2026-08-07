import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
  Star,
  Timer,
  X,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Placeholder } from "@/components/Placeholder";
import heroAsset from "@/assets/super-lovable-hero.png.asset.json";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Lovable — Use a Lovable sem gastar créditos" },
      {
        name: "description",
        content:
          "Extensão para Chrome que congela o consumo de créditos da Lovable. Funciona inclusive em contas gratuitas. Instale em menos de um minuto por R$ 9,90.",
      },
      { property: "og:title", content: "Super Lovable — Crie sem limites na Lovable" },
      {
        property: "og:description",
        content:
          "Congele o consumo de créditos e continue criando do início ao fim. Extensão premium para Chrome.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

/* ---------------- Countdown ---------------- */

const CYCLE = 15 * 60;

function useCountdown() {
  const [leftMs, setLeftMs] = useState(CYCLE * 1000);
  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    const tick = () => {
      const now = Date.now();
      const elapsed = now - (startedAt.current ?? now);
      const remaining = Math.max(0, (CYCLE * 1000) - (elapsed % (CYCLE * 1000)));
      setLeftMs(remaining);
    };
    tick();
    const id = window.setInterval(tick, 10);
    return () => window.clearInterval(id);
  }, []);

  const totalSeconds = Math.floor(leftMs / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  const ms = Math.floor((leftMs % 1000) / 10); // Show 2 digits for deciseconds/centiseconds
  
  return {
    formatted: `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(ms).padStart(2, "0")}`,
    minutes: m,
    seconds: s,
    ms: ms
  };
}

function Countdown({ className }: { className?: string }) {
  const { formatted } = useCountdown();
  return (
    <span
      className={cn(
        "inline-flex animate-pulse items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-[14px] font-black tabular-nums text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] ring-2 ring-white/30",
        className,
      )}
    >
      <Timer className="h-4 w-4" />
      {formatted}
    </span>
  );
}

function useClientDate() {
  const [date, setDate] = useState<string | null>(null);
  useEffect(() => {
    setDate(
      new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date()),
    );
  }, []);
  return date;
}

/* ---------------- Header (barra única) ---------------- */

function Logo() {
  return (
    <div className="flex shrink-0 items-center gap-2.5">
      {/* Icon and text removed as per request */}
    </div>
  );
}

function Header() {
  const date = useClientDate();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#FF2DBB] shadow-[0_10px_40px_-12px_rgba(255,45,187,0.55)]">
        <div className="mx-auto flex min-h-[4rem] max-w-7xl items-center gap-4 px-4 py-3 sm:px-8">
          <Logo />

          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-black text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)] sm:text-[15px]">
                Lovable Ilimitada sem gastar créditos: R$ 9,90
              </p>
              <span className="text-[13px] font-bold text-white/90 sm:text-[15px]">
                🔥 Somente hoje {date ? `(${date})` : "(...)"}
              </span>
            </div>
            <Countdown />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

const heroBullets = [
  "Trabalhe sem interrupções",
  "Instala em menos de um minuto",
  "Interface extremamente simples",
  "Continue usando a Lovable normalmente",
];

const heroSeals = [
  "Funciona na Lovable gratuita",
  "Instala em menos de 1 minuto",
  "Mais de 14.782 usuários",
];

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.23_350/0.16),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(oklch(1_0_0/0.03)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.03)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#10b981] px-3.5 py-1.5 text-[11.5px] font-black uppercase tracking-[0.05em] text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              🛡️ Método Blindado! A única extensão funcionando sem cair
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Nunca mais fique sem <span className="text-gradient">créditos</span> no Lovable.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Nunca mais interrompa um projeto porque seus créditos acabaram. Continue criando
              normalmente do início ao fim.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[14px] text-foreground/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="#planos" size="lg">
                COMEÇAR AGORA <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CtaButton>
              <CtaButton href="#como-funciona" size="lg" variant="ghost">
                VER COMO FUNCIONA
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={380}>
            <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {heroSeals.map((s) => (
                <li key={s} className="flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/80">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={440}>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" /> 7 dias de garantia • Pagamento único
              R$ 9,90
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_60%_40%,oklch(0.66_0.24_330/0.22),transparent_70%)] blur-2xl" />
          <div className="glass-strong relative rounded-[2rem] p-3 shadow-glow">
            <img
              src={heroAsset.url}
              alt="Interface da Super Lovable aberta"
              className="w-full rounded-[1.5rem] object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Dores ---------------- */

const pains = [
  "Você estava quase terminando o projeto e apareceu a mensagem de que seus créditos acabaram.",
  "Você teve que abandonar uma ideia porque não conseguiu continuar criando.",
  "Precisou esperar horas para continuar um projeto que poderia terminar em minutos.",
];

function PainSection() {
  return (
    <Section title="Você já passou por alguma dessas situações?">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          {pains.map((p, i) => (
            <Reveal key={p} delay={i * 90}>
              <article className="glass-strong flex items-start gap-3.5 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                  <X className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-[14.5px] leading-relaxed text-foreground/90">{p}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={280}>
            <CtaButton href="#o-que-e" size="md" className="mt-2">
              Conhecer a solução <ArrowRight className="h-4 w-4" />
            </CtaButton>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="glass-strong rounded-[2rem] p-3">
            <img
              src="/creditos-esgotados.png?v=2"
              alt="Tela da Lovable mostrando créditos esgotados"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- O que é ---------------- */

const whatList = [
  "Congela o consumo de créditos",
  "Funciona em qualquer conta da Lovable",
  "Inclusive contas gratuitas",
  "Instala em menos de um minuto",
  "Interface intuitiva",
  "Um clique para começar",
  "Crie sites, aplicativos e qualquer outro projeto sem interrupções",
];

function WhatIsSection() {
  return (
    <Section id="o-que-e">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal className="mb-6 lg:hidden">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              O jeito mais simples de usar a Lovable{" "}
              <span className="text-gradient">sem gastar créditos</span>.
            </h2>
          </Reveal>
          
          <Reveal>
            <div className="glass-strong rounded-[2rem] p-3">
              <Placeholder
                label="[Mockup da Extensão]"
                hint="Print da Super Lovable aberta dentro do Chrome"
                aspect="aspect-[5/4]"
                className="rounded-[1.5rem]"
              />
            </div>
          </Reveal>

          {/* Mobile-only content moved below placeholder */}
          <div className="mt-8 space-y-6 lg:hidden">
            <Reveal>
              <div className="space-y-4">
                <p className="text-pretty text-base text-muted-foreground">
                  A Super Lovable é uma extensão para Chrome que congela o consumo de créditos da
                  Lovable.
                </p>
                <p className="text-pretty text-base text-muted-foreground">
                  Assim você continua criando normalmente, sem interrupções, inclusive utilizando contas
                  gratuitas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <ul className="space-y-3">
                {whatList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <CtaButton href="#planos" size="lg" className="w-full">
                Quero a Super Lovable <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </Reveal>
          </div>
        </div>

        <div className="hidden order-1 lg:order-2 lg:block">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              O jeito mais simples de usar a Lovable{" "}
              <span className="text-gradient">sem gastar créditos</span>.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-pretty text-base text-muted-foreground">
              A Super Lovable é uma extensão para Chrome que congela o consumo de créditos da
              Lovable.
            </p>
            <p className="mt-3 text-pretty text-base text-muted-foreground">
              Assim você continua criando normalmente, sem interrupções, inclusive utilizando contas
              gratuitas.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="mt-7 space-y-3">
              {whatList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}>
            <CtaButton href="#planos" size="lg" className="mt-9">
              Quero a Super Lovable <ArrowRight className="h-4 w-4" />
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}




/* ---------------- Prova social ---------------- */

/* ---------------- Prova social (Testemunhos Premium) ---------------- */

const testimonials = [
  {
    content: "Já tinha comprado três extensões que paravam de funcionar depois de poucos dias. A Super Lovable foi a primeira que realmente ficou estável. Hoje uso praticamente o dia inteiro sem interrupções.",
    author: "Rafael M.",
    role: "Afiliado e Gestor de Tráfego",
    metric: "+180 projetos",
  },
  {
    content: "Antes eu perdia horas esperando créditos voltarem. Agora consigo desenvolver uma landing page inteira e ainda finalizar minha aplicação no mesmo dia.",
    author: "Juliana S.",
    role: "Infoprodutora",
    metric: "10h economizadas/semana",
  },
  {
    content: "Não sou programador. Instalei, ativei e em poucos minutos já estava usando normalmente. Muito mais simples do que imaginei.",
    author: "Carlos R.",
    role: "Empreendedor Digital",
    metric: "1º projeto em 15 min",
  },
  {
    content: "Só o que economizei deixando de pagar outras ferramentas já compensou o investimento. Valeu cada centavo.",
    author: "Marina A.",
    role: "Dona de E-commerce",
    metric: "+R$ 2.300 economizados",
  },
  {
    content: "Agora consigo manter vários projetos abertos ao mesmo tempo sem ficar preocupado em gastar créditos. Minha produtividade multiplicou.",
    author: "Eduardo P.",
    role: "Freelancer",
    metric: "Muito mais produtividade",
  },
  {
    content: "A fila automática e o melhorador de prompts mudaram completamente meu fluxo de trabalho. Não preciso ficar grudado na tela e o resultado dos projetos é bem melhor.",
    author: "Fernanda L.",
    role: "Designer e Criadora de Apps",
    metric: "+40 prompts/dia",
  },
];

function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  
  // We double the testimonials for the seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <Section id="depoimentos" className="overflow-hidden px-0 sm:px-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <span className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            Mais de 14.000 usuários
          </span>
        </Reveal>
        
        <Reveal delay={80}>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Quem usa, recomenda.
          </h2>
        </Reveal>
        
        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Milhares de criadores, afiliados, infoprodutores e empreendedores digitais já utilizam a Super Lovable diariamente para desenvolver sem interrupções.
          </p>
        </Reveal>
      </div>

      <div 
        className="relative mt-16 w-full overflow-hidden py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={cn(
            "flex w-max gap-6 px-3",
            "animate-infinite-scroll",
            isPaused && "pause-animation"
          )}
        >
          {extendedTestimonials.map((t, i) => (
            <article 
              key={i} 
              className="glass-strong relative flex w-[320px] flex-col rounded-[2rem] p-6 shadow-glow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow sm:w-[400px]"
            >
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                "{t.content}"
              </p>
              
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-brand/20 text-[14px] font-bold text-primary ring-1 ring-white/10">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold leading-none">{t.author}</h4>
                    <p className="mt-1 text-[12px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                
                <div className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary ring-1 ring-primary/20">
                  {t.metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl justify-center px-5">
        <div className="glass-strong flex w-fit flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full px-8 py-4 text-center text-[13px] font-medium text-muted-foreground shadow-sm sm:text-[14px]">
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            4,9/5
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span>+14.000 usuários</span>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span>+320 avaliações</span>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span className="text-primary">+97% recomendam</span>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Planos ---------------- */

const plans = [
  {
    name: "Starter",
    price: "R$ 9,90",
    period: "7 dias",
    desc: "Ideal para conhecer.",
    perks: ["Acesso completo por 7 dias", "Todos os recursos liberados", "Funciona em contas gratuitas"],
    badge: "Porta de entrada",
    highlight: false,
  },
  {
    name: "Anual",
    price: "R$ 29,90",
    period: "12 meses",
    desc: "Um ano inteiro criando sem pausas.",
    perks: ["12 meses de acesso", "Atualizações incluídas", "Todos os recursos liberados"],
    badge: "★★★★★ Melhor custo-benefício",
    highlight: "soft" as const,
  },
  {
    name: "Vitalício",
    price: "R$ 79,90",
    period: "Acesso vitalício",
    desc: "Pague uma vez, use para sempre.",
    perks: [
      "Acesso vitalício",
      "Todas as atualizações futuras",
      "Novos recursos primeiro",
      "Todos os recursos liberados",
    ],
    badge: "Mais vendido",
    highlight: "strong" as const,
  },
];

function PricingSection() {
  return (
    <Section
      id="planos"
      eyebrow="Planos"
      title="Escolha quanto tempo você quer criar sem limites."
      subtitle="A ferramenta mais completa pelo valor mais acessível da internet."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 100} className="h-full">
            <article
              className={cn(
                "relative flex h-full flex-col rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1.5",
                p.highlight === "strong"
                  ? "glass-strong border-primary/45 bg-[linear-gradient(160deg,oklch(0.7_0.23_350/0.14),oklch(0.62_0.22_300/0.10))] shadow-glow lg:-mt-4 lg:mb-4"
                  : "glass-strong",
              )}
            >
              <span
                className={cn(
                  "inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                  p.highlight === "strong"
                    ? "bg-brand text-primary-foreground"
                    : p.highlight === "soft"
                      ? "bg-accent/20 text-accent-foreground"
                      : "bg-secondary text-muted-foreground",
                )}
              >
                {p.badge}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">Plano {p.name}</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="pb-1.5 text-[13px] text-muted-foreground">/ {p.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-[13.5px] text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    {perk}
                  </li>
                ))}
              </ul>
              <CtaButton
                href="#cta-final"
                size="md"
                variant={p.highlight === "strong" ? "primary" : "ghost"}
                className="mt-7 w-full"
              >
                Quero este plano <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Garantia ---------------- */

function GuaranteeSection() {
  return (
    <Section>
      <Reveal>
        <div className="glass-strong mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] bg-[linear-gradient(140deg,oklch(0.7_0.23_350/0.10),oklch(0.62_0.22_300/0.10))] px-6 py-12 text-center">
          <div className="relative flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-primary/40 bg-background/50 shadow-[0_0_30px_rgba(255,45,187,0.3)]">
              <span className="text-[20px] font-black text-primary">7</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Dias</span>
              <Shield className="absolute -bottom-2 h-8 w-8 text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Teste sem risco.</h2>
          <p className="max-w-xl text-pretty text-base text-muted-foreground">
            Você possui sete dias para solicitar o cancelamento caso não fique satisfeito.
            Devolvemos 100% do valor pago. Sem burocracia. Sem perguntas.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  [
    "Funciona na Lovable gratuita?",
    "Sim. A extensão funciona em qualquer conta da Lovable, inclusive na versão gratuita. Você não precisa contratar nenhum outro plano para utilizá-la.",
  ],
  ["Preciso entender programação?", "Não. A Super Lovable foi feita para qualquer pessoa. Você instala, ativa e usa."],
  ["Funciona em qualquer conta?", "Sim. Funciona normalmente na sua conta atual da Lovable, sem trocar nada."],
  ["Como recebo minha licença?", "Por e-mail, logo após a confirmação do pagamento."],
  ["Quanto tempo demora?", "Menos de um minuto entre instalar, ativar e voltar a criar."],
  ["Posso trocar de computador?", "Pode. Basta instalar a extensão e ativar sua licença no novo dispositivo."],
  ["Vou precisar comprar créditos?", "Não. A proposta é justamente você produzir sem depender da barrinha de créditos."],
  ["Recebo atualizações?", "Sim. Atualizações são automáticas e inclusas no seu plano."],
  ["É seguro?", "Sim. A extensão roda no seu navegador e não altera nada da sua conta."],
  ["Existe garantia?", "Sete dias de garantia total. Não gostou, devolvemos 100% do valor."],
];

function FaqSection() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Perguntas frequentes.">
      <Reveal>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map(([q, a]) => (
            <AccordionItem
              key={q}
              value={q}
              className="glass mb-3 rounded-2xl border px-5 transition-colors hover:border-primary/25"
            >
              <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

/* ---------------- CTA final + Footer ---------------- */

function FinalCta() {
  return (
    <section id="cta-final" className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.23_350/0.16),transparent_65%)]" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          O próximo projeto que você abandonar por falta de créditos pode ser justamente o que{" "}
          <span className="text-gradient">mudaria o seu negócio</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Não interrompa mais suas ideias no meio do caminho. Instale a Super Lovable e continue
          criando do início ao fim, sem depender de créditos.
        </p>
        <CtaButton href="#planos" size="lg" className="mt-9">
          QUERO CRIAR SEM LIMITES{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </CtaButton>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="bg-brand flex h-9 w-9 items-center justify-center rounded-xl">
            <Sparkles className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.4} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Super <span className="text-gradient">Lovable</span>
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {["Termos de Uso", "Política de Privacidade", "Contato"].map((l) => (
            <a
              key={l}
              href="#topo"
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <p className="text-[12.5px] text-muted-foreground">
          © {new Date().getFullYear()} Super Lovable. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <WhatIsSection />
        
        
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
