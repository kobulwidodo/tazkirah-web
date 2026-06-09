const lastUpdated = 'June 9, 2026'

const sections = [
  {
    title: 'Overview',
    body: `Tazkirah ("we", "our", or "the app") is a daily Islamic reminder application. We designed Tazkirah with privacy as a core principle: the app works fully offline, requires no account, and collects no personal information for advertising or analytics purposes.

This Privacy Policy explains what limited data the app handles, why, and your rights regarding that data. It applies to the Tazkirah mobile application on iOS and Android, and to this website (tazkirah.app).`,
  },
  {
    title: '1. Data We Collect',
    body: `**Data stored only on your device (never sent to us):**
- Dhikr counter progress and saved counts
- Your preferred language (English or Indonesian)
- Notification preferences and reminder schedules
- Prayer times location, if you choose to enable the prayer times widget

**Data we do not collect:**
- No name, email address, or account credentials
- No device identifiers or advertising IDs
- No usage analytics or crash reports sent to our servers
- No behavioral tracking of any kind`,
  },
  {
    title: '2. Location Data',
    body: `The Prayer Times widget can display local prayer times. If you enable this feature, the app may request access to your device's location.

- Location is used solely to calculate prayer times using a standard algorithm on your device.
- Location data is never transmitted to our servers.
- Location access is entirely optional — you can enter your city manually or skip the feature entirely.
- You can revoke location permission at any time in your device's Settings.`,
  },
  {
    title: '3. Notifications',
    body: `If you grant notification permission, Tazkirah schedules local notifications on your device to deliver daily reminders at your chosen times.

- All notifications are generated and scheduled locally — no push notification server is involved.
- No notification identifiers or tokens are sent to us.
- You can disable notifications at any time in your device's Settings.`,
  },
  {
    title: '4. Photo Library / Gallery Access',
    body: `Tazkirah may request permission to save images to your device's photo library or gallery. This permission is used **only** to save a hadith or Quranic verse card as an image when you tap the share/save button on a reminder.

- We never read, scan, or access any photos or files already in your gallery.
- We do not upload, transmit, or process any content from your photo library.
- The permission is write-only — we only save an image you explicitly choose to save.
- You can revoke this permission at any time in your device's Settings without affecting any other app functionality.`,
  },
  {
    title: '5. Internet Access (Optional)',
    body: `Tazkirah is designed to work 100% offline. All Quranic verses, hadith, and dhikr content are bundled within the app.

The app may optionally connect to the internet only to:
- Download content updates (new reminders, translations) — optional and user-initiated.

No personal data is included in any such request.`,
  },
  {
    title: '6. Third-Party Services',
    body: `Tazkirah does not integrate any third-party analytics, advertising SDKs, social media SDKs, or tracking libraries.

We do not share any user data with third parties because we do not collect user data in the first place.`,
  },
  {
    title: '7. In-App Purchases',
    body: `Tazkirah offers optional in-app purchases (donation / premium) processed entirely through the Apple App Store or Google Play Store. We do not handle or store any payment information. Please review Apple's or Google's privacy policies for how they process payment data.`,
  },
  {
    title: "8. Children's Privacy",
    body: `Tazkirah does not knowingly collect personal information from children under the age of 13 (or the applicable age of digital consent in your jurisdiction). Because we collect no personal data from any user, the app is safe for use by children with parental guidance.

If you believe a child has provided personal information through the app, please contact us and we will take appropriate steps.`,
  },
  {
    title: '9. Data Security',
    body: `Because all data remains on your device and nothing is transmitted to our servers, the security of your data depends primarily on the security of your device. We recommend keeping your device's operating system up to date and using a device passcode.`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. For material changes, we will provide a notice within the app. Continued use of Tazkirah after any change constitutes acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    body: `If you have questions or concerns about this Privacy Policy or your privacy while using Tazkirah, please contact us at:

**Email:** privacy@tazkirah.app

We aim to respond within 7 business days.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      {/* Minimal header */}
      <header className="border-b border-[#E8DCC8] bg-[#FDFAF5]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Tazkirah — back to home"
          >
            <span className="w-7 h-7 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white text-xs font-bold font-serif">
              ت
            </span>
            <span className="text-[#8B5E3C] font-serif font-semibold text-lg tracking-wide group-hover:text-[#6B4928] transition-colors duration-200">
              Tazkirah
            </span>
          </a>
          <a
            href="/"
            className="text-sm text-[#2C2C2C]/50 hover:text-[#8B5E3C] transition-colors duration-200"
          >
            ← Back to home
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Page title */}
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-[#C8874A] uppercase tracking-widest mb-3">
            Legal
          </span>
          <h1 className="font-serif text-[2rem] lg:text-[2.5rem] font-bold text-[#2C2C2C] leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-[#2C2C2C]/45 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Highlight box */}
        <div className="bg-[#4A7C59]/8 border border-[#4A7C59]/20 rounded-2xl p-6 mb-12">
          <p className="text-[#4A7C59] font-semibold text-sm mb-1">
            Short version
          </p>
          <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">
            Tazkirah collects no personal information. Everything stays on your
            device. No accounts. No ads. No tracking. Full stop.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-[1.15rem] font-semibold text-[#2C2C2C] mb-3 pb-2 border-b border-[#E8DCC8]">
                {section.title}
              </h2>
              <div className="text-[#2C2C2C]/70 text-[0.92rem] leading-relaxed whitespace-pre-line">
                <PolicyBody text={section.body} />
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-[#E8DCC8] text-center">
          <p
            className="font-arabic text-xl text-[#4A7C59] mb-3"
            dir="rtl"
            lang="ar"
          >
            وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ
          </p>
          <p className="text-[#2C2C2C]/35 text-xs italic mb-6">
            "And Allah knows, while you do not know." — Al-Baqarah 2:216
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#8B5E3C] hover:text-[#6B4928] transition-colors duration-200 font-medium"
          >
            ← Back to Tazkirah
          </a>
        </div>
      </main>
    </div>
  )
}

function PolicyBody({ text }: { text: string }) {
  const lines = text.split('\n')

  return (
    <>
      {lines.map((line, i) => {
        if (line === '') return <br key={i} />

        const parts = line.split(/(\*\*[^*]+\*\*)/)
        return (
          <p key={i} className={line.startsWith('-') ? 'ml-4 mb-1' : 'mb-3'}>
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**') ? (
                <strong key={j} className="text-[#2C2C2C] font-semibold">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        )
      })}
    </>
  )
}
