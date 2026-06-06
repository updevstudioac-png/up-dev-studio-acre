import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Rocket, Code2, Settings2, Cloud, Bot, BarChart3,
  TrendingUp, Target, Cpu, Zap, Lightbulb, Trophy,
  ArrowRight, MessageCircle, Sparkles
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPDEV Studio — Código que constrói. Estratégia que faz crescer." },
      { name: "description", content: "Marketing estratégico, desenvolvimento de software e automação inteligente para empresas que querem liderar." },
      { property: "og:title", content: "UPDEV Studio" },
      { property: "og:description", content: "Soluções digitais para empresas que querem liderar." },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5568999508822?text=" + encodeURIComponent("Olá! Conheci a UPDEV Studio e gostaria de solicitar um orçamento para meu negócio.");

const services = [
  { icon: Rocket, title: "Marketing Estratégico", desc: "Estratégias que atraem clientes, fortalecem marcas e geram resultados reais.", tags: ["Tráfego Pago", "Branding", "Leads", "Funis de Venda", "Conversão", "Autoridade"] },
  { icon: Code2, title: "Sites Profissionais", desc: "Sites modernos, rápidos e estratégicos que transformam visitantes em clientes." },
  { icon: Settings2, title: "Sistemas Personalizados", desc: "Sistemas sob medida para otimizar processos e aumentar a produtividade." },
  { icon: Cloud, title: "Plataformas SaaS", desc: "Softwares escaláveis e inteligentes para empresas que querem inovar." },
  { icon: Bot, title: "Automação Empresarial", desc: "Reduzimos tarefas manuais para sua empresa ganhar eficiência e escalabilidade." },
  { icon: BarChart3, title: "Soluções de Gestão", desc: "Plataformas para vendas, entregas, estoque, atendimento e equipes." },
];

const pillars = [
  { icon: TrendingUp, label: "Crescimento" },
  { icon: Target, label: "Estratégia" },
  { icon: Cpu, label: "Tecnologia" },
  { icon: Zap, label: "Performance" },
  { icon: Lightbulb, label: "Inovação" },
  { icon: Trophy, label: "Resultados" },
];

