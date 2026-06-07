interface Props {
  lang: "EN" | "ID";
  onLangToggle: () => void;
}

const copy = {
  EN: {
    tagline: "Daily reminders, rooted in tradition.",
    links: ["About", "Privacy", "Terms", "Contact"],
    copyright: "© 2026 Tazkirah. Built with love for Muslim Community.",
  },
  ID: {
    tagline: "Pengingat harian, berakar dari tradisi.",
    links: ["Tentang", "Privasi", "Ketentuan", "Kontak"],
    copyright: "© 2026 Tazkirah. Dibuat dengan cinta untuk Komunitas Muslim.",
  },
};

export default function Footer({ lang, onLangToggle }: Props) {
  const t = copy[lang];

  return (
    <footer
      className="bg-[#F5F1E8] border-t border-[#E8DCC8] py-12"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <span className="w-8 h-8 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white text-sm font-bold font-serif">
                ت
              </span>
              <span className="text-[#8B5E3C] font-serif font-semibold text-xl tracking-wide group-hover:text-[#6B4928] transition-colors duration-200">
                Tazkirah
              </span>
            </a>
            <p className="text-[#2C2C2C]/50 text-sm mt-1">{t.tagline}</p>
            <p
              className="font-arabic text-sm text-[#4A7C59] mt-1"
              dir="rtl"
              lang="ar"
            >
              تَذْكِرَة
            </p>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col gap-2 md:items-center"
          >
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#2C2C2C]/60 text-sm hover:text-[#8B5E3C] transition-colors duration-200 w-fit"
              >
                {link}
              </a>
            ))}
            <button
              onClick={onLangToggle}
              className="mt-1 text-sm font-medium text-[#8B5E3C] hover:text-[#6B4928] transition-colors duration-200 border border-[#E8DCC8] hover:border-[#8B5E3C] px-3 py-1 rounded w-fit"
              aria-label={`Switch to ${
                lang === "EN" ? "Indonesian" : "English"
              }`}
            >
              {lang === "EN" ? "EN / ID" : "ID / EN"}
            </button>
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-[#E8DCC8] flex items-center justify-center text-[#2C2C2C]/50 hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play"
                className="w-9 h-9 rounded-full border border-[#E8DCC8] flex items-center justify-center text-[#2C2C2C]/50 hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.18 23.76c.3.17.65.19.98.07l13.12-7.57-2.9-2.9-11.2 10.4zM.5 1.4C.19 1.72 0 2.22 0 2.88v18.24c0 .66.19 1.16.5 1.48l.08.08 10.21-10.21v-.24L.58 1.32.5 1.4zM20.37 10.04l-2.72-1.57-3.22 3.22 3.22 3.22 2.74-1.58c.78-.45.78-1.84-.02-2.29zM3.18.24L16.3 7.81l-2.9 2.9L3.18.32l-.0-.08z"/>
                </svg>
              </a>
            </div>
            <p className="text-[#2C2C2C]/40 text-xs mt-2 text-right">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
