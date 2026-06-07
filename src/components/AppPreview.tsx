interface Props {
  lang: "EN" | "ID";
}

const copy = {
  EN: {
    label: "App Preview",
    title: "See It in Action",
    sub: "A warm, distraction-free experience designed for daily use.",
    screens: [
      { label: "Feed", src: "/feed.png" },
      { label: "Browse", src: "/browse.png" },
      { label: "Dhikr", src: "/dhikr.png" },
    ],
  },
  ID: {
    label: "Preview Aplikasi",
    title: "Lihat Aksinya",
    sub: "Pengalaman hangat dan bebas gangguan yang dirancang untuk penggunaan harian.",
    screens: [
      { label: "Feed", src: "/feed.png" },
      { label: "Jelajahi", src: "/browse.png" },
      { label: "Dzikir", src: "/dhikr.png" },
    ],
  },
};

function PhoneScreen({
  screen,
  index,
}: {
  screen: { label: string; src: string };
  index: number;
}) {
  const isCenter = index === 1;

  return (
    <div
      className={`flex flex-col items-center transition-all duration-300 ${
        isCenter ? "z-10" : "opacity-80"
      }`}
    >
      {/* Glow behind center phone */}
      {isCenter && (
        <div
          className="absolute w-[260px] h-[520px] rounded-[2.5rem] blur-3xl opacity-20 bg-[#C8874A] pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Screenshot card */}
      <div
        className={`relative overflow-hidden rounded-[2.5rem] border border-[#E8DCC8]/60 transition-all duration-300 ${
          isCenter
            ? "w-[260px] h-[520px] shadow-2xl shadow-[#8B5E3C]/20 scale-100"
            : "w-[220px] h-[440px] shadow-lg scale-95"
        }`}
      >
        <img
          src={screen.src}
          alt={`${screen.label} screen`}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Label */}
      <p
        className={`mt-4 font-medium tracking-wide text-[#2C2C2C]/50 ${
          isCenter ? "text-sm" : "text-xs"
        }`}
      >
        {screen.label}
      </p>
    </div>
  );
}

export default function AppPreview({ lang }: Props) {
  const t = copy[lang];

  return (
    <section
      id="preview"
      className="py-24 bg-gradient-to-b from-[#F5F1E8] to-[#FDFAF5] overflow-hidden"
      aria-labelledby="preview-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#C8874A] uppercase tracking-widest mb-3">
            {t.label}
          </span>
          <h2
            id="preview-heading"
            className="font-serif text-[2rem] lg:text-[2.2rem] font-bold text-[#2C2C2C] mb-4"
          >
            {t.title}
          </h2>
          <p className="text-[#2C2C2C]/60 max-w-sm mx-auto">{t.sub}</p>
        </div>

        <div className="flex items-end justify-center gap-4 md:gap-8">
          {t.screens.map((screen, i) => (
            <PhoneScreen key={screen.label} screen={screen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
