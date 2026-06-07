interface Props {
  lang: 'EN' | 'ID'
}

const copy = {
  EN: {
    label: 'Testimonials',
    title: 'Loved by Early Users',
    quotes: [
      {
        text: 'This app brings me back to routine with such beauty and simplicity. The warm design feels like a friend reminding me.',
        name: 'Fatima R.',
        meta: 'Jakarta, Indonesia',
        initial: 'F',
      },
      {
        text: 'I love how every reminder is rooted in authentic sources. I can use it without worrying about the accuracy of the content.',
        name: 'Ahmad K.',
        meta: 'Kuala Lumpur',
        initial: 'A',
      },
      {
        text: 'The offline feature is a blessing. I use it during my commute without needing data. Clean, distraction-free, and beautiful.',
        name: 'Zahra M.',
        meta: 'London, UK',
        initial: 'Z',
      },
    ],
  },
  ID: {
    label: 'Testimoni',
    title: 'Dicintai Pengguna Awal',
    quotes: [
      {
        text: 'Aplikasi ini membawaku kembali ke rutinitas dengan keindahan dan kesederhanaan. Desainnya yang hangat terasa seperti teman yang mengingatkan.',
        name: 'Fatima R.',
        meta: 'Jakarta, Indonesia',
        initial: 'F',
      },
      {
        text: 'Saya suka bagaimana setiap pengingat berakar dari sumber yang autentik. Saya bisa menggunakannya tanpa khawatir tentang keakuratan konten.',
        name: 'Ahmad K.',
        meta: 'Kuala Lumpur',
        initial: 'A',
      },
      {
        text: 'Fitur offline adalah berkah. Saya menggunakannya saat komuter tanpa perlu data. Bersih, bebas gangguan, dan indah.',
        name: 'Zahra M.',
        meta: 'London, UK',
        initial: 'Z',
      },
    ],
  },
}

export default function Testimonials({ lang }: Props) {
  const t = copy[lang]

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#FDFAF5]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[#C8874A] uppercase tracking-widest mb-3">
            {t.label}
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-[2rem] lg:text-[2.2rem] font-bold text-[#2C2C2C]"
          >
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.quotes.map((q) => (
            <figure
              key={q.name}
              className="bg-white border border-[#E8DCC8] rounded-2xl p-7 flex flex-col"
            >
              {/* Quote mark */}
              <span className="font-serif text-5xl text-[#C8874A]/30 leading-none mb-3 select-none" aria-hidden="true">
                "
              </span>

              <blockquote className="font-serif text-[1rem] text-[#2C2C2C]/80 leading-relaxed italic flex-1 mb-5">
                {q.text}
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-[#E8DCC8] pt-4">
                <div
                  className="w-9 h-9 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                  aria-hidden="true"
                >
                  {q.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#2C2C2C] text-sm">{q.name}</p>
                  <p className="text-[#2C2C2C]/45 text-xs">{q.meta}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
