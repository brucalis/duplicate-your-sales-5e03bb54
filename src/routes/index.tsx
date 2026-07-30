import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bug,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Gauge,
  History,
  Images,
  Infinity as InfinityIcon,
  Keyboard,
  LayoutGrid,
  ListOrdered,
  Menu,
  MessageSquare,
  Puzzle,
  RefreshCw,
  Search,
  Settings,
  Shield,
  Sparkles,
  Wand2,
  Wrench,
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
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Lovable — Use a Lovable sem ficar sem créditos" },
      {
        name: "description",
        content:
          "Extensão para Chrome que remove as interrupções da Lovable. Instale em menos de um minuto e crie seus projetos sem limites a partir de R$ 9,90.",
      },
      { property: "og:title", content: "Super Lovable — Crie sem limites na Lovable" },
      {
        property: "og:description",
        content:
          "Trabalhe sem interrupções, entregue mais projetos e esqueça a barrinha de créditos. Extensão premium para Chrome.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Recursos", href: "#recursos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

/* ---------------- Header ---------------- */

function Logo() {
  return (
    <a href="#topo" className="flex items-center gap-2.5">
      <span className="bg-brand flex h-9 w-9 items-center justify-center rounded-xl shadow-[0_8px_24px_-10px_oklch(0.7_0.23_350/0.8)]">
        <Sparkles className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.4} />
      </span>
      <span className="text-[15px] font-semibold tracking-tight">
        Super <span className="text-gradient">Lovable</span>
      </span>
    </a>
  );
}

function TopBar() {
  return (
    <div className="relative z-50 border-b border-border/60 bg-[linear-gradient(90deg,oklch(0.7_0.23_350/0.18),oklch(0.62_0.22_300/0.18))] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-5 py-2 text-center sm:px-8">
        <p className="text-[12.5px] font-medium text-foreground/90">
          🔥 Oferta de lançamento • Use a Lovable sem gastar créditos por apenas{" "}
          <span className="font-semibold text-primary">R$ 9,90</span>
        </p>
        <a
          href="#planos"
          className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-background/40 px-3 py-1 text-[11.5px] font-semibold text-primary transition-colors hover:bg-primary/15"
        >
          Quero começar <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border/70 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <CtaButton href="#planos" size="sm" className="hidden sm:inline-flex">
              COMEÇAR AGORA
            </CtaButton>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="glass flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border/60 bg-background/95 px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <CtaButton href="#planos" size="sm" className="mt-2 w-full">
                COMEÇAR AGORA
              </CtaButton>
            </nav>
          </div>
        ) : null}
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

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.23_350/0.16),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(oklch(1_0_0/0.03)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.03)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-primary">
              <Zap className="h-3.5 w-3.5" /> Extensão para Chrome
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Nunca mais fique sem <span className="text-gradient">créditos</span> no Lovable.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Crie projetos sem interrupções, trabalhe com liberdade e esqueça a ansiedade de
              esperar créditos para continuar produzindo.
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
          <Reveal delay={400}>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" /> 7 dias de garantia • Pagamento único a
              partir de R$ 9,90
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_60%_40%,oklch(0.66_0.24_330/0.22),transparent_70%)] blur-2xl" />
          <div className="glass-strong relative rounded-[2rem] p-3 shadow-glow">
            <Placeholder
              label="[Imagem Hero / VSL]"
              hint="Vídeo ou print grande da interface da Super Lovable aberta"
              aspect="aspect-[4/3]"
              className="rounded-[1.5rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Seção 2: Dores ---------------- */

const pains = [
  {
    icon: Clock,
    title: "Seu projeto parou no meio.",
    text: "Você estava produzindo normalmente e precisou interromper tudo.",
  },
  {
    icon: Gauge,
    title: "Os créditos acabaram.",
    text: "Bem na hora em que você estava evoluindo o projeto.",
  },
  {
    icon: RefreshCw,
    title: "Esperar virou rotina.",
    text: "Você perde tempo aguardando novos créditos para continuar trabalhando.",
  },
];

