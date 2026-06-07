interface Props {
  lang: "EN" | "ID";
}

const copy = {
  EN: {
    label: "Features",
    title: "Everything You Need, Nothing You Don't",
    features: [
      {
        tag: "Life Categories",
        headline: "A Reminder for Every Moment",
        body: "Morning, evening, after prayer, traveling, hardship, before sleep, and general dhikr. Each with carefully curated verses and hadith tailored to that time or situation.",
        accent: "#C8874A",
      },
      {
        tag: "Authentic Sources",
        headline: "Grounded in Islamic Tradition",
        body: "Every verse comes from the Quran, every hadith from Sahih Bukhari, Sahih Muslim, and other trusted collections. With bilingual translations (English + Indonesian).",
        accent: "#4A7C59",
      },
      {
        tag: "Home Screen Widgets",
        headline: "Your Reminder, Always in View.",
        body: "Two beautiful widgets live right on your home screen. The Hadith & Ayat widget surfaces a fresh reminder each day. The Prayer widget shows today's prayer times at a glance — no app needed.",
        accent: "#7A5EA0",
      },
    ],
  },
  ID: {
    label: "Fitur",
    title: "Semua yang Kamu Butuhkan, Tidak Lebih",
    features: [
      {
        tag: "Kategori Kehidupan",
        headline: "Pengingat untuk Setiap Momen",
        body: "Pagi, sore, setelah shalat, perjalanan, musibah, sebelum tidur, dan dzikir umum. Masing-masing dengan ayat dan hadis yang dikurasi sesuai waktu atau situasinya.",
        accent: "#C8874A",
      },
      {
        tag: "Sumber Autentik",
        headline: "Berpijak pada Tradisi Islam",
        body: "Setiap ayat berasal dari Al-Qur'an, setiap hadis dari Sahih Bukhari, Sahih Muslim, dan kitab-kitab terpercaya lainnya. Dengan terjemahan bilingual (Inggris + Indonesia).",
        accent: "#4A7C59",
      },
      {
        tag: "Widget Layar Utama",
        headline: "Pengingatmu, Selalu Terlihat.",
        body: "Dua widget indah langsung di layar utamamu. Widget Hadis & Ayat menampilkan pengingat baru setiap hari. Widget Shalat menunjukkan jadwal shalat hari ini sekilas — tanpa perlu membuka aplikasi.",
        accent: "#7A5EA0",
      },
    ],
  },
};

const categoryIcons = [
  { label: "Morning", ar: "صَبَاح", icon: "🌅" },
  { label: "Evening", ar: "مَسَاء", icon: "🌙" },
  { label: "Prayer", ar: "صَلَاة", icon: "🕌" },
  { label: "Travel", ar: "سَفَر", icon: "✈️" },
  { label: "Hardship", ar: "صَبْر", icon: "🤲" },
  { label: "Sleep", ar: "نَوْم", icon: "😴" },
  { label: "General", ar: "عَام", icon: "📿" },
];

