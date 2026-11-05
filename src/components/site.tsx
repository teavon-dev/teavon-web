import Link from "next/link";

// Until Apple approves the app, the button says "coming soon" and does not pretend to be a store link.
export const APP_STORE_LIVE = false;
export const APP_STORE_URL = "https://apps.apple.com/app/id6764895483";
export const SUPPORT_EMAIL = "support@teavon.app";

function AppleMark() {
  return (
    <svg width="20" height="22" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export function StoreButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  const base = "inline-flex min-h-[52px] items-center gap-3 rounded-full px-6 text-[16px] font-bold transition-colors duration-200";
  const look = variant === "solid" ? "bg-ink text-white hover:bg-black" : "border-[1.5px] border-ink text-ink hover:bg-fill";
  const inner = (
    <>
      <AppleMark />
      <span className="leading-tight">
        <small className="block text-[12px] font-normal opacity-75">{APP_STORE_LIVE ? "להורדה ב־" : "בקרוב ב־"}</small>
        App Store
      </span>
    </>
  );
  return APP_STORE_LIVE ? (
    <a href={APP_STORE_URL} className={`${base} ${look}`}>{inner}</a>
  ) : (
    <span className={`${base} ${look} cursor-default`} aria-label="בקרוב ב־App Store">{inner}</span>
  );
}

export function Brand() {
  return (
    <Link href="/he" className="flex items-center gap-2.5 text-[22px] font-extrabold tracking-tight" aria-label="Teavon, לדף הבית">
      <img src="/img/icon.png" alt="" width={34} height={34} className="rounded-[9px]" />
      Teavon
    </Link>
  );
}

export function Nav({ home = false }: { home?: boolean }) {
  return (
    <header className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-4 sm:px-6">
      <Brand />
      <nav aria-label="ניווט ראשי" className="flex items-center gap-7 text-[15px] text-muted">
        <a href={home ? "#how" : "/he#how"} className="hidden hover:text-ink sm:inline">איך זה עובד</a>
        <a href={home ? "#price" : "/he#price"} className="hidden hover:text-ink sm:inline">מחירים</a>
        <a href={home ? "#faq" : "/he#faq"} className="hidden hover:text-ink sm:inline">שאלות</a>
        <a href={home ? "#download" : "/he#download"} className="rounded-full border-[1.5px] border-ink px-4 py-2 text-[14px] font-medium text-ink hover:bg-fill">להורדה</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-4 py-10 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <Brand />
          <span>המחברת למתכונים מהרשתות.</span>
        </div>
        <nav aria-label="קישורי תחתית" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/he/privacy" className="hover:text-ink">מדיניות פרטיות</Link>
          <Link href="/he/terms" className="hover:text-ink">תנאי שימוש</Link>
          <Link href="/he/contact" className="hover:text-ink">תמיכה ויצירת קשר</Link>
          <span>© <span className="num">2026</span> Teavon</span>
        </nav>
      </div>
    </footer>
  );
}

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[720px] px-4 pb-20 pt-10 sm:px-6">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">{title}</h1>
        <p className="mt-2 text-[14px] text-muted">עודכן לאחרונה: {updated}</p>
        <div className="legal mt-10 space-y-8 text-[17px] leading-[1.8] text-[#2b2b28] [&_h2]:mb-2 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-1 [&_ul]:list-disc [&_ul]:ps-6 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