function PainSection() {
  return (
    <Section title="Você já passou por alguma dessas situações?">
      <div className="grid gap-5 md:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="glass-strong group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-transform duration-500 group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="glass-strong mt-10 flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,oklch(0.7_0.23_350/0.12),oklch(0.62_0.22_300/0.12))] px-6 py-10 text-center">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Isso não precisa mais acontecer.
          </h3>
          <CtaButton href="#o-que-e" size="md">
            Conhecer a solução <ArrowRight className="h-4 w-4" />
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- Seção 3: O que é ---------------- */

const whatList = [
  "Instala em menos de um minuto",
  "Interface intuitiva",
  "Um clique para começar",
  "Continua funcionando diretamente na Lovable",
  "Não exige configurações complicadas",
];

function WhatIsSection() {
  return (
    <Section id="o-que-e">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              O que é a <span className="text-gradient">Super Lovable</span>?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-pretty text-base text-muted-foreground">
              A Super Lovable é uma extensão para Chrome criada para tornar sua experiência na
              Lovable muito mais prática.
            </p>
            <p className="mt-3 text-pretty text-base text-muted-foreground">
              Depois de instalada, você continua utilizando a Lovable normalmente, porém com
              recursos adicionais e muito mais liberdade para criar.
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

/* ---------------- Seção 4: Em ação ---------------- */

const steps = [
  { n: "1", title: "Instale.", text: "Adicione a extensão ao Chrome." },
  { n: "2", title: "Ative.", text: "Insira sua licença e pronto." },
  { n: "3", title: "Abra a Lovable.", text: "Tudo aparece na mesma tela." },
  { n: "4", title: "Comece a criar.", text: "Sem pausas, sem espera." },
];

const features = [
  { icon: ListOrdered, name: "Fila", text: "Organize melhor sua produtividade." },
  { icon: History, name: "Histórico", text: "Nunca perca seus prompts." },
  { icon: Wrench, name: "Ferramentas", text: "Tudo em um só painel." },
  { icon: Puzzle, name: "Componentes", text: "Ganhe velocidade." },
  { icon: LayoutGrid, name: "UI", text: "Telas bonitas em minutos." },
  { icon: Search, name: "SEO", text: "Seu projeto pronto pro Google." },
  { icon: Code2, name: "Refatoração", text: "Código limpo sem esforço." },
  { icon: MessageSquare, name: "Comentários", text: "Feedback direto no projeto." },
  { icon: Bug, name: "Bugs", text: "Encontre e corrija rápido." },
  { icon: Gauge, name: "Otimização", text: "Mais desempenho por padrão." },
  { icon: Cpu, name: "Modelos de IA", text: "Escolha o melhor para cada tarefa." },
  { icon: Settings, name: "Configurações", text: "Tudo acessível em poucos cliques." },
];

function HowItWorksSection() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Demonstração"
      title="Veja a Super Lovable em ação."
      subtitle="Você leva menos de um minuto para começar."
    >
      <div className="grid gap-6 lg:grid-cols-[1.85fr_1fr]">
        <Reveal>
          <div className="glass-strong h-full rounded-[2rem] p-3">
            <Placeholder
              label="[GIF da Extensão em uso]"
              hint="Gravação mostrando instalação e uso dentro da Lovable"
              aspect="aspect-video"
              className="h-full rounded-[1.5rem]"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ol className="glass-strong flex h-full flex-col justify-center gap-6 rounded-[2rem] p-7">
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-4">
                <span className="bg-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[13px] font-bold text-primary-foreground">
                  {s.n}
                </span>
                <div>
                  <p className="text-[15px] font-semibold tracking-tight">{s.title}</p>
                  <p className="text-[13px] text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.name} delay={(i % 4) * 60}>
            <div className="glass group h-full rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-400 group-hover:scale-110">
                <f.icon className="h-4 w-4" />
              </span>
              <p className="mt-4 text-sm font-semibold tracking-tight">{f.name}</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="mt-10 text-center">
          <CtaButton href="#planos" size="lg">
            COMEÇAR AGORA <ArrowRight className="h-4 w-4" />
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- Seção 5: Benefícios ---------------- */

const benefits = [
  { icon: Images, title: "Upload de até 5 imagens", text: "Envie referências de uma vez só." },
  { icon: InfinityIcon, title: "Projetos ilimitados", text: "Crie quantos quiser, sem travas." },
  { icon: Zap, title: "Mais velocidade", text: "Da ideia ao resultado em minutos." },
  { icon: Sparkles, title: "Interface intuitiva", text: "Nada para aprender, é só usar." },
  { icon: BadgeCheck, title: "Compatível com Chrome", text: "Funciona onde você já trabalha." },
  { icon: RefreshCw, title: "Atualizações constantes", text: "Novos recursos sempre incluídos." },
  { icon: Keyboard, title: "Atalhos rápidos", text: "Menos cliques, mais produção." },
  { icon: Wand2, title: "Ferramentas integradas", text: "Tudo dentro da própria Lovable." },
];

function BenefitsSection() {
  return (
    <Section id="recursos" eyebrow="Recursos" title="Tudo pensado para você criar mais.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={(i % 4) * 70}>
            <article className="glass-strong group flex h-full flex-col rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-transform duration-500 group-hover:scale-110">
                <b.icon className="h-4.5 w-4.5" />
              </span>
              <Placeholder
                label={`[Imagem ${b.title}]`}
                aspect="aspect-[16/10]"
                className="mt-5 rounded-2xl"
              />
              <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Seção 6: Comparativo ---------------- */

const comparison = [
  ["Limitações diárias", "Sem limites"],
  ["Configuração complicada", "Um clique"],
  ["Interface comum", "Interface premium"],
  ["Poucos recursos", "Ferramentas extras"],
  ["Atualizações esporádicas", "Atualizações constantes"],
  ["Maior investimento", "A partir de R$ 9,90"],
];

function ComparisonSection() {
  return (
    <Section title="Por que escolher a Super Lovable?">
      <Reveal>
        <div className="glass-strong overflow-hidden rounded-[2rem]">
          <div className="grid grid-cols-2 border-b border-border/60">
            <div className="px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:px-8">
              Outras soluções
            </div>
            <div className="bg-[linear-gradient(120deg,oklch(0.7_0.23_350/0.14),oklch(0.62_0.22_300/0.14))] px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary sm:px-8">
              Super Lovable
            </div>
          </div>
          {comparison.map(([left, right], i) => (
            <div
              key={left}
              className={cn(
                "grid grid-cols-2 items-center",
                i !== comparison.length - 1 && "border-b border-border/50",
              )}
            >
              <div className="flex items-center gap-2.5 px-5 py-4 text-[13.5px] text-muted-foreground sm:px-8 sm:text-sm">
                <X className="h-4 w-4 shrink-0 text-destructive/80" />
                {left}
              </div>
              <div className="flex items-center gap-2.5 bg-primary/[0.04] px-5 py-4 text-[13.5px] font-medium text-foreground sm:px-8 sm:text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                {right}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-10 text-center">
          <CtaButton href="#planos" size="lg">
            Quero criar sem limites <ArrowRight className="h-4 w-4" />
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- Seção 7: Depoimentos ---------------- */

const slides = [
  { label: "[Print WhatsApp]", hint: "Conversas reais de clientes satisfeitos" },
  { label: "[Print Telegram]", hint: "Feedback da comunidade no Telegram" },
  { label: "[Print Discord]", hint: "Depoimentos do servidor no Discord" },
  { label: "[Print Resultados]", hint: "Projetos entregues pelos usuários" },
  { label: "[Print Clientes]", hint: "Prints de clientes finais aprovando" },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <Section
      id="depoimentos"
      eyebrow="Prova social"
      title="Mais de XXX usuários já utilizam a Super Lovable."
      subtitle="Prints reais de quem já trabalha sem interrupções todos os dias."
    >
      <Reveal>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s) => (
                <div key={s.label} className="w-full shrink-0 px-1.5">
                  <div className="glass-strong rounded-[2rem] p-3">
                    <Placeholder
                      label={s.label}
                      hint={s.hint}
                      aspect="aspect-[16/9]"
                      className="rounded-[1.5rem]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  aria-label={`Ir para o slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "bg-brand w-7" : "w-1.5 bg-border",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => go(1)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- Seção 8: Planos ---------------- */

const plans = [
  {
    name: "Starter",
    price: "R$ 9,90",
    period: "7 dias",
    desc: "Ideal para conhecer.",
    perks: ["Acesso completo por 7 dias", "Todos os recursos liberados", "Suporte por e-mail"],
    badge: "Porta de entrada",
    highlight: false,
  },
  {
    name: "Anual",
    price: "R$ 29,90",
    period: "12 meses",
    desc: "Um ano inteiro criando sem pausas.",
    perks: ["12 meses de acesso", "Atualizações incluídas", "Suporte prioritário"],
    badge: "★★★★★ Melhor custo-benefício",
    highlight: "soft" as const,
  },
  {
    name: "Vitalício",
    price: "R$ 79,90",
    period: "Acesso vitalício",
    desc: "Pague uma vez, use para sempre.",
    perks: ["Acesso vitalício", "Todas as atualizações futuras", "Suporte premium", "Novos recursos primeiro"],
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
      subtitle="Pagamento único. Sem mensalidade escondida. Sem surpresa."
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

/* ---------------- Seção 9: Garantia ---------------- */

function GuaranteeSection() {
  return (
    <Section>
      <Reveal>
        <div className="glass-strong mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] bg-[linear-gradient(140deg,oklch(0.7_0.23_350/0.10),oklch(0.62_0.22_300/0.10))] px-6 py-12 text-center">
          <Placeholder
            label="[Selo de Garantia]"
            aspect="aspect-square"
            className="h-32 w-32 rounded-full"
          />
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

/* ---------------- Seção 10: FAQ ---------------- */

const faqs = [
  ["Preciso entender programação?", "Não. A Super Lovable foi feita para qualquer pessoa. Você instala, ativa e usa."],
  ["Funciona em qualquer conta?", "Sim. Funciona normalmente na sua conta atual da Lovable, sem trocar nada."],
  ["Como recebo minha licença?", "Por e-mail, logo após a confirmação do pagamento."],
  ["Quanto tempo demora?", "Menos de um minuto entre instalar, ativar e voltar a criar."],
  ["Posso trocar de computador?", "Pode. Basta instalar a extensão e ativar sua licença no novo dispositivo."],
  ["Vou precisar comprar créditos?", "Não. A proposta é justamente você produzir sem depender da barrinha de créditos."],
  ["Recebo atualizações?", "Sim. Atualizações são automáticas e inclusas no seu plano."],
  ["Como funciona o suporte?", "Atendimento humano por e-mail e comunidade, com prioridade nos planos maiores."],
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
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Comece hoje mesmo a criar <span className="text-gradient">sem limites</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Junte-se aos criadores que já trabalham sem depender da barrinha de créditos.
        </p>
        <CtaButton href="#planos" size="lg" className="mt-9">
          Quero usar a Super Lovable <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </CtaButton>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {["Termos de Uso", "Política de Privacidade", "Suporte", "Contato"].map((l) => (
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
        <HowItWorksSection />
        <BenefitsSection />
        <ComparisonSection />
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
