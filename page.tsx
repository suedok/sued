import React, { useMemo, useState } from "react";

// --- SDK Tech Landing — Rev B ---
// - Only floating WhatsApp button (FAB)
// - Fixed top menu (Services / Portfolio / Contact) + Lang toggle
// - Background & lightning concentrated toward center ("meio termo")

export default function SDKTechLanding() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const t = useMemo(() => ({
    pt: {
      tagline: "Energia em suas mãos",
      headline: "Serviços Elétricos Profissionais em toda a Geórgia",
      sub: "Instalações residenciais e comerciais com foco em segurança, qualidade e inspeção aprovada.",
      nav_services: "Serviços",
      nav_portfolio: "Portfólio",
      nav_contact: "Contato",
      chips: [
        "Reforma & Retrofit",
        "Painel 200A / Subpanel",
        "Iluminação e Recessed",
        "Circuitos dedicados",
        "GFCI / AFCI / Code NEC",
      ],
      footer: "© SDK Tech Services — Inspeção e segurança em primeiro lugar (NEC).",
      contact_title: "Entre em contato",
      contact_hint: "Respondo rápido. Envie fotos/vídeos pelo WhatsApp para orçamento mais preciso.",
      fab_label: "WhatsApp",
    },
    en: {
      tagline: "Power in your hands",
      headline: "Professional Electrical Services across Georgia",
      sub: "Residential & commercial installs with safety, quality, and inspection-first mindset.",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      chips: [
        "Remodels & Retrofits",
        "200A Panels / Subpanels",
        "Lighting & Recessed",
        "Dedicated Circuits",
        "GFCI / AFCI / NEC Code",
      ],
      footer: "© SDK Tech Services — Safety & NEC compliance first.",
      contact_title: "Get in touch",
      contact_hint: "Fast replies. Send photos/videos on WhatsApp for accurate quotes.",
      fab_label: "WhatsApp",
    },
  })[lang], [lang]);

  const waNumber = "+1 770-374-8640";
  const waHref = `https://wa.me/${waNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    lang === "pt"
      ? "Olá! Vi o site da SDK Tech e gostaria de um orçamento."
      : "Hi! I saw the SDK Tech site and I'd like a quote."
  )}`;

  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <CenteredGradient />
      <CenteredLightning />
      <NoiseOverlay />

      {/* Fixed Top Nav */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo mini */}
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-500 shadow-[0_0_30px_rgba(250,204,21,.25)]" />
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-wide">SDK Tech Services</div>
              <div className="text-[10px] uppercase opacity-80">{t.tagline}</div>
            </div>
          </a>

          <nav className="flex items-center gap-6 text-sm">
            <a href="#services" className="opacity-90 hover:opacity-100">{t.nav_services}</a>
            <a href="#portfolio" className="opacity-60 cursor-not-allowed" title="Envie as fotos que adiciono aqui">{t.nav_portfolio}</a>
            <a href="#contact" className="opacity-90 hover:opacity-100">{t.nav_contact}</a>
            <LangToggle lang={lang} setLang={setLang} />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10 pt-28 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-12 md:gap-12 md:px-6 lg:pb-20">
          <div className="md:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="opacity-90">{t.tagline}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              {t.headline}
            </h1>
            <p className="mt-4 max-w-prose text-base opacity-90 md:text-lg">{t.sub}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.chips.map((s) => (
                <span key={s} className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1 text-xs tracking-wide text-yellow-200/90 backdrop-blur">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,.7)]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,.18)_0%,transparent_60%)]" />
                  <svg viewBox="0 0 400 300" className="h-full w-full">
                    <defs>
                      <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fde047" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="400" height="300" fill="#0b1020" />
                    <g opacity="0.85">
                      <polyline points="20,250 80,200 140,210 180,160 230,180 280,130 330,160 380,110" fill="none" stroke="url(#glow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-3 text-sm opacity-90">SDK Tech — Highlights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services anchor (minimal for now) */}
      <section id="services" className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6" />
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-5xl px-4 pb-24 md:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold md:text-3xl">{t.contact_title}</h2>
            <p className="mt-1 max-w-prose text-sm opacity-80">{t.contact_hint}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm opacity-80 md:px-6">{t.footer}</div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={waHref}
        className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-black shadow-[0_20px_50px_-12px_rgba(16,185,129,.7)] transition hover:-translate-y-0.5 hover:bg-emerald-400 active:translate-y-0"
        aria-label={t.fab_label}
      >
        <WhatsappIcon />
        <span className="hidden sm:inline">{t.fab_label}</span>
      </a>
    </main>
  );
}

