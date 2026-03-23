import { Link } from "react-router-dom";
import { ArrowRight, Brain, Target, BookOpen, Bell, BarChart3, Zap, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

/* ─── NAV ─── */
const Nav = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
          <GraduationCap className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight">AI Study Companion</span>
      </Link>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/login">Log in</Link>
        </Button>
        <Button size="sm" asChild>
          <Link to="/signup">Get Started <ArrowRight className="h-3.5 w-3.5 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </nav>
);

/* ─── HERO ─── */
const Hero = () => (
  <section className="pt-32 pb-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <div className="animate-reveal-up">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
          <Sparkles className="h-3 w-3" /> Powered by AI
        </span>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight leading-[1.08] mb-5" style={{ textWrap: "balance" }}>
          Study smarter, not harder with AI
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ textWrap: "pretty" }}>
          Your intelligent study partner that adapts to your learning patterns, spots your weak areas, and builds a personalized path to mastery.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 animate-reveal-up delay-200">
        <Button size="lg" asChild className="rounded-xl px-8 h-12 text-base shadow-lg shadow-primary/20 active:scale-[0.97] transition-transform">
          <Link to="/signup">Start for free <ArrowRight className="h-4 w-4 ml-1" /></Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="rounded-xl px-8 h-12 text-base active:scale-[0.97] transition-transform">
          <Link to="/login">Log in</Link>
        </Button>
      </div>
      {/* Abstract metric cards floating */}
      <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto animate-reveal-up delay-300">
        {[
          { label: "Active learners", val: "2,847" },
          { label: "Questions answered", val: "148k" },
          { label: "Avg. score boost", val: "+23%" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-card border border-border/60 p-4 shadow-sm">
            <p className="stat-number text-xl font-bold text-foreground">{s.val}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── HOW IT WORKS ─── */
const steps = [
  { icon: BookOpen, title: "Take quizzes", desc: "Answer AI-generated questions on any subject." },
  { icon: Target, title: "AI tracks mistakes", desc: "The system identifies patterns in your errors." },
  { icon: Brain, title: "Get a study plan", desc: "Receive a daily plan tailored to your weak spots." },
  { icon: Zap, title: "Improve faster", desc: "Focused revision accelerates your progress." },
];

const HowItWorks = () => (
  <section className="py-24 px-6 bg-muted/40">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        badge="How it works"
        title="Four steps to better grades"
        subtitle="A simple loop that compounds your knowledge over time."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <div className="relative rounded-2xl bg-card border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow group">
              <span className="absolute -top-3 -left-1 text-[11px] font-bold text-muted-foreground/50 font-display">0{i + 1}</span>
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FEATURES ─── */
const features = [
  { icon: Brain, title: "AI Study Plans", desc: "Daily and weekly schedules generated from your performance data." },
  { icon: Target, title: "Weak Area Detection", desc: "Automatically maps mistakes to topics and ranks them by severity." },
  { icon: BookOpen, title: "AI Quiz Generator", desc: "Personalized questions that target exactly where you struggle." },
  { icon: Bell, title: "Smart Reminders", desc: "Deadline alerts with urgency coding so nothing slips through." },
  { icon: BarChart3, title: "Progress Analytics", desc: "Charts tracking accuracy, streaks, and improvement trends over time." },
];

const Features = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        badge="Features"
        title="Everything you need to ace your exams"
        subtitle="Built for students who want real results, not just another study app."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 70}>
            <div className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-md transition-shadow group">
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <f.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── ABOUT ─── */
const About = () => (
  <section className="py-24 px-6 bg-muted/40">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <SectionHeader
          badge="About"
          title="Why we built this"
          subtitle=""
        />
        <p className="text-muted-foreground leading-relaxed mt-6 text-base max-w-2xl mx-auto">
          Most students spend hours studying topics they already know while neglecting the areas that actually need work. AI Study Companion flips that equation — it watches how you perform, identifies knowledge gaps in real time, and builds a focused revision strategy that evolves with you. The result: less wasted time, higher confidence, and measurably better scores.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
          {["Adaptive learning", "Evidence-based", "Privacy-first"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border/60 text-xs font-medium text-foreground">
              <CheckCircle2 className="h-3 w-3 text-primary" /> {t}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="border-t border-border/40 py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} AI Study Companion</span>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="mailto:contact@studyai.app" className="hover:text-foreground transition-colors">Contact</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

/* ─── HELPERS ─── */
const SectionHeader = ({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) => (
  <div className="text-center">
    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">{badge}</span>
    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-3 max-w-lg mx-auto">{subtitle}</p>}
  </div>
);

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("animate-reveal-up");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="opacity-0">{children}</div>;
};

export default Landing;