function CategoriesVisual() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8DCC8] p-5 shadow-sm max-w-xs mx-auto">
      <p className="text-[10px] text-[#2C2C2C]/40 uppercase tracking-widest mb-3 font-medium">
        7 Life Moments
      </p>
      <div className="grid grid-cols-4 gap-2">
        {categoryIcons.map((cat) => (
          <div
            key={cat.label}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl cursor-default transition-all duration-200 hover:bg-[#FDF6EC] ${
              cat.label === "Morning"
                ? "bg-[#8B5E3C]/8 ring-1 ring-[#8B5E3C]/20"
                : ""
            }`}
          >
            <span className="text-xl" role="img" aria-label={cat.label}>
              {cat.icon}
            </span>
            <span
              className="font-arabic text-[10px] text-[#8B5E3C]"
              dir="rtl"
              lang="ar"
            >
              {cat.ar}
            </span>
            <span className="text-[8px] text-[#2C2C2C]/50">{cat.label}</span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#8B5E3C]/5 border border-dashed border-[#E8DCC8]">
          <span className="text-xl text-[#C8874A]">+</span>
          <span className="text-[8px] text-[#2C2C2C]/30">more</span>
        </div>
      </div>
    </div>
  );
}

function AuthenticSourceVisual() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8DCC8] p-5 shadow-sm max-w-xs mx-auto">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#4A7C59]" aria-hidden="true" />
        <span className="text-[10px] font-semibold text-[#4A7C59] uppercase tracking-widest">
          Quran · Al-Imran 3:173
        </span>
      </div>

      <p
        className="font-arabic text-right text-[20px] leading-loose text-[#2C2C2C] mb-3 border-b border-[#E8DCC8] pb-3"
        dir="rtl"
        lang="ar"
      >
        حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيل
      </p>

      <p className="text-[11px] text-[#2C2C2C]/70 leading-relaxed italic mb-3">
        "Allah is sufficient for us, and He is the best Disposer of affairs."
      </p>

      <p className="text-[10px] text-[#2C2C2C]/40 border-t border-[#E8DCC8] pt-2">
        حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيل — Cukuplah Allah bagi kami dan Dia
        sebaik-baik pelindung.
      </p>
    </div>
  );
}

function WidgetsVisual() {
  const prayers = [
    { name: "Fajr", time: "04:32", done: true },
    { name: "Dhuhr", time: "12:05", done: true },
    { name: "Asr", time: "15:28", active: true },
    { name: "Maghrib", time: "18:14", done: false },
    { name: "Isha", time: "19:30", done: false },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-xs mx-auto w-full">
      {/* Hadith & Ayat widget */}
      <div className="bg-gradient-to-br from-[#7A5EA0]/10 to-[#7A5EA0]/5 border border-[#7A5EA0]/20 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#7A5EA0] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-serif">
                ت
              </span>
            </div>
            <span className="text-[10px] font-semibold text-[#7A5EA0] uppercase tracking-wider">
              Hadith & Ayat
            </span>
          </div>
          <span className="text-[9px] text-[#2C2C2C]/30">Ash-Sharh 94:6</span>
        </div>
        <p
          className="font-arabic text-right text-[16px] leading-loose text-[#2C2C2C] mb-2"
          dir="rtl"
          lang="ar"
        >
          إِنَّ مَعَ الْعُسْرِ يُسْرًا
        </p>
        <p className="text-[10px] text-[#2C2C2C]/60 italic leading-relaxed">
          Indeed, with hardship comes ease
        </p>
      </div>

      {/* Prayer times widget */}
      <div className="bg-gradient-to-br from-[#8B5E3C]/8 to-[#C8874A]/5 border border-[#E8DCC8] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#8B5E3C] flex items-center justify-center">
              <span className="text-white text-[11px]">🕌</span>
            </div>
            <span className="text-[10px] font-semibold text-[#8B5E3C] uppercase tracking-wider">
              Prayer Times
            </span>
          </div>
          <span className="text-[9px] text-[#2C2C2C]/30">Jakarta</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {prayers.map((p) => (
            <div
              key={p.name}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg ${
                p.active ? "bg-[#8B5E3C] text-white" : "text-[#2C2C2C]/60"
              }`}
            >
              <span
                className={`text-[10px] font-medium ${
                  p.active ? "text-white" : ""
                }`}
              >
                {p.name}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-mono ${
                    p.active ? "text-white" : ""
                  }`}
                >
                  {p.time}
                </span>
                {p.done && (
                  <svg
                    className="w-3 h-3 text-[#4A7C59]"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M10 3L5 8.5 2 5.5l-1 1 4 4 6-7z" />
                  </svg>
                )}
                {p.active && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8874A] animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals = [CategoriesVisual, AuthenticSourceVisual, WidgetsVisual];

export default function Features({ lang }: Props) {
  const t = copy[lang];

  return (
    <section
      id="features"
      className="py-24 bg-[#F5F1E8]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#C8874A] uppercase tracking-widest mb-3">
            {t.label}
          </span>
          <h2
            id="features-heading"
            className="font-serif text-[2rem] lg:text-[2.5rem] font-bold text-[#2C2C2C] leading-tight"
          >
            {t.title}
          </h2>
        </div>

        {/* Alternating feature rows */}
        <div className="flex flex-col gap-20">
          {t.features.map((feature, i) => {
            const Visual = visuals[i];
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={feature.headline}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{
                      color: feature.accent,
                      backgroundColor: `${feature.accent}15`,
                    }}
                  >
                    {feature.tag}
                  </span>
                  <h3 className="font-serif text-[1.8rem] font-bold text-[#2C2C2C] leading-tight mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-[#2C2C2C]/65 leading-relaxed text-[1rem] max-w-md mx-auto lg:mx-0">
                    {feature.body}
                  </p>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