// --- UI helpers ---
function LangToggle({
  lang,
  setLang,
}: {
  lang: "pt" | "en";
  setLang: (v: "pt" | "en") => void;
}) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 text-xs font-semibold backdrop-blur-xl">
      {[
        { k: "pt", label: "PT" },
        { k: "en", label: "EN" },
      ].map(({ k, label }) => (
        <button
          key={k}
          onClick={() => setLang(k as "pt" | "en")}
          className={[
            "rounded-lg px-2.5 py-1 transition",
            lang === (k as "pt" | "en") ? "bg-white/90 text-black" : "text-white/80 hover:bg-white/10",
          ].join(" ")}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
      <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0 11.9 11.9 0 0 0 .02 12.01 11.68 11.68 0 0 0 1.8 18.1L0 24l6.08-1.78a11.9 11.9 0 0 0 5.96 1.6h.01A11.99 11.99 0 0 0 24 11.95c0-3.21-1.25-6.23-3.48-8.47ZM12.05 22.1h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.61 1.06 1.08-3.52-.23-.36a9.9 9.9 0 0 1-1.53-5.3 9.97 9.97 0 0 1 9.96-10 10.1 10.1 0 0 1 7.13 2.95 10.1 10.1 0 0 1 2.94 7.16 10.01 10.01 0 0 1-10.02 9.61Zm5.5-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.47-.9-.76-1.5-1.7-1.67-2-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.48.15-.16.2-.27.3-.46.1-.2.05-.36-.02-.51-.08-.15-.66-1.6-.91-2.2-.24-.58-.48-.5-.66-.5-.17 0-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.3-1 1-1 2.46s1.03 2.86 1.18 3.06c.15.2 2.02 3.09 4.89 4.33.68.29 1.22.46 1.64.59.69.22 1.31.19 1.81.12.55-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

// --- Background components (centered emphasis) ---
function CenteredGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          // Central emphasis: soft blue and amber glows converging near center
          "radial-gradient(60% 35% at 50% 42%, rgba(59,130,246,.28) 0%, rgba(59,130,246,.06) 45%, rgba(0,0,0,0) 65%)," +
          "radial-gradient(55% 30% at 50% 58%, rgba(251,191,36,.22) 0%, rgba(251,191,36,.05) 40%, rgba(0,0,0,0) 70%)," +
          "radial-gradient(120% 90% at 50% 50%, rgba(17,24,39,.9) 0%, rgba(0,0,0,1) 55%)",
      }}
    />
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,"
          + encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>
              <filter id='n'>
                <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/>
                <feColorMatrix type='saturate' values='0'/>
              </filter>
              <rect width='100%' height='100%' filter='url(#n)' opacity='0.8'/>
            </svg>
          `)
          + "')",
      }}
    />
  );
}

function CenteredLightning() {
  return (
    <div className="absolute inset-0 -z-10">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="bolt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            @keyframes pulse { 0%, 100% { opacity: .65 } 50% { opacity: .95 } }
            .bolt { filter: url(#glowBlur); stroke-linecap: round; stroke-linejoin: round; }
          `}</style>
        </defs>
        {/* Two short bolts converging toward center */}
        <g style={{ animation: "pulse 5s infinite" }}>
          <polyline className="bolt" points="20,52 35,48 44,50 50,43 56,45 62,41 70,44 78,40" fill="none" stroke="url(#bolt)" strokeWidth="1.2" />
          <polyline className="bolt" points="22,58 36,54 45,56 51,49 57,51 63,47 71,50 79,46" fill="none" stroke="url(#bolt)" strokeWidth="1.0" opacity=".75" />
        </g>
      </svg>
    </div>
  );
}
