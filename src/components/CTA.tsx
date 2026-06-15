import { Link } from "react-router";

interface Props {
  lang: "EN" | "ID";
}

const copy = {
  EN: {
    title: "Start Your Daily Reminder Today",
    sub: "Free. No tracking.",
    appStore: "App Store",
    playStore: "Google Play",
    ayah: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
    ayahTrans:
      '"And remind, for indeed the reminder benefits the believers." — Adh-Dhariyat 51:55',
  },
  ID: {
    title: "Mulai Pengingat Harianmu Hari Ini",
    sub: "Gratis. Tanpa pelacakan.",
    appStore: "App Store",
    playStore: "Google Play",
    ayah: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
    ayahTrans:
      '"Dan berilah peringatan, karena sesungguhnya peringatan itu bermanfaat bagi orang-orang mukmin." — Adz-Dzariyat 51:55',
  },
};

export default function CTA({ lang }: Props) {
  const t = copy[lang];

  return (
    <section
      id="download"
      style={{
        background: "linear-gradient(135deg, #8B5E3C 0%, #6B4928 100%)",
      }}
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpolygon points='50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5'/%3E%3Cpolygon points='50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5'/%3E%3Cline x1='50' y1='5' x2='50' y2='95'/%3E%3Cline x1='5' y1='27.5' x2='95' y2='72.5'/%3E%3Cline x1='95' y1='27.5' x2='5' y2='72.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,135,74,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Ayah */}
        <p
          className="font-arabic text-[1.6rem] text-white/80 leading-loose mb-2"
          dir="rtl"
          lang="ar"
        >
          {t.ayah}
        </p>
        <p className="text-white/50 text-sm italic mb-12 max-w-md mx-auto leading-relaxed">
          {t.ayahTrans}
        </p>

        <h2
          id="cta-heading"
          className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-tight mb-4"
        >
          {t.title}
        </h2>

        <p className="text-white/60 mb-10 tracking-wide uppercase text-sm font-medium">
          {t.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/d"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#8B5E3C] font-semibold rounded-xl hover:bg-[#FDF6EC] active:scale-[0.98] transition-all duration-200 shadow-lg text-[0.95rem]"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t.appStore}
          </Link>

          <Link
            to="/d"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border-2 border-white/40 text-white rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all duration-200 text-[0.95rem]"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3.18 23.76c.3.17.65.19.98.07l13.12-7.57-2.9-2.9-11.2 10.4zM.5 1.4C.19 1.72 0 2.22 0 2.88v18.24c0 .66.19 1.16.5 1.48l.08.08 10.21-10.21v-.24L.58 1.32.5 1.4zM20.37 10.04l-2.72-1.57-3.22 3.22 3.22 3.22 2.74-1.58c.78-.45.78-1.84-.02-2.29zM3.18.24L16.3 7.81l-2.9 2.9L3.18.32l-.0-.08z" />
            </svg>
            {t.playStore}
          </Link>
        </div>
      </div>
    </section>
  );
}
