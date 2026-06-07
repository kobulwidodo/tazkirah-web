interface Props {
  lang: 'EN' | 'ID'
}

const copy = {
  EN: {
    label: 'What is Tazkirah?',
    title: 'A Companion for Your\nDaily Remembrance',
    sub: 'Tazkirah (تَذْكِرَة) means "reminder" in Arabic. It\'s a simple, beautiful app built to bring you closer to your daily acts of worship — one moment at a time.',
    cards: [
      {
        icon: '📿',
        title: 'Daily Reminders',
        desc: 'Curated Quranic verses and prophetic hadith delivered to you daily. Each one carefully selected to uplift, inspire, and ground you.',
      },
      {
        icon: '✨',
        title: 'Dhikr Counter',
        desc: 'Keep track of your daily remembrance with beautiful, interactive counters. SubhanAllah, Alhamdulillah, Allahu Akbar — counted with intention.',
      },
      {
        icon: '🪟',
        title: 'Home Screen Widgets',
        desc: 'Glance at your daily ayat or prayer times right from your home screen. Two beautiful widgets — no need to open the app.',
      },
    ],
  },
  ID: {
    label: 'Apa itu Tazkirah?',
    title: 'Teman untuk Dzikir\nHarianmu',
    sub: 'Tazkirah (تَذْكِرَة) berarti "pengingat" dalam bahasa Arab. Aplikasi sederhana nan indah yang dirancang untuk mendekatkanmu pada ibadah harian — satu momen demi satu momen.',
    cards: [
      {
        icon: '📿',
        title: 'Pengingat Harian',
        desc: 'Ayat Al-Qur\'an dan hadis Nabi yang terkurasi, hadir setiap hari. Dipilih dengan cermat untuk mengangkat, menginspirasi, dan menguatkanmu.',
      },
      {
        icon: '✨',
        title: 'Penghitung Dzikir',
        desc: 'Pantau dzikir harianmu dengan penghitung interaktif yang indah. SubhanAllah, Alhamdulillah, Allahu Akbar — dihitung dengan niat yang tulus.',
      },
      {
        icon: '🪟',
        title: 'Widget Layar Utama',
        desc: 'Lihat ayat harian atau waktu shalat langsung dari layar utamamu. Dua widget indah — tanpa perlu membuka aplikasi.',
      },
    ],
  },
}

export default function WhatIsTazkirah({ lang }: Props) {
  const t = copy[lang]

  return (
    <section
      id="about"
      className="py-24 bg-[#FDFAF5]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[#C8874A] uppercase tracking-widest mb-3">
            {t.label}
          </span>
          <h2
            id="about-heading"
            className="font-serif text-[2rem] lg:text-[2.5rem] font-bold text-[#2C2C2C] leading-tight whitespace-pre-line mb-5"
          >
            {t.title}
          </h2>
          <p className="text-[#2C2C2C]/65 text-[1.05rem] max-w-xl mx-auto leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card) => (
            <article
              key={card.title}
              className="group bg-white border border-[#E8DCC8] rounded-2xl p-7 hover:shadow-lg hover:scale-[1.02] transition-all duration-250 ease-out cursor-default"
            >
              <span className="text-3xl mb-4 block" role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <h3 className="font-serif font-semibold text-[1.1rem] text-[#2C2C2C] mb-3">
                {card.title}
              </h3>
              <p className="text-[#2C2C2C]/65 text-sm leading-relaxed">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
