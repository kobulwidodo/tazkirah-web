import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/tazkirah-islamic-reminder/id6776751662";
// TODO: replace `app.tazkirah` with your REAL Google Play package name.
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rakhmadgiffari.tazkirah";

type Platform = "ios" | "android" | "other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent || "";

  // iOS: iPhone / iPod, plus iPad (which on iPadOS 13+ reports as Mac
  // but exposes a touch screen).
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

export default function Download() {
  // Detection is deterministic, so compute it once during render.
  const [platform] = useState<Platform>(detectPlatform);

  useEffect(() => {
    // Send mobile users straight to their store (replace = no history entry).
    if (platform === "ios") {
      window.location.replace(APP_STORE_URL);
    } else if (platform === "android") {
      window.location.replace(PLAY_STORE_URL);
    }
  }, [platform]);

  // While redirecting a mobile user, show a minimal placeholder.
  if (platform === "ios" || platform === "android") {
    const store = platform === "ios" ? "App Store" : "Google Play";
    return (
      <Shell>
        <p className="font-serif text-xl text-[#2C2C2C]">
          Taking you to {store}…
        </p>
      </Shell>
    );
  }

  // Desktop / other → offer both stores.
  return (
    <Shell>
      <span className="inline-block text-xs font-semibold text-[#C8874A] uppercase tracking-widest mb-4">
        Download
      </span>

      <h1 className="font-serif text-[1.8rem] font-bold text-[#2C2C2C] leading-tight mb-4">
        Get Tazkirah
      </h1>

      <p className="text-[#2C2C2C]/65 leading-relaxed mb-8 max-w-md">
        Your daily reminder, rooted in tradition. Available now on iPhone and
        Android. 🌙
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8B5E3C] text-white font-medium rounded-xl hover:bg-[#6B4928] active:scale-[0.98] transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </a>

        <a
          href={PLAY_STORE_URL}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#8B5E3C] text-[#8B5E3C] font-medium rounded-xl hover:bg-[#8B5E3C] hover:text-white active:scale-[0.98] transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3.18 23.76c.3.17.65.19.98.07l13.12-7.57-2.9-2.9-11.2 10.4zM.5 1.4C.19 1.72 0 2.22 0 2.88v18.24c0 .66.19 1.16.5 1.48l.08.08 10.21-10.21v-.24L.58 1.32.5 1.4zM20.37 10.04l-2.72-1.57-3.22 3.22 3.22 3.22 2.74-1.58c.78-.45.78-1.84-.02-2.29zM3.18.24L16.3 7.81l-2.9 2.9L3.18.32l-.0-.08z" />
          </svg>
          Google Play
        </a>
      </div>

      <a
        href="/"
        className="mt-8 text-sm text-[#2C2C2C]/45 hover:text-[#8B5E3C] transition-colors duration-200"
      >
        ← Back to home
      </a>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FDFAF5] flex flex-col items-center justify-center px-6 text-center">
      <span className="w-12 h-12 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white text-lg font-bold font-serif mb-6">
        ت
      </span>
      {children}
    </div>
  );
}
