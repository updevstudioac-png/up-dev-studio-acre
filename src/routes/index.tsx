import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-gold.jpg";
import logoAsset from "@/assets/updev-logo.asset.json";
import {
  Rocket, Code2, Settings2, Cloud, Bot, BarChart3, Megaphone,
  TrendingUp, Eye, DollarSign, Target, Zap, ArrowRight, MessageCircle,
  XCircle, CheckCircle2, Sparkles, Layers, Globe, Cpu, LineChart,
  Instagram, Mail, Quote, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPDEV Studio — Transformamos empresas em máquinas de crescimento digital" },
      { name: "description", content: "Marketing estratégico, desenvolvimento de software, automação e soluções inteligentes para empresas que querem liderar." },
      { property: "og:title", content: "UPDEV Studio" },
      { property: "og:description", content: "Código que constrói. Estratégia que faz crescer." },
      { property: "og:image", content: logoAsset.url },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5568999508822?text=" + encodeURIComponent("Olá! Conheci a UPDEV Studio e gostaria de solicitar um orçamento para meu negócio.");

const valueProps = [
  { icon: Eye, label: "Mais visibilidade" },
  { icon: DollarSign, label: "Mais vendas" },
  { icon: Target, label: "Mais autoridade" },
  { icon: Zap, label: "Mais produtividade" },
  { icon: TrendingUp, label: "Mais crescimento" },
];

const problems = [
  "Poucos clientes",
  "Falta de presença digital",
  "Processos manuais",
  "Baixa autoridade",
  "Dificuldade para escalar",
  "Concorrentes aparecendo mais",
];

const solutions = [
  { icon: Megaphone, title: "Marketing Estratégico", desc: "Tráfego, branding, funis e autoridade digital." },
  { icon: Code2, title: "Desenvolvimento de Sites", desc: "Sites rápidos e estratégicos que convertem." },
  { icon: Settings2, title: "Sistemas Personalizados", desc: "Sob medida para escalar sua operação." },
  { icon: Cloud, title: "Plataformas SaaS", desc: "Softwares escaláveis e inteligentes." },
  { icon: Bot, title: "Automação Empresarial", desc: "Reduza tarefas manuais e ganhe eficiência." },
  { icon: BarChart3, title: "Gestão Inteligente", desc: "Controle de vendas, equipes e processos." },
];

const steps = [
  { n: "01", title: "Diagnóstico Estratégico", desc: "Mergulhamos no seu negócio e mapeamos oportunidades." },
  { n: "02", title: "Planejamento", desc: "Definimos a estratégia, arquitetura e roadmap." },
  { n: "03", title: "Desenvolvimento", desc: "Executamos com tecnologia, design e performance." },
  { n: "04", title: "Lançamento", desc: "Colocamos no ar com tração desde o primeiro dia." },
  { n: "05", title: "Otimização e Crescimento", desc: "Acompanhamos, otimizamos e escalamos resultados." },
];

const portfolio = [
  { tag: "Sites", icon: Globe },
  { tag: "Landing Pages", icon: Layers },
  { tag: "Sistemas", icon: Cpu },
  { tag: "SaaS", icon: Cloud },
  { tag: "Automações", icon: Bot },
  { tag: "Marketing", icon: LineChart },
];

const testimonials = [
  { name: "Carlos M.", role: "CEO · Construtora Horizonte", text: "A UPDEV reposicionou nossa marca e dobramos a geração de leads em 90 dias. Atendimento de outro nível." },
  { name: "Aline R.", role: "Fundadora · Clínica Vivace", text: "Saímos de um Instagram parado para uma agenda lotada. A combinação de tecnologia e marketing fez toda diferença." },
  { name: "Rodrigo S.", role: "Diretor · LogTech Brasil", text: "Desenvolveram nosso SaaS do zero e ainda assumiram o marketing. Hoje somos referência no setor." },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="UPDEV Studio"
      className={"object-contain " + className}
      width={120} height={120}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-9 w-9 rounded-full ring-1 ring-primary/30" />
            <span className="font-display text-lg tracking-wide">
              <span className="text-foreground">UP</span><span className="text-gold-gradient font-bold">DEV</span>
              <span className="text-muted-foreground text-xs tracking-luxury ml-2 hidden sm:inline">STUDIO</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground tracking-wide">
            <a href="#valor" className="hover:text-primary transition">Por que UPDEV</a>
            <a href="#solucao" className="hover:text-primary transition">Soluções</a>
            <a href="#processo" className="hover:text-primary transition">Processo</a>
            <a href="#portfolio" className="hover:text-primary transition">Portfólio</a>
            <a href="#contato" className="hover:text-primary transition">Contato</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md bg-gold-gradient text-primary-foreground hover:opacity-90 transition shadow-gold">
            Fazer orçamento
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-48 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-70" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 grid-bg opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-card/60 backdrop-blur text-xs tracking-luxury text-primary mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              UPDEV STUDIO
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
              Transformamos empresas em <span className="shimmer-text italic">máquinas de crescimento</span> digital.
            </h1>

            <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
              Marketing estratégico, desenvolvimento de software, automação e soluções inteligentes para aumentar sua autoridade, atrair clientes e escalar resultados.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-cta-gold text-primary-foreground font-bold tracking-wide shadow-gold hover:shadow-gold-strong transition-all">
                🚀 Fazer Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-primary/40 bg-card/50 backdrop-blur font-medium hover:bg-card transition">
                <MessageCircle className="w-5 h-5 text-primary" /> Falar no WhatsApp
              </a>
            </div>

            <p className="mt-10 text-xs tracking-luxury text-muted-foreground">
              CÓDIGO QUE CONSTRÓI · <span className="text-primary">ESTRATÉGIA QUE FAZ CRESCER</span>
            </p>
          </div>

          <div className="relative justify-self-center hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-gold-gradient blur-3xl opacity-30 animate-pulse-gold" />
            <Logo className="relative w-80 h-80 rounded-full animate-float" />
          </div>
        </div>
      </section>

      {/* 2. PROVA DE VALOR */}
      <section id="valor" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-luxury text-primary mb-3">PROVA DE VALOR</p>
            <h2 className="text-4xl md:text-5xl font-display">
              Por que empresas escolhem a <span className="text-gold-gradient">UPDEV?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {valueProps.map((v) => (
              <div key={v.label} className="group relative p-6 rounded-xl border border-border bg-card/40 backdrop-blur hover:border-primary/60 transition text-center">
                <v.icon className="w-7 h-7 mx-auto mb-3 text-primary group-hover:scale-110 transition" />
                <div className="text-sm font-semibold">{v.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-lg text-muted-foreground max-w-3xl mx-auto">
            Não entregamos apenas marketing ou tecnologia. Criamos <span className="text-primary font-medium">estratégias completas</span> para impulsionar o crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* 3. PROBLEMA */}
      <section className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-luxury text-destructive mb-3">O PROBLEMA</p>
            <h2 className="text-4xl md:text-5xl font-display max-w-3xl mx-auto leading-tight">
              Sua empresa está crescendo no <span className="italic text-gold-gradient">ritmo que deveria?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div key={p} className="flex items-center gap-3 p-5 rounded-lg border border-border bg-card/60 backdrop-blur">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground/90">{p}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-muted-foreground max-w-2xl mx-auto">
            A maioria das empresas perde oportunidades diariamente por não possuir uma estratégia digital estruturada.
          </p>
        </div>
      </section>

      {/* 4. SOLUÇÃO */}
      <section id="solucao" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-luxury text-primary mb-3">NOSSA SOLUÇÃO</p>
            <h2 className="text-4xl md:text-5xl font-display max-w-3xl mx-auto leading-tight">
              Tudo que sua empresa precisa para crescer <span className="text-gold-gradient">em um só lugar.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={s.title} className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur hover:border-primary/60 transition-all hover:-translate-y-1 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-10 blur-3xl transition" />
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 shadow-gold">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 font-mono text-xs text-primary/60">0{i + 1} / 06</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESSO */}
      <section id="processo" className="py-24 px-6 relative">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-luxury text-primary mb-3">NOSSO PROCESSO</p>
            <h2 className="text-4xl md:text-5xl font-display">Como <span className="text-gold-gradient">transformamos negócios.</span></h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={s.n} className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-cta-gold flex items-center justify-center font-display font-bold text-primary-foreground shadow-gold">
                      {s.n}
                    </div>
                  </div>
                  <div className={`flex-1 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-xl font-display mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIFERENCIAL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-background to-card p-10 md:p-16 shadow-elegant overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-gradient opacity-10 blur-3xl" />
            <p className="text-xs tracking-luxury text-primary mb-3">DIFERENCIAL</p>
            <h2 className="text-3xl md:text-5xl font-display leading-tight">
              Por que a UPDEV é <span className="text-gold-gradient italic">diferente?</span>
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-2xl md:text-4xl font-display">
              <span>Marketing</span>
              <span className="text-gold-gradient">+</span>
              <span>Tecnologia</span>
              <span className="text-gold-gradient">+</span>
              <span>Automação</span>
            </div>

            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Enquanto outras empresas entregam apenas uma parte da solução, nós construímos todo o <span className="text-primary">ecossistema digital</span> do seu negócio.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Estratégias que atraem clientes",
                "Tecnologia que sustenta o crescimento",
                "Automação que aumenta a produtividade",
                "Execução focada em performance",
              ].map(t => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PORTFÓLIO */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-luxury text-primary mb-3">PORTFÓLIO</p>
            <h2 className="text-4xl md:text-5xl font-display">Projetos que <span className="text-gold-gradient">geram resultados.</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {portfolio.map((p, i) => (
              <div key={p.tag} className={`group relative overflow-hidden rounded-2xl border border-border bg-card/50 aspect-[4/3] ${i === 0 || i === 5 ? "md:row-span-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gold-gradient opacity-10 group-hover:opacity-30 blur-3xl transition" />
                <div className="relative h-full flex flex-col justify-between p-7">
                  <p.icon className="w-10 h-10 text-primary" />
                  <div>
                    <div className="text-xs tracking-luxury text-muted-foreground">CATEGORIA</div>
                    <div className="text-2xl font-display mt-1">{p.tag}</div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-2xl transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DEPOIMENTOS */}
      <section className="py-24 px-6 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-luxury text-primary mb-3">DEPOIMENTOS</p>
            <h2 className="text-4xl md:text-5xl font-display">Quem cresce com a UPDEV <span className="text-gold-gradient italic">recomenda.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="relative p-8 rounded-2xl border border-border bg-card/60 backdrop-blur">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section id="contato" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-cta-gold p-12 md:p-20 text-center overflow-hidden shadow-gold-strong">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/40" />

            <div className="relative">
              <Logo className="h-20 w-20 mx-auto rounded-full ring-2 ring-primary-foreground/30 mb-8" />
              <h2 className="text-4xl md:text-6xl font-display text-primary-foreground leading-tight">
                Pronto para levar sua empresa para <span className="italic">outro nível?</span>
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-primary-foreground/90 text-lg font-medium">
                <span>Mais clientes.</span>
                <span>·</span>
                <span>Mais autoridade.</span>
                <span>·</span>
                <span>Mais resultados.</span>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="group mt-12 inline-flex items-center gap-3 px-10 py-6 rounded-xl bg-background text-primary font-bold text-lg md:text-xl tracking-wide shadow-elegant hover:scale-[1.02] transition-all">
                🚀 FAZER ORÇAMENTO AGORA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
              </a>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mt-6 flex items-center justify-center gap-2 text-primary-foreground font-semibold">
                <MessageCircle className="w-5 h-5" /> +55 (68) 99950-8822
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-border/60 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12 w-12 rounded-full ring-1 ring-primary/30" />
              <div className="font-display text-xl">
                <span className="text-foreground">UP</span><span className="text-gold-gradient font-bold">DEV</span>
                <span className="block text-xs text-muted-foreground tracking-luxury">STUDIO</span>
              </div>
            </div>
            <p className="font-display text-lg italic text-foreground/90 max-w-sm leading-snug">
              Código que constrói.<br />
              <span className="text-gold-gradient">Estratégia que faz crescer.</span>
            </p>
          </div>

          <div>
            <div className="text-xs tracking-luxury text-primary mb-4">LINKS RÁPIDOS</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solucao" className="hover:text-primary transition">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-primary transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-luxury text-primary mb-4">CONTATO</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:contato@updevstudio.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                  <Mail className="w-4 h-4" /> E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border/40 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} UPDEV Studio. Todos os direitos reservados.</span>
          <span className="tracking-luxury">SOLUÇÕES DIGITAIS PARA EMPRESAS QUE QUEREM <span className="text-primary">LIDERAR</span></span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp"
         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cta-gold shadow-gold flex items-center justify-center hover:scale-110 transition animate-pulse-gold">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
}
