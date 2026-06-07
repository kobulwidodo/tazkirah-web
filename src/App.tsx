import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsTazkirah from './components/WhatIsTazkirah'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import AppPreview from './components/AppPreview'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

type Lang = 'EN' | 'ID'

export default function App() {
  const [lang, setLang] = useState<Lang>('EN')
  const toggle = () => setLang(l => (l === 'EN' ? 'ID' : 'EN'))

  return (
    <div className="min-h-screen bg-[#FDFAF5] text-[#2C2C2C]">
      <Navbar lang={lang} onLangToggle={toggle} />
      <Hero lang={lang} />
      <WhatIsTazkirah lang={lang} />
      <Features lang={lang} />
      <Testimonials lang={lang} />
      <AppPreview lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} onLangToggle={toggle} />
    </div>
  )
}
