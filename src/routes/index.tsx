import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Placeholder } from "@/components/Placeholder";
import {
  ArrowRight,
  Check,
  X,
  Chrome,
  Zap,
  RefreshCcw,
  CreditCard,
  Apple,
  MonitorSmartphone,
  Sparkles,
  ShoppingCart,
  Mail,
  Download,
  MousePointerClick,
  Rocket,
  Infinity as InfinityIcon,
  Wand2,
  Layers,
  ShieldCheck,
  Gauge,
  Puzzle,
  Star,
  Gift,
  BookOpen,
  Users,
  Building2,
  Bot,
  Database,
  Palette,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lovable Ilimitada — Extensão premium para o Chrome" },
      {
        name: "description",
        content:
          "Extensão para Chrome que eleva sua experiência com o Lovable. Instalação simples, atualizações incluídas e pagamento único.",
      },
      { property: "og:title", content: "Lovable Ilimitada — Extensão premium para o Chrome" },
      {
        property: "og:description",
        content:
          "Extensão para Chrome que eleva sua experiência com o Lovable. Instalação simples, atualizações incluídas e pagamento único.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const heroBadges = [
  { icon: Chrome, label: "Extensão Chrome" },
  { icon: Zap, label: "Instalação em minutos" },
  { icon: RefreshCcw, label: "Atualizações incluídas" },
  { icon: CreditCard, label: "Pagamento único" },
  { icon: MonitorSmartphone, label: "Windows" },
  { icon: Apple, label: "Mac" },
];

const steps = [
  { icon: ShoppingCart, title: "Compra", text: "Escolha seu plano em segundos." },
  { icon: Mail, title: "Recebe acesso", text: "Enviamos o link direto no seu e-mail." },
  { icon: Download, title: "Instala a extensão", text: "Um clique no Chrome e pronto." },
  { icon: MousePointerClick, title: "Abre o Lovable", text: "Use como você já usa hoje." },
  { icon: Rocket, title: "Começa a usar", text: "Fluxo turbinado imediatamente." },
];

const benefits = [
  { icon: Gauge, title: "Mais produtividade", text: "Menos cliques, mais entrega." },
  { icon: InfinityIcon, title: "Fluxo contínuo", text: "Trabalhe sem interrupções." },
  { icon: Wand2, title: "Instalação simples", text: "Sem configuração complicada." },
  { icon: CreditCard, title: "Economia real", text: "Pague uma vez, use por muito tempo." },
  { icon: Layers, title: "Facilidade de uso", text: "Interface intuitiva desde o primeiro minuto." },
  { icon: Puzzle, title: "Compatibilidade", text: "Funciona junto com o Lovable oficial." },
  { icon: RefreshCcw, title: "Atualizações inclusas", text: "Novas versões sem custo adicional." },
  { icon: ShieldCheck, title: "Seguro e leve", text: "Feito para não pesar no navegador." },
];

const audiences = [
  { icon: Palette, label: "Landing Pages" },
  { icon: Layers, label: "SaaS" },
  { icon: Bot, label: "Automação" },
  { icon: Sparkles, label: "Projetos com IA" },
  { icon: Rocket, label: "MVPs" },
  { icon: Database, label: "Supabase" },
  { icon: Building2, label: "Empresas" },
  { icon: Briefcase, label: "Freelancers" },
  { icon: Users, label: "Agências" },
  { icon: Star, label: "Criadores" },
];

const bonuses = [
  "Guia rápido: primeiros passos com a extensão",
  "Checklist de produtividade no Lovable",
  "Biblioteca de prompts prontos",
  "Atalhos e boas práticas",
  "Grupo exclusivo de novidades",
];

const testimonials = [
  {
    name: "Ana Ribeiro",
    role: "Product Designer",
    text: "Mudou meu dia a dia. Ficou muito mais leve trabalhar em vários projetos.",
  },
  {
    name: "Rafael Monteiro",
    role: "Fundador de SaaS",
    text: "Instalei em 2 minutos. No mesmo dia já tinha ganho de produtividade.",
  },
  {
    name: "Camila Duarte",
    role: "Freelancer",
    text: "A melhor compra do ano. Simples, funcional e muito bem feita.",
  },
  {
    name: "Bruno Alves",
    role: "Agência Digital",
    text: "Todo o time adotou. O fluxo entre projetos ficou realmente contínuo.",
  },
  {
    name: "Larissa Prado",
    role: "Criadora de conteúdo",
    text: "Vale muito o preço. Atualizações constantes e suporte atencioso.",
  },
  {
    name: "Diego Nunes",
    role: "Dev Indie",
    text: "Elegante, leve e útil. Recomendo pra quem vive dentro do Lovable.",
  },
];

const faqs = [
  { q: "O que eu recebo ao comprar?", a: "Acesso imediato à extensão para Chrome, com instruções passo a passo por e-mail e atualizações incluídas." },
  { q: "Como funciona na prática?", a: "Você instala a extensão no seu navegador Chrome, abre o Lovable normalmente e passa a contar com uma experiência aprimorada." },
  { q: "É realmente uma extensão?", a: "Sim. É uma extensão oficial para o Google Chrome, instalada em poucos cliques como qualquer outra." },
  { q: "É fácil instalar?", a: "Muito fácil. O processo leva poucos minutos e enviamos um guia visual completo." },
  { q: "Funciona no Windows?", a: "Sim, funciona perfeitamente em qualquer computador Windows com o Chrome instalado." },
  { q: "Funciona no Mac?", a: "Sim, é totalmente compatível com Mac." },
  { q: "Preciso saber programar?", a: "Não. A extensão foi desenhada para qualquer pessoa, técnica ou não." },
  { q: "Como recebo o acesso?", a: "Assim que a compra é confirmada, você recebe o link e as instruções no e-mail cadastrado." },
  { q: "As atualizações estão incluídas?", a: "Sim. Todas as atualizações do seu plano estão inclusas, sem custos extras." },
];

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.16_165/0.18),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.22_300/0.18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_200/0.18),transparent_60%)] blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand shadow-glow">
              <InfinityIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              Lovable <span className="text-gradient">Ilimitada</span>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#o-que-e" className="transition-colors hover:text-foreground">O que é</a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">Como funciona</a>
            <a href="#planos" className="transition-colors hover:text-foreground">Planos</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex" asChild>
            <a href="#planos">Quero agora</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up space-y-8">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Nova versão disponível para Chrome
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Sua experiência com o Lovable,{" "}
              <span className="text-gradient">sem limites.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              A extensão para Chrome que eleva o Lovable a outro nível. Fluxo
              contínuo, instalação simples e uma experiência premium do início
              ao fim.
            </p>
            <ul className="space-y-2.5 text-[15px] text-foreground/90">
              {[
                "Instalação em poucos minutos",
                "Compatível com Windows e Mac",
                "Atualizações incluídas para sempre",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group h-12 px-6 text-base shadow-glow" asChild>
                <a href="#planos">
                  Instalar agora
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base" asChild>
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Garantia de 7 dias
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-primary" />
                +2.500 usuários ativos
              </div>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-brand opacity-25 blur-3xl" />
              <Placeholder label="[IMAGEM HERO PREMIUM]" aspect="aspect-[4/3]" className="animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BAR */}
      <section className="border-y border-border/50 bg-secondary/20 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {heroBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <b.icon className="h-4 w-4 text-primary" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE É */}
      <section id="o-que-e" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              O que é
            </span>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Uma extensão para Chrome que <span className="text-gradient">turbina o Lovable</span>.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A Lovable Ilimitada é uma extensão simples e elegante para o
              Google Chrome. Você instala uma vez, abre o Lovable normalmente e
              passa a ter uma experiência muito mais fluida no dia a dia.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nada de configurações complicadas. Nada técnico. É só instalar e
              usar. Feita para quem cria todos os dias e precisa de agilidade
              real.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="glass rounded-full px-4 py-1.5 text-sm">Chrome</span>
              <span className="glass rounded-full px-4 py-1.5 text-sm">Windows</span>
              <span className="glass rounded-full px-4 py-1.5 text-sm">Mac</span>
              <span className="glass rounded-full px-4 py-1.5 text-sm">Sem código</span>
            </div>
          </div>
          <Placeholder label="[ILUSTRAÇÃO EXPLICATIVA]" aspect="aspect-square" />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Como funciona
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Do clique ao <span className="text-gradient">primeiro uso</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cinco passos rápidos e você já está usando.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
            <div className="grid gap-8 lg:grid-cols-5">
              {steps.map((s, i) => (
                <div key={s.title} className="relative flex flex-col items-center text-center">
                  <div className="glass relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
                    <s.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-1 text-base font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <Placeholder label="[FLUXO DE INSTALAÇÃO]" aspect="aspect-[16/6]" />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Benefícios
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Feita para <span className="text-gradient">acelerar você</span>.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMONSTRAÇÃO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Demonstração
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Veja como <span className="text-gradient">se encaixa</span> no seu fluxo.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Placeholder label="[NOTEBOOK COM LOVABLE]" aspect="aspect-[4/3]" className="lg:col-span-2" />
            <Placeholder label="[EXTENSÃO NO CHROME]" aspect="aspect-[4/3]" />
            <Placeholder label="[PAINEL DA EXTENSÃO]" aspect="aspect-[4/3]" />
            <Placeholder label="[VISÃO DETALHADA]" aspect="aspect-[4/3]" className="lg:col-span-2" />
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Comparativo
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Por que a <span className="text-gradient">Lovable Ilimitada</span>?
            </h2>
          </div>
          <div className="glass overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border/60 bg-secondary/30 text-sm font-medium">
              <div className="px-6 py-5 text-muted-foreground">Recurso</div>
              <div className="px-6 py-5 text-center text-muted-foreground">Outras soluções</div>
              <div className="px-6 py-5 text-center">
                <span className="text-gradient font-semibold">Lovable Ilimitada</span>
              </div>
            </div>
            {[
              ["Instalação em minutos", false, true],
              ["Pagamento único", false, true],
              ["Atualizações incluídas", false, true],
              ["Compatível com Mac e Windows", true, true],
              ["Interface premium", false, true],
              ["Sem conhecimento técnico", false, true],
              ["Suporte próximo", false, true],
            ].map(([label, a, b]) => (
              <div
                key={label as string}
                className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border/40 text-sm last:border-0"
              >
                <div className="px-6 py-4">{label}</div>
                <div className="flex items-center justify-center px-6 py-4">
                  {a ? (
                    <Check className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/60" />
                  )}
                </div>
                <div className="flex items-center justify-center px-6 py-4">
                  {b ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </span>
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/60" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Para quem é
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Se você cria no Lovable, <span className="text-gradient">é pra você</span>.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <a.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="glass grid items-center gap-12 rounded-3xl p-10 lg:grid-cols-[1fr_1.2fr] lg:p-16">
            <Placeholder label="[CAPA DO GUIA]" aspect="aspect-[3/4]" />
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Bônus exclusivos
              </span>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Você também <span className="text-gradient">recebe de graça</span>.
              </h2>
              <p className="text-lg text-muted-foreground">
                Uma seleção de materiais para você começar com o pé direito.
              </p>
              <ul className="space-y-3">
                {bonuses.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                      <Gift className="h-3.5 w-3.5 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Planos
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Escolha seu <span className="text-gradient">acesso</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sem assinatura recorrente. Você paga uma vez.
            </p>
          </div>
          <div className="mb-12">
            <Placeholder label="[MOCKUP DOS PLANOS]" aspect="aspect-[16/6]" />
          </div>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {/* Starter */}
            <div className="glass flex flex-col rounded-3xl p-8">
              <div className="mb-6">
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Starter
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">Ideal para testar.</p>
              </div>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight">R$ 9,90</span>
              </div>
              <ul className="mb-8 space-y-3 text-[15px]">
                {[
                  "Acesso por 7 dias",
                  "Extensão completa",
                  "Compatível com Windows e Mac",
                  "Suporte por e-mail",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="outline" className="mt-auto h-12">
                Testar por 7 dias
              </Button>
            </div>
            {/* Completo */}
            <div className="relative flex flex-col rounded-3xl p-[1.5px] bg-brand shadow-glow">
              <div className="relative flex flex-1 flex-col rounded-[calc(1.5rem-1.5px)] bg-card p-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Mais escolhido
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-primary">
                    Completo
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Muito mais economia. Recomendado.
                  </p>
                </div>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-6xl font-semibold tracking-tight">R$ 19,90</span>
                  <span className="text-sm text-muted-foreground">/ ano</span>
                </div>
                <ul className="mb-8 space-y-3 text-[15px]">
                  {[
                    "Acesso por 12 meses",
                    "Extensão completa e sem limites",
                    "Todas as atualizações incluídas",
                    "Bônus exclusivos",
                    "Suporte prioritário",
                    "Compatível com Windows e Mac",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="group mt-auto h-12 shadow-glow">
                  Garantir acesso completo
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Depoimentos
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Quem usa, <span className="text-gradient">recomenda</span>.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6">
                <div className="mb-4 flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-[15px] leading-relaxed text-foreground/90">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,oklch(0.78_0.16_165/0.15),transparent_70%)]" />
            <div className="mx-auto mb-8 w-fit">
              <Placeholder label="[SELO DE GARANTIA]" aspect="aspect-square" className="w-40" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              7 dias de <span className="text-gradient">garantia total</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Se por qualquer motivo você não gostar, devolvemos 100% do valor.
              Sem burocracia. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Perguntas <span className="text-gradient">frequentes</span>.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass overflow-hidden rounded-2xl border-0 px-6"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="glass relative overflow-hidden rounded-[2rem] p-10 md:p-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.16_165/0.2),transparent_60%),radial-gradient(circle_at_80%_80%,oklch(0.65_0.22_300/0.2),transparent_60%)]" />
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  Instale hoje. <br />
                  <span className="text-gradient">Sinta a diferença amanhã.</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Uma extensão simples para o Chrome, feita para quem vive
                  dentro do Lovable.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="group h-12 px-6 text-base shadow-glow" asChild>
                    <a href="#planos">
                      Quero a Lovable Ilimitada
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-6 text-base" asChild>
                    <a href="#faq">Tenho dúvidas</a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 7 dias
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-primary" /> Guia completo incluso
                  </div>
                </div>
              </div>
              <Placeholder label="[IMAGEM FINAL]" aspect="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
              <InfinityIcon className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold">
              Lovable <span className="text-gradient">Ilimitada</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lovable Ilimitada. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Termos</a>
            <a href="#" className="hover:text-foreground">Privacidade</a>
            <a href="#" className="hover:text-foreground">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