const quotes = [
  "Marketing que vende. Tecnologia que escala.",
  "Transformamos ideias em negócios digitais de sucesso.",
  "Desenvolvemos presença. Construímos autoridade.",
  "Criamos tecnologia para acelerar resultados.",
  "Atraímos clientes. Desenvolvemos soluções. Geramos resultados.",
  "Soluções digitais para empresas que querem liderar.",
  "O futuro do seu negócio começa com a estratégia certa.",
  "Código que constrói. Estratégia que faz crescer.",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block w-7 h-7 rounded-md bg-gradient-hero shadow-glow" />
            UPDEV<span className="text-muted-foreground font-normal">Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#diferencial" className="hover:text-foreground transition">Diferencial</a>
            <a href="#pilares" className="hover:text-foreground transition">Pilares</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition shadow-glow">
            Fazer orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Marketing · Tecnologia · Automação
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            Código que <span className="text-gradient">constrói</span>.<br />
            Estratégia que <span className="text-gradient">faz crescer</span>.
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transformamos empresas em marcas fortes, negócios escaláveis e referências digitais.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:shadow-violet-glow transition-all">
              🚀 Fazer orçamento agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-border bg-card/50 backdrop-blur font-medium hover:bg-card transition">
              Ver o que fazemos
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[["+", "Visibilidade"], ["+", "Autoridade"], ["+", "Vendas"], ["+", "Crescimento"]].map(([s, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display leading-relaxed">
            Na UPDEV Studio, acreditamos que crescimento <span className="text-muted-foreground">não acontece por acaso</span>.
            Ele é construído com <span className="text-gradient font-bold">estratégia, tecnologia e execução</span>.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/30">Não criamos apenas sites.</div>
            <div className="p-6 rounded-2xl border border-border/60 bg-card/30">Não desenvolvemos apenas sistemas.</div>
            <div className="p-6 rounded-2xl border border-border/60 bg-card/30">Não fazemos apenas marketing.</div>
          </div>
          <p className="mt-8 text-lg text-foreground/90">
            Construímos <span className="text-gradient font-semibold">ecossistemas digitais completos</span> que conectam tecnologia, posicionamento e performance.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">O que fazemos</p>
            <h2 className="text-4xl md:text-5xl font-bold">Soluções que <span className="text-gradient">aceleram resultados</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative p-8 rounded-2xl border border-border bg-card/40 backdrop-blur hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition" />
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                {s.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80 border border-border">{t}</span>
                    ))}
                  </div>
                )}
                <div className="mt-6 text-xs font-mono text-muted-foreground">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section id="diferencial" className="py-24 px-6 relative">
        <div className="absolute inset-0 -z-10 bg-radial-glow opacity-50" />
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-10 md:p-16 shadow-elegant">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Nosso diferencial</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Marketing <span className="text-gradient">+</span> Tecnologia <span className="text-gradient">+</span> Automação.<br />
              Tudo em um único lugar.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                "Criamos estratégias que atraem clientes.",
                "Desenvolvemos tecnologias que sustentam o crescimento.",
                "Automatizamos processos que aumentam a produtividade.",
                "Executamos ações focadas em performance e resultado.",
              ].map(t => (
                <div key={t} className="flex gap-3 items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gradient-hero shadow-glow flex-shrink-0" />
                  <p className="text-foreground/90">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Nossa missão</p>
          <p className="text-2xl md:text-4xl font-display leading-snug">
            Impulsionar empresas através da <span className="text-gradient">tecnologia, inovação e marketing estratégico</span>, criando soluções que geram crescimento, autoridade e resultados consistentes.
          </p>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Nossos pilares</p>
            <h2 className="text-4xl md:text-5xl font-bold">Os princípios que <span className="text-gradient">nos movem</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pillars.map(p => (
              <div key={p.label} className="aspect-square rounded-2xl border border-border bg-card/40 backdrop-blur flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-card/70 transition group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gradient-hero transition">
                  <p.icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-sm">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASES */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm uppercase tracking-widest text-primary mb-12">Frases de impacto</p>
          <div className="grid md:grid-cols-2 gap-5">
            {quotes.map((q, i) => (
              <blockquote key={q} className={`p-7 rounded-2xl border border-border bg-card/40 backdrop-blur font-display text-xl leading-snug ${i % 3 === 0 ? "md:translate-y-2" : ""}`}>
                <span className="text-gradient text-3xl leading-none">"</span> {q}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-32 px-6 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0 bg-radial-glow" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para levar sua empresa para o <span className="text-gradient">próximo nível?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A combinação certa entre marketing, tecnologia e automação pode transformar completamente o futuro do seu negócio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="group inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-gradient-hero text-primary-foreground font-bold text-lg shadow-glow hover:shadow-violet-glow transition-all">
              🚀 Fazer orçamento agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-3 px-8 py-5 rounded-xl border border-border bg-card/50 backdrop-blur font-medium hover:bg-card transition">
              <MessageCircle className="w-5 h-5 text-primary" />
              +55 (68) 99950-8822
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-3">
              <span className="inline-block w-7 h-7 rounded-md bg-gradient-hero shadow-glow" />
              UPDEV Studio
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Soluções digitais para empresas que querem liderar.
            </p>
          </div>
          <div className="space-y-2 text-sm font-display">
            <p className="text-gradient">Marketing que vende. Tecnologia que escala.</p>
            <p className="text-gradient">Código que constrói. Estratégia que faz crescer.</p>
          </div>
          <div className="text-sm md:text-right">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition">
              <MessageCircle className="w-4 h-4" /> +55 (68) 99950-8822
            </a>
            <p className="text-xs text-muted-foreground mt-3">© {new Date().getFullYear()} UPDEV Studio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp"
         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-hero shadow-glow flex items-center justify-center hover:scale-110 transition animate-pulse-glow">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
}
