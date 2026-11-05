"use client";

import { useState } from "react";

// Real arithmetic on the demo shakshuka (same recipe as the App Store screenshots), labelled "דוגמה".
const BASE = 4;
const ITEMS: [number | null, string, string][] = [
  [3, "כפות", "שמן זית"],
  [1, "", "בצל קצוץ"],
  [2, "", "פלפלים אדומים"],
  [3, "שיני", "שום"],
  [1, "כפית", "פפריקה מתוקה"],
  [800, "גרם", "עגבניות מרוסקות"],
  [6, "", "ביצים"],
];

function fmt(n: number) {
  const r = Math.round(n * 4) / 4;
  const whole = Math.floor(r);
  const frac = r - whole;
  const f = frac === 0.25 ? "¼" : frac === 0.5 ? "½" : frac === 0.75 ? "¾" : "";
  if (r >= 50) return String(Math.round(n / 10) * 10);
  return whole === 0 && f ? f : `${whole}${f}`;
}

export function ScaleDemo() {
  const [n, setN] = useState(BASE);
  const btn =
    "grid h-11 w-11 place-items-center rounded-full bg-fill text-[22px] font-medium text-ink transition-colors duration-150 hover:bg-[#e4e4de] disabled:opacity-40";
  return (
    <div className="rounded-[24px] bg-surface p-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,.25)] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[19px] font-bold">כמה מכינים?</p>
          <p className="text-[14px] text-muted">שקשוקה ביתית · <span className="rounded-full bg-fill px-2 py-0.5 text-[12px] font-bold">דוגמה</span></p>
        </div>
        <div className="flex items-center gap-3" dir="ltr">
          <button type="button" className={btn} onClick={() => setN((v) => Math.max(1, v - 1))} disabled={n <= 1} aria-label="פחות מנות">−</button>
          <div className="w-14 text-center" aria-live="polite">
            <div className="text-[26px] font-extrabold leading-none">{n}</div>
            <div className="mt-1 text-[12px] text-muted" dir="rtl">מנות</div>
          </div>
          <button type="button" className={btn} onClick={() => setN((v) => Math.min(20, v + 1))} disabled={n >= 20} aria-label="יותר מנות">+</button>
        </div>
      </div>
      <ul className="mt-5 divide-y divide-line">
        {ITEMS.map(([q, unit, name]) => (
          <li key={name} className="flex items-baseline gap-2 py-2.5 text-[16px]">
            <span className="min-w-[3.2rem] font-bold tabular-nums">{q === null ? "" : fmt((q * n) / BASE)}</span>
            <span className="text-muted">{unit}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
