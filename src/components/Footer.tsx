interface Props {
  lang: "EN" | "ID";
  onLangToggle: () => void;
}

const copy = {
  EN: {
    tagline: "Daily reminders, rooted in tradition.",
    links: [
      { name: "About", href: "#" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "#" },
      { name: "Contact", href: "#" }
    ],
    copyright: "© 2026 Tazkirah. Built with love for Muslim Community.",
  },
  ID: {
    tagline: "Pengingat harian, berakar dari tradisi.",
    links: [
      { name: "Tentang", href: "#" },
      { name: "Privasi", href: "/privacy" },
      { name: "Ketentuan", href: "#" },
      { name: "Kontak", href: "#" }
    ],
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
                key={link.name}
                href={link.href}
                className="text-[#2C2C2C]/60 text-sm hover:text-[#8B5E3C] transition-colors duration-200 w-fit"
              >
                {link.name}
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
                href="https://instagram.com/tazkirah.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#E8DCC8] flex items-center justify-center text-[#2C2C2C]/50 hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
