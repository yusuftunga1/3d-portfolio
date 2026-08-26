import { useEffect, useRef, useState } from "react";
import ThreeScene from "./ThreeScene";

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const SKILLS = [
  { name: "TypeScript / JavaScript", level: 95, tag: "lang" },
  { name: "React / Next.js", level: 92, tag: "frontend" },
  { name: "Node.js / Express / NestJS", level: 88, tag: "backend" },
  { name: "PostgreSQL / Redis / MongoDB", level: 85, tag: "database" },
  { name: "Three.js / WebGL / Shaders", level: 80, tag: "3d" },
  { name: "Docker / Kubernetes / CI-CD", level: 78, tag: "devops" },
  { name: "GraphQL / REST / gRPC", level: 85, tag: "api" },
  { name: "AWS / Cloudflare / GCP", level: 75, tag: "cloud" },
];

const PROJECTS = [
  {
    id: "01",
    name: "NeuralFlow 3D",
    desc: "Gerçek zamanlı makine öğrenimi boru hattı görselleştiricisi ve dağıtık worker yönetimi. Üç boyutlu dinamik veri akışı ve yüksek performanslı mimari.",
    stack: ["TypeScript", "Three.js", "Node.js", "Redis", "Docker"],
    status: "production",
    link: "https://github.com/yusuftunga1/3d-portfolio",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: "02",
    name: "Synapse UI System",
    desc: "Erişilebilir, koyu tema odaklı ve modern mikro-animasyonlar içeren açık kaynak React bileşen kütüphanesi.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    status: "open-source",
    link: "https://github.com/yusuftunga1/3d-portfolio",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: "03",
    name: "DeepTrace Analytics",
    desc: "Mikroservisler arası dağıtık istek ve performans izleme sistemi. Düşük gecikmeli telemetri ve interaktif metrik panosu.",
    stack: ["Go", "OpenTelemetry", "ClickHouse", "React"],
    status: "beta",
    link: "https://github.com/yusuftunga1/3d-portfolio",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: "04",
    name: "CloudSandbox CLI",
    desc: "Saniyeler içinde izole geliştirme ve test ortamları oluşturan geliştirici CLI aracı. Hızlı konteyner yönetimi.",
    stack: ["Rust", "Docker", "WebAssembly"],
    status: "production",
    link: "https://github.com/yusuftunga1/3d-portfolio",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=340&fit=crop&auto=format",
  },
];

