import { Link } from "react-router";

interface HeroProps {
  lang: "EN" | "ID";
}

const copy = {
  EN: {
    headline: "Your Daily Reminder.\nRooted in Tradition.",
    sub: "Quranic verses, hadith, and dhikr for every moment of your day.",
    cta: "Download the App",
    secondary: "Learn More",
    badge: "Free · No Tracking · Offline",
  },
  ID: {
    headline: "Pengingat Harianmu.\nBerakar dari Tradisi.",
    sub: "Ayat Al-Qur'an, hadis, dan dzikir untuk setiap momen harimu.",
    cta: "Unduh Aplikasi",
    secondary: "Pelajari Lebih",
    badge: "Gratis · Tanpa Pelacakan · Offline",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];

  return (
    <section
      id="main-content"
      className="relative min-h-[100svh] flex items-center bg-gradient-to-br from-[#FDFAF5] via-[#FDF6EC] to-[#F9EDD8] overflow-hidden geometric-bg"
      aria-label="Hero"
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(200,135,74,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="text-center lg:text-left">
            {/* Bismillah */}
            <p
              className="font-arabic text-2xl text-[#4A7C59] mb-6 leading-relaxed"
              dir="rtl"
              lang="ar"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>

            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight text-[#2C2C2C] mb-6 whitespace-pre-line">
              {t.headline}
            </h1>

            <p className="text-[1.1rem] text-[#2C2C2C]/70 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              {t.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/d"
                id="download"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8B5E3C] text-white font-medium rounded-xl hover:bg-[#6B4928] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t.cta}
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#8B5E3C] text-[#8B5E3C] font-medium rounded-xl hover:bg-[#8B5E3C] hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                {t.secondary}
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M10 17l5-5m0 0l-5-5m5 5H3" />
                </svg>
              </a>
            </div>

            <p className="mt-5 text-[0.8rem] text-[#2C2C2C]/40 tracking-wide uppercase font-medium">
              {t.badge}
            </p>
          </div>

          {/* App mockup column */}
          <div
            className="flex justify-center lg:justify-end"
            aria-label="App preview illustration"
          >
            <AppMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        aria-hidden="true"
      >
        <div className="w-5 h-8 rounded-full border-2 border-[#8B5E3C] flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#8B5E3C] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function AppMockup() {
  return (
    <div className="relative w-[260px] h-[520px] lg:w-[280px] lg:h-[560px]">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-20 bg-[#C8874A]"
        aria-hidden="true"
      />

      {/* Phone frame */}
      <div className="relative w-full h-full bg-[#1C1208] rounded-[2.5rem] border-4 border-[#3A2410] shadow-2xl overflow-hidden">
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1C1208] rounded-b-xl z-10"
          aria-hidden="true"
        />

        {/* Screen content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF6EC] to-[#FDFAF5] flex flex-col">
          {/* Status bar */}
          <div
            className="h-10 flex items-end justify-between px-5 pb-1"
            aria-hidden="true"
          >
            <span className="text-[9px] text-[#2C2C2C]/50 font-medium">
              9:41
            </span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 rounded-sm bg-[#2C2C2C]/30" />
              <div className="w-2 h-2 rounded-full bg-[#2C2C2C]/30" />
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-2 pb-3 border-b border-[#E8DCC8]">
            <p className="text-[9px] text-[#8B5E3C]/60 uppercase tracking-widest mb-0.5">
              Morning
            </p>
            <p className="text-[13px] font-serif font-semibold text-[#2C2C2C]">
              Tazkirah
            </p>
          </div>

          {/* Reminder card */}
          <div className="mx-3 mt-3 bg-white rounded-xl p-3 border border-[#E8DCC8] shadow-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#4A7C59]"
                aria-hidden="true"
              />
              <span className="text-[8px] text-[#4A7C59] font-semibold uppercase tracking-wider">
                Quran · Al-Baqarah 2:286
              </span>
            </div>
            <p
              className="font-arabic text-right text-[15px] leading-relaxed text-[#2C2C2C] mb-2"
              dir="rtl"
              lang="ar"
            >
              لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا
            </p>
            <p className="text-[9px] text-[#2C2C2C]/60 leading-relaxed italic">
              "Allah does not burden a soul beyond that it can bear."
            </p>
          </div>

          {/* Category chips */}
          <div className="px-3 mt-3" aria-hidden="true">
            <p className="text-[8px] text-[#2C2C2C]/40 uppercase tracking-wider mb-1.5">
              Categories
            </p>
            <div className="flex flex-wrap gap-1">
              {["Morning", "Evening", "After Prayer", "Travel", "Sleep"].map(
                (c) => (
                  <span
                    key={c}
                    className={`text-[8px] px-2 py-0.5 rounded-full font-medium ${
                      c === "Morning"
                        ? "bg-[#8B5E3C] text-white"
                        : "bg-[#F5EFE6] text-[#8B5E3C]/70 border border-[#E8DCC8]"
                    }`}
                  >
                    {c}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Dhikr counter */}
          <div
            className="mx-3 mt-3 bg-[#8B5E3C]/5 rounded-xl p-3 border border-[#E8DCC8]"
            aria-hidden="true"
          >
            <p className="text-[8px] text-[#2C2C2C]/40 uppercase tracking-wider mb-1">
              Dhikr Counter
            </p>
            <div className="flex items-center justify-between">
              <p
                className="font-arabic text-[13px] text-[#8B5E3C]"
                dir="rtl"
                lang="ar"
              >
                سُبْحَانَ اللَّه
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-serif font-bold text-[#8B5E3C]">
                  33
                </span>
                <div className="w-6 h-6 rounded-full bg-[#8B5E3C] flex items-center justify-center">
                  <span className="text-white text-[10px]">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second phone, peeking */}
      <div
        className="absolute -right-8 bottom-8 w-[200px] h-[400px] bg-[#1C1208] rounded-[2rem] border-4 border-[#3A2410] shadow-xl opacity-40 overflow-hidden -rotate-6"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF6EC] to-[#FDFAF5]" />
      </div>
    </div>
  );
}
