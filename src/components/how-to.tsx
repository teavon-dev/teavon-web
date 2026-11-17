// The share gesture, step by step, drawn in the page's own system (no store screenshots):
// a reel, the share button, the iOS share row with Teavon, then the Teavon window that saves the recipe.

function Frame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto h-[220px] w-full max-w-[220px] overflow-hidden rounded-[28px] border-[5px] border-ink ${dark ? "bg-[#1d1d1b]" : "bg-[#f2f2ef]"}`}
    >
      {children}
    </div>
  );
}

function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={d} />
    </svg>
  );
}

const HEART = "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z";
const BUBBLE = "M21 11.5a8.4 8.4 0 0 1-12.2 7.5L3 21l2-5.8A8.4 8.4 0 1 1 21 11.5z";
const PLANE = "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z";
const SHARE = "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13";

/** 1 · A reel playing, with its caption. */
function ReelArt() {
  return (
    <Frame dark>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,#c7772f_0,#7a3f17_38%,#1d1d1b_75%)]" />
      <div className="absolute inset-x-3 bottom-4 text-left text-[11px] leading-snug text-white/90" dir="ltr">
        <b className="block text-[12px]">@cooking.with.noa</b>
        Best shakshuka ever 🍳 3 tbsp olive oil…
      </div>
      <div className="absolute bottom-16 right-3 flex flex-col items-center gap-3 text-white/90">
        <Icon d={HEART} />
        <Icon d={BUBBLE} />
        <Icon d={PLANE} />
      </div>
    </Frame>
  );
}

/** 2 · The share button, highlighted. */
function ShareArt() {
  return (
    <Frame dark>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,#c7772f_0,#7a3f17_38%,#1d1d1b_75%)] opacity-60" />
      <div className="absolute bottom-[86px] right-3 flex flex-col items-center gap-3 text-white/60">
        <Icon d={HEART} />
        <Icon d={BUBBLE} />
        <span className="relative grid h-11 w-11 -m-[11px] place-items-center rounded-full bg-white text-ink ring-4 ring-accent/60">
          <Icon d={PLANE} />
          <span className="absolute inset-0 animate-ping rounded-full ring-2 ring-accent motion-reduce:hidden" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-t-[18px] bg-white px-3 pb-3 pt-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-line" />
        <div className="flex items-center justify-end gap-2 text-[12px] font-bold text-ink">
          שיתוף
          <span className="grid h-8 w-8 place-items-center rounded-full bg-fill"><Icon d={SHARE} className="h-4 w-4" /></span>
        </div>
      </div>
    </Frame>
  );
}

/** 3 · The iOS share row, Teavon picked. */
function SheetArt() {
  const apps = [
    { name: "הודעות", color: "bg-[#34c759]" },
    { name: "Teavon", color: "", teavon: true },
    { name: "WhatsApp", color: "bg-[#25d366]" },
  ];
  return (
    <Frame>
      <div className="absolute inset-x-0 bottom-0 top-10 rounded-t-[20px] bg-white px-3 pt-3 shadow-[0_-8px_24px_-16px_rgba(0,0,0,.4)]">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="h-9 w-9 rounded-[8px] bg-[linear-gradient(135deg,#c7772f,#7a3f17)]" />
          <span className="text-right text-[11px] leading-tight">
            <b className="block text-[12px]">Reel · @cooking.with.noa</b>
            <span className="text-muted">instagram.com</span>
          </span>
        </div>
        <div className="mt-4 flex justify-between px-1" dir="ltr">
          {apps.map((a) => (
            <div key={a.name} className="flex flex-col items-center gap-1">
              {a.teavon ? (
                <span className="relative">
                  <img src="/img/icon.png" alt="" width={46} height={46} className="rounded-[11px] ring-4 ring-accent/50" />
                </span>
              ) : (
                <span className={`h-[46px] w-[46px] rounded-[11px] ${a.color}`} />
              )}
              <span className={`text-[10px] ${a.teavon ? "font-bold text-ink" : "text-muted"}`}>{a.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** 4 · The Teavon window over the reel: the recipe is saved. */
function WindowArt() {
  return (
    <Frame dark>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,#c7772f_0,#7a3f17_38%,#1d1d1b_75%)] opacity-50" />
      <div className="absolute inset-x-0 bottom-0 rounded-t-[20px] bg-white px-4 pb-4 pt-2 text-center">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-line" />
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-pareve text-white">
          <Icon d="M5 12.5l4.5 4.5L19 7.5" className="h-6 w-6" />
        </span>
        <p className="mt-2 text-[15px] font-extrabold">המתכון מוכן!</p>
        <p className="text-[11px] text-muted">שקשוקה ביתית</p>
        <span className="mt-3 block rounded-full bg-ink py-2 text-[12px] font-bold text-white">פתיחה ב־Teavon</span>
      </div>
    </Frame>
  );
}

export const STEPS = [
  { art: <ReelArt />, title: "פותחים את הרילס", text: "באינסטגרם, בטיקטוק, ביוטיוב או בפייסבוק. כל סרטון או פוסט עם מתכון." },
  { art: <ShareArt />, title: "לוחצים על שיתוף", text: "באינסטגרם: החץ ← שיתוף. בטיקטוק: החץ ← עוד." },
  { art: <SheetArt />, title: "בוחרים ב־Teavon", text: "בשורת האפליקציות של האייפון. לא רואים אותו? ראו את הטיפ למטה." },
  { art: <WindowArt />, title: "המתכון נשמר", text: "חלון קטן נפתח ומתחיל לייבא מיד. אפשר לסגור ולהמשיך לגלול: המתכון מחכה במחברת." },
];

export function HowSteps() {
  return (
    <ol className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s, i) => (
        <li key={s.title}>
          {s.art}
          <p className="mt-5 flex items-center gap-2 text-[20px] font-bold leading-snug">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-[14px] text-white"><span className="num">{i + 1}</span></span>
            {s.title}
          </p>
          <p className="mt-2 text-[16px] leading-[1.6] text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