const STATUS_COLOR: Record<string, string> = {
  production: "#00ff88",
  "open-source": "#00d4ff",
  beta: "#7c3aed",
};

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SkillBar({
  name,
  level,
  tag,
  animate,
}: {
  name: string;
  level: number;
  tag: string;
  animate: boolean;
}) {
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animate && fillRef.current) {
      fillRef.current.style.setProperty("--level", `${level / 100}`);
      setTimeout(() => fillRef.current?.classList.add("animate"), 50);
    }
  }, [animate, level]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-[#00ff88] font-mono text-xs opacity-60">
            [{tag}]
          </span>
          <span
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-sm text-[#e6edf3]"
          >
            {name}
          </span>
        </div>
        <span
          style={{ fontFamily: "var(--font-mono)" }}
          className="text-xs text-[#7d8590]"
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const skillsSection = useInView(0.15);

  const fullTitle = "Full-Stack Engineer & Creative Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullTitle.slice(0, i + 1));
      i++;
      if (i >= fullTitle.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const navBg =
    scrollY > 60
      ? "bg-[#050810]/90 backdrop-blur-md border-b border-[#21262d]"
      : "";

  return (
    <div className="scanlines min-h-screen bg-[#050810]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-[#00ff88] text-sm font-semibold tracking-widest flex items-center gap-1"
          >
            <span className="text-[#7d8590]">~/</span>yusuf.tunga
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                <span className="text-[#00ff88] mr-1">{">"}</span>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-xs px-4 py-2 border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-[#050810] transition-all duration-200 tracking-widest"
            >
              HIRE_ME
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#00ff88] text-xl"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d1117] border-b border-[#21262d] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#00ff88] mr-2">{">"}</span>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Canvas — fixed behind content */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <ThreeScene />
        </div>

        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, #050810 75%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-[#00ff88] text-xs tracking-[0.3em] mb-6 fade-up fade-up-delay-1"
          >
            <span className="text-[#7d8590]">$ whoami --status</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-none fade-up fade-up-delay-2">
            <span className="text-[#e6edf3]">Yusuf</span>
            <br />
            <span className="gradient-text glow-green">Tunga</span>
          </h1>

          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-lg md:text-2xl text-[#7d8590] mb-8 min-h-[2rem] fade-up fade-up-delay-3"
          >
            <span className="text-[#00d4ff]">{"<"}</span>
            <span className="terminal-cursor text-[#e6edf3]">{typed}</span>
            <span className="text-[#00d4ff]">{" />"}</span>
          </div>

          <p className="text-[#7d8590] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed fade-up fade-up-delay-4">
            Ölçeklenebilir modern web mimarileri, interaktif 3D deneyimler ve
            yüksek performanslı sistemler tasarlayıp geliştiriyorum.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-delay-4">
            <a
              href="#projects"
              style={{ fontFamily: "var(--font-mono)" }}
              className="px-8 py-3 bg-[#00ff88] text-[#050810] font-semibold text-sm tracking-widest hover:bg-[#00d4ff] transition-colors duration-200"
            >
              VIEW_PROJECTS
            </a>
            <a
              href="#contact"
              style={{ fontFamily: "var(--font-mono)" }}
              className="px-8 py-3 border border-[#21262d] text-[#7d8590] text-sm tracking-widest hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-200"
            >
              GET_IN_TOUCH →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
          <span
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-xs text-[#7d8590] tracking-widest"
          >
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#00ff88] to-transparent" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-30 bg-[#050810] py-28 px-6">
        <div className="section-line mb-20" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-xs text-[#00ff88] tracking-[0.3em] mb-4"
            >
              // about_me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-6">
              Kod yazarım,
              <br />
              <span className="gradient-text">etkileşimli sistemler inşa ederim.</span>
            </h2>
            <p className="text-[#7d8590] leading-relaxed mb-4">
              Modern web ekosisteminde kullanıcı deneyimi yüksek, temiz kodlu ve
              yüksek performanslı uçtan uca uygulamalar geliştiriyorum.
            </p>
            <p className="text-[#7d8590] leading-relaxed mb-8">
              Üç boyutlu web grafikleri (Three.js/WebGL), mikroservis mimarileri
              ve modern frontend teknolojileri üzerinde çalışıyorum. Açık kaynak
              ve global projelere katkıda bulunmayı seviyorum.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "5+", l: "Yıl Deneyim" },
                { n: "30+", l: "Tamamlanan Proje" },
                { n: "100%", l: "Açık Kaynak Tutkusu" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border border-[#21262d] p-4 hover:border-[#00ff88]/30 transition-colors"
                >
                  <div
                    className="text-2xl font-bold gradient-text"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-xs text-[#7d8590] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="border border-[#21262d] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=700&fit=crop&auto=format"
                alt="Geliştirici çalışma ortamı"
                className="w-full h-96 object-cover opacity-70 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent" />
              <div
                className="absolute bottom-4 left-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <div className="text-[#00ff88] text-xs tracking-widest">
                  AVAILABLE_FOR_HIRE
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span className="text-[#7d8590] text-xs">
                    Remote / Hybrid · Open to Collaboration
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00ff88]" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#00d4ff]" />
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-30 bg-[#0d1117] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-xs text-[#00ff88] tracking-[0.3em] mb-4"
          >
            // tech_stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-16">
            Uzmanlık Alanları & Teknolojiler
          </h2>
          <div ref={skillsSection.ref} className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((s, i) => (
              <div key={s.name} style={{ animationDelay: `${i * 0.06}s` }}>
                <SkillBar {...s} animate={skillsSection.inView} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative z-30 bg-[#050810] py-28 px-6">
        <div className="section-line mb-20" />
        <div className="max-w-6xl mx-auto">
          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-xs text-[#00ff88] tracking-[0.3em] mb-4"
          >
            // selected_work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-16">
            Seçilmiş Projeler
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="card-glow bg-[#0d1117] border border-[#21262d] block group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: STATUS_COLOR[p.status] }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: STATUS_COLOR[p.status],
                      }}
                      className="text-xs tracking-widest"
                    >
                      {p.status.toUpperCase()}
                    </span>
                  </div>
                  <div
                    className="absolute top-4 right-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="text-[#7d8590] text-2xl font-bold opacity-40">
                      {p.id}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="text-lg font-semibold text-[#e6edf3] mb-2 group-hover:text-[#00ff88] transition-colors"
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#7d8590] leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-30 bg-[#0d1117] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-xs text-[#00ff88] tracking-[0.3em] mb-4"
          >
            // contact_me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-4">
            İletişime Geçin
          </h2>
          <p className="text-[#7d8590] mb-12">
            Yeni fırsatlara, açık kaynak iş birliklerine ve freelance projelere
            açığım. Doğrudan mesaj gönderin veya e-posta ile ulaşın.
          </p>

          {sent ? (
            <div className="border border-[#00ff88]/30 bg-[#00ff88]/5 p-8 text-center">
              <div
                style={{ fontFamily: "var(--font-mono)" }}
                className="text-[#00ff88] text-xl mb-2"
              >
                {">"} Mesajınız kaydedildi!
              </div>
              <p className="text-[#7d8590] text-sm">
                En kısa sürede dönüş yapacağım.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="block text-xs text-[#7d8590] tracking-widest mb-2"
                  >
                    AD_SOYAD
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#161b22] border border-[#21262d] text-[#e6edf3] px-4 py-3 text-sm focus:outline-none focus:border-[#00ff88] transition-colors"
                    style={{ fontFamily: "var(--font-mono)" }}
                    placeholder="Adınız veya Şirket Adı"
                  />
                </div>
                <div>
                  <label
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="block text-xs text-[#7d8590] tracking-widest mb-2"
                  >
                    E_POSTA
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#161b22] border border-[#21262d] text-[#e6edf3] px-4 py-3 text-sm focus:outline-none focus:border-[#00ff88] transition-colors"
                    style={{ fontFamily: "var(--font-mono)" }}
                    placeholder="ornek@alanadi.com"
                  />
                </div>
              </div>
              <div>
                <label
                  style={{ fontFamily: "var(--font-mono)" }}
                  className="block text-xs text-[#7d8590] tracking-widest mb-2"
                >
                  MESAJ
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#161b22] border border-[#21262d] text-[#e6edf3] px-4 py-3 text-sm focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                  style={{ fontFamily: "var(--font-mono)" }}
                  placeholder="Proje veya iş birliği detaylarını buraya yazabilirsiniz..."
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-6">
                  {[
                    { label: "GitHub", href: "https://github.com/yusuftunga1" },
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/yusuftunga",
                    },
                    {
                      label: "Email",
                      href: "mailto:yusuftunga01@gmail.com",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: "var(--font-mono)" }}
                      className="text-xs text-[#7d8590] hover:text-[#00ff88] transition-colors tracking-widest"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <button
                  type="submit"
                  style={{ fontFamily: "var(--font-mono)" }}
                  className="w-full sm:w-auto px-8 py-3 bg-[#00ff88] text-[#050810] font-semibold text-sm tracking-widest hover:bg-[#00d4ff] transition-colors duration-200"
                >
                  GÖNDER →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 bg-[#050810] border-t border-[#21262d] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-xs text-[#7d8590]"
          >
            © 2026 Yusuf Tunga —{" "}
            <span className="text-[#00ff88]">available_for_hire</span>
          </span>
          <span
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-xs text-[#7d8590]"
          >
            Built with React 19 + Three.js + Tailwind CSS v4
          </span>
        </div>
      </footer>
    </div>
  );
}
