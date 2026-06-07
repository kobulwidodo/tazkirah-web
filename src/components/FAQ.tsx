import { useState } from 'react'

interface Props {
  lang: 'EN' | 'ID'
}

const copy = {
  EN: {
    label: 'FAQ',
    title: 'Common Questions',
    items: [
      {
        q: 'Is Tazkirah free?',
        a: 'Yes, 100% free to use. All core features are available without paying anything. There are optional in-app purchases for donation and premium — but only if you want to support the app. You will never be locked out of any essential feature.',
      },
      {
        q: 'Does it require internet?',
        a: 'No internet is required. Tazkirah works 100% offline out of the box — all core content is bundled with the app. An internet connection is only needed if you want to fetch the latest content updates, but it\'s completely optional.',
      },
      {
        q: 'What languages are available?',
        a: 'Currently English and Indonesian with full Arabic text. More translations are on the roadmap.',
      },
      {
        q: 'Can I share reminders?',
        a: 'Yes, every reminder has a share button. Share as text or as a beautifully formatted image card.',
      },
      {
        q: 'Is the content verified?',
        a: 'Every verse is from the Quran and every hadith is from trusted collections (Bukhari, Muslim, etc.) with references included.',
      },
    ],
  },
  ID: {
    label: 'FAQ',
    title: 'Pertanyaan Umum',
    items: [
      {
        q: 'Apakah Tazkirah gratis?',
        a: 'Ya, 100% gratis untuk digunakan. Semua fitur utama tersedia tanpa biaya apapun. Ada pembelian dalam aplikasi opsional untuk donasi dan premium — tapi hanya jika kamu ingin mendukung aplikasi ini. Kamu tidak akan pernah kehilangan akses ke fitur apapun yang penting.',
      },
      {
        q: 'Apakah memerlukan internet?',
        a: 'Tidak perlu internet. Tazkirah berjalan 100% offline sejak pertama kali digunakan — semua konten utama sudah tersedia dalam aplikasi. Koneksi internet hanya diperlukan jika kamu ingin mengambil pembaruan konten terbaru, tapi itu sepenuhnya opsional.',
      },
      {
        q: 'Bahasa apa saja yang tersedia?',
        a: 'Saat ini Inggris dan Indonesia dengan teks Arab penuh. Lebih banyak terjemahan ada di roadmap.',
      },
      {
        q: 'Bisakah saya membagikan pengingat?',
        a: 'Ya, setiap pengingat memiliki tombol bagikan. Bagikan sebagai teks atau sebagai kartu gambar yang indah.',
      },
      {
        q: 'Apakah kontennya terverifikasi?',
        a: 'Setiap ayat berasal dari Al-Qur\'an dan setiap hadis dari kitab-kitab terpercaya (Bukhari, Muslim, dll.) dengan referensi yang disertakan.',
      },
    ],
  },
}

export default function FAQ({ lang }: Props) {
  const t = copy[lang]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-24 bg-[#FDFAF5]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-[#C8874A] uppercase tracking-widest mb-3">
            {t.label}
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-[2rem] font-bold text-[#2C2C2C]"
          >
            {t.title}
          </h2>
        </div>

        <dl className="flex flex-col gap-3">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="border border-[#E8DCC8] rounded-xl overflow-hidden bg-white"
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#FDFAF5] transition-colors duration-200"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-medium text-[#2C2C2C] text-[0.95rem] pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#E8DCC8] flex items-center justify-center transition-transform duration-200 ${
                      open === i ? 'rotate-45 bg-[#8B5E3C] border-[#8B5E3C]' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className={`w-3 h-3 ${open === i ? 'text-white' : 'text-[#8B5E3C]'}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </dt>

              <dd
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-250 ease-out ${
                  open === i ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-[#2C2C2C]/65 text-sm leading-relaxed border-t border-[#E8DCC8] pt-3">
                  {item.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
