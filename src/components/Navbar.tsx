import { useState, useEffect } from 'react'

interface NavbarProps {
  lang: 'EN' | 'ID'
  onLangToggle: () => void
}

export default function Navbar({ lang, onLangToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#8B5E3C] focus:text-white focus:rounded focus:text-sm"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'bg-[#FDFAF5]/95 backdrop-blur-sm shadow-sm border-b border-[#E8DCC8]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="Tazkirah — go to top"
          >
            <span className="w-8 h-8 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white text-sm font-bold font-serif">
              ت
            </span>
            <span className="text-[#8B5E3C] font-serif font-semibold text-xl tracking-wide group-hover:text-[#6B4928] transition-colors duration-200">
              Tazkirah
            </span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={onLangToggle}
              className="text-sm font-medium text-[#8B5E3C] hover:text-[#6B4928] transition-colors duration-200 px-2 py-1 rounded border border-[#E8DCC8] hover:border-[#8B5E3C]"
              aria-label={`Switch language to ${lang === 'EN' ? 'Indonesian' : 'English'}`}
            >
              <span className={lang === 'EN' ? 'font-semibold' : 'text-[#8B5E3C]/60'}>EN</span>
              <span className="mx-1 text-[#E8DCC8]">/</span>
              <span className={lang === 'ID' ? 'font-semibold' : 'text-[#8B5E3C]/60'}>ID</span>
            </button>

            <a
              href="#download"
              className="px-4 py-2 bg-[#8B5E3C] text-white text-sm font-medium rounded-lg hover:bg-[#6B4928] active:scale-[0.98] transition-all duration-200"
            >
              Download
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
