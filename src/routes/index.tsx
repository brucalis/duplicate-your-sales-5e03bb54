import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  Users,
  BarChart3,
} from "lucide-react";
import heroImage from "@/assets/hero-duplicar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUPLICAR — Dobre seus resultados em 90 dias" },
      {
        name: "description",
        content:
          "Método DUPLICAR: estratégia prática para dobrar receita, leads e eficiência do seu negócio sem depender de mais horas de trabalho.",
      },
      {
        property: "og:title",
        content: "DUPLICAR — Dobre seus resultados em 90 dias",
      },
      {
        property: "og:description",
        content:
          "Método DUPLICAR: estratégia prática para dobrar receita, leads e eficiência do seu negócio sem depender de mais horas de trabalho.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: TrendingUp,
    title: "Dobre a receita",
    description:
      "Estrutura de oferta e precificação para aumentar o ticket médio sem perder clientes.",
  },
  {
    icon: Target,
    title: "Foco no que vende",
    description:
      "Elimine atividades de baixo retorno e concentre energia nos 20% que geram 80% do resultado.",
  },
  {
    icon: Zap,
    title: "Velocidade de execução",
    description:
      "Sprints de 7 dias com ações claras, sem enrolação teórica ou planilhas inúteis.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Mapeamos gargalos, oportunidades e o funil real do seu negócio.",
  },
  {
    number: "02",
    title: "Plano de 90 dias",
    description: "Criamos um roteiro com metas semanais e responsáveis claros.",
  },
  {
    number: "03",
    title: "Execução acompanhada",
    description: "Reuniões semanais, ajustes rápidos e ritmo de crescimento sustentável.",
  },
];

const testimonials = [
  {
    quote:
      "Em 67 dias conseguimos dobrar o faturamento sem contratar ninguém. O método é direto e funciona.",
    author: "Mariana Souza",
    role: "CEO, TechFlow",
  },
  {
    quote:
      "Pela primeira vez tive clareza do que realmente movia a agência. O ROI foi imediato.",
    author: "Ricardo Lima",
    role: "Fundador, Lima Digital",
  },
  {
    quote:
      "A metodologia nos forçou a parar de perseguir métricas de vaidade. O resultado veio natural.",
    author: "Ana Costa",
    role: "COO, Viva Brands",
  },
];

const faqs = [
  {
    question: "Para que tipo de negócio funciona?",
    answer:
      "O método DUPLICAR foi testado em SaaS, agências, e-commerce B2B e serviços profissionais. Funciona melhor para empresas que já vendem e querem escalar resultados.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "A maioria dos clientes sente mudança operacional nas primeiras 2 semanas. Resultados financeiros mensuráveis costumam aparecer entre 30 e 60 dias.",
  },
  {
    question: "Preciso parar minha operação para implementar?",
    answer:
      "Não. O método é feito para ser aplicado enquanto você continua operando. As mudanças são incrementais, não traumáticas.",
  },
  {
    question: "Qual o investimento?",
    answer:
      "Trabalhamos com planos sob medida. Agende uma conversa rápida e receba uma proposta alinhada ao tamanho e estágio do seu negócio.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-lg font-bold text-primary-foreground">
              D
            </div>
            <span className="text-lg font-semibold tracking-tight">DUPLICAR</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#beneficios" className="transition-colors hover:text-foreground">
              Benefícios
            </a>
            <a href="#metodo" className="transition-colors hover:text-foreground">
              Método
            </a>
            <a href="#depoimentos" className="transition-colors hover:text-foreground">
              Depoimentos
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Quero dobrar meus resultados
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Vagas abertas para agosto
              </div>
              <h1 className="text-6xl font-bold tracking-tighter text-foreground md:text-7xl lg:text-8xl">
                DUPLICAR
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                O método para dobrar seus resultados em 90 dias. Sem mais horas
                de trabalho. Sem atropelar sua equipe. Sem gastar mais em
                anúncios.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="group text-base">
                  Começar agora
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Ver como funciona
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Diagnóstico gratuito</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Contrato sem fidelidade</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />
              <img
                src={heroImage}
                alt="Visual abstrato de crescimento exponencial em tons de âmbar e azul escuro"
                width={1344}
                height={768}
                className="relative rounded-2xl border border-border/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border/50 bg-secondary/30 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Aprovado por líderes de empresas como
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
            {["TechFlow", "Lima Digital", "Viva Brands", "ScaleUp", "Nexo"].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              O que muda quando você para de correr atrás de tudo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A maioria dos negócios cresce devagar porque tenta fazer mais. A
              gente ensina a fazer o certo.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-card/50 backdrop-blur-sm">
                <CardContent className="space-y-4 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="metodo" className="bg-secondary/20 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Como funciona o método DUPLICAR
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Três fases simples, ritmo acelerado e acompanhamento próximo em
              cada etapa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="mb-4 text-5xl font-bold text-primary/30">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-6 rounded-2xl border border-border/50 bg-card/50 p-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">+340</div>
                <div className="text-sm text-muted-foreground">negócios atendidos</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BarChart3 className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">2.1x</div>
                <div className="text-sm text-muted-foreground">média de crescimento</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">90 dias</div>
                <div className="text-sm text-muted-foreground">para resultados sólidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Quem aplicou, dobrou
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} className="bg-card/50">
                <CardContent className="pt-6">
                  <p className="mb-6 text-lg leading-relaxed text-foreground">
                    “{t.quote}”
                  </p>
                  <div>
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/20 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Dúvidas comuns
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Seu próximo passo para dobrar resultados
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Agende uma conversa gratuita de 30 minutos. Vamos entender onde você
            está e desenhar o caminho para duplicar seu negócio.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group min-w-[280px] text-base">
              Agendar minha conversa
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Sem compromisso. Sem spam.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-lg font-bold text-primary-foreground">
              D
            </div>
            <span className="text-lg font-semibold tracking-tight">DUPLICAR</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DUPLICAR. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Termos
            </a>
            <a href="#" className="hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="hover:text-foreground">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
