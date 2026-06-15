import { useEffect, useState } from "react";

// TODO: replace with the REAL App Store URL (the app is published).
const APP_STORE_URL =
  "https://apps.apple.com/us/app/tazkirah-islamic-reminder/id6776751662";
const INSTAGRAM_URL = "https://instagram.com/tazkirah.app";

// Expected Google Play release date.
const PLAY_RELEASE_DATE = new Date("2026-06-28T00:00:00");

// Whole days from today until the Play Store release (0 once it's here).
function daysUntilRelease(): number {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = Math.ceil(
    (PLAY_RELEASE_DATE.getTime() - startOfToday.getTime()) / msPerDay,
  );
  return Math.max(0, diff);
}

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
    // iOS users go straight to the App Store (replace = no history entry).
    if (platform === "ios") {
      window.location.replace(APP_STORE_URL);
    }
  }, [platform]);

  // While redirecting iOS, show a minimal placeholder.
  if (platform === "ios") {
    return (
      <Shell>
        <p className="font-serif text-xl text-[#2C2C2C]">
          Taking you to the App Store…
        </p>
      </Shell>
    );
  }

  // Android + desktop / other → Play Store isn't live yet.
  const days = daysUntilRelease();

  return (
    <Shell>
      <span className="inline-block text-xs font-semibold text-[#C8874A] uppercase tracking-widest mb-4">
        Android
      </span>

      <h1 className="font-serif text-[1.8rem] font-bold text-[#2C2C2C] leading-tight mb-4">
        Almost there on Google Play
      </h1>

      <p className="text-[#2C2C2C]/65 leading-relaxed mb-2 max-w-md">
        Tazkirah for Android is currently being reviewed by Google Play.{" "}
        {days > 0 ? (
          <>
            It should be live in about{" "}
            <strong>
              {days} {days === 1 ? "day" : "days"}
            </strong>{" "}
            — thank you for your patience. 🌙
          </>
        ) : (
          <>
            It should be live any moment now — thank you for your patience. 🌙
          </>
        )}
      </p>

      <div className="bg-[#7A5EA0]/8 border border-[#7A5EA0]/20 rounded-2xl p-6 my-8 max-w-md">
        <p className="text-[#7A5EA0] font-semibold text-sm mb-1">
          Want early access?
        </p>
        <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">
          Join our beta program and try Tazkirah before everyone else. DM us on
          Instagram and we'll add you as a tester.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8B5E3C] text-white font-medium rounded-xl hover:bg-[#6B4928] active:scale-[0.98] transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          DM us on Instagram
        </a>

        <a
          href={APP_STORE_URL}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#8B5E3C] text-[#8B5E3C] font-medium rounded-xl hover:bg-[#8B5E3C] hover:text-white active:scale-[0.98] transition-all duration-200"
        >
          On iPhone? Get it now
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
