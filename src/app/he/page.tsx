import { Footer, Nav, StoreButton } from "@/components/site";
import { ScaleDemo } from "@/components/scale-demo";

function Caption() {
  return (
    <div className="rounded-[20px] bg-surface p-4 text-left text-[14px] leading-[1.55] text-[#333] shadow-[0_10px_30px_-18px_rgba(0,0,0,.25)]" dir="ltr">
      <b className="mb-1 block text-[12px] font-medium text-muted">@cooking.with.noa · Reels</b>
      Best shakshuka ever 🍳 3 tbsp olive oil, 1 onion, 2 red peppers, 4 eggs, 1 can tomatoes… full recipe below 👇
      <span className="mt-2 block" dir="rtl">
        <span className="rounded-full bg-fill px-2 py-0.5 text-[11px] font-bold text-muted">דוגמה</span>
      </span>
    </div>
  );
}

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} width={590} height={1278} loading="lazy" className={`screen block h-auto w-full ${className}`} />;
}

const KOSHER = [
  { label: "בשרי", color: "bg-meat" },
  { label: "חלבי", color: "bg-dairy" },
  { label: "פרווה", color: "bg-pareve" },
];

const FAQ: [string, string][] = [
  ["זה עובד עם כל רילס?", "עם רוב הרילס באינסטגרם, בטיקטוק, ביוטיוב ובפייסבוק, וגם עם אתרי מתכונים. Teavon קורא קודם את תיאור הפוסט. כשאין בו מתכון, הוא צופה בסרטון עצמו ומוציא ממנו את המצרכים והשלבים."],
  ["הרילס באנגלית. זה יוצא בעברית?", "כן. כל מתכון נכתב בעברית, עם יחידות מטריות. אפשר לעבור לכוסות וכפות במסך המתכון."],
  ["איך יודעים אם מתכון בשרי, חלבי או פרווה?", "כל מתכון מקבל סימון לפי המצרכים שלו. זה סימון עזר בלבד, לא הכשר: בודקים תמיד את המצרכים בעצמכם."],
  ["מה קורה לפוסט המקורי?", "שום דבר. Teavon שומר אצלכם את המתכון ואת הקישור לפוסט, כדי שתמיד תוכלו לחזור ליוצר ולתת לו קרדיט."],
  ["אפשר לבטל את Teavon+ מתי שרוצים?", "כן. המינוי מנוהל על ידי Apple ומבטלים אותו בהגדרות האייפון, תחת Apple ID ← מינויים. אין התחייבות."],
  ["יש גרסה לאנדרואיד?", "עדיין לא. Teavon יוצא קודם לאייפון, ואנדרואיד בדרך."],
];

export default function Home() {
  return (
    <>
      <Nav home />
      <main>
        {/* 1 · The mechanism: a messy reel caption next to the real recipe screen it becomes */}
        <section className="mx-auto grid max-w-[1160px] items-center gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:pt-14">
          <div>
            <h1 className="text-[44px] font-extrabold leading-[1.04] tracking-tight sm:text-[64px] lg:text-[76px]">
              ראיתם מתכון ברילס?
              <span className="block font-light">שתפו. הוא נשמר בעברית.</span>
            </h1>
            <p className="mt-6 max-w-[34ch] text-[18px] leading-[1.6] text-muted sm:text-[19px]">
              המצרכים, הכמויות והשלבים מכל סרטון באינסטגרם ובטיקטוק, במחברת אחת. עם סימון בשרי, חלבי או פרווה.
            </p>
            <div id="download" className="mt-8 scroll-mt-24">
              <StoreButton />
              <p className="mt-3 text-[13px] text-muted">5 ייבואים בשבוע בחינם. לאייפון.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-[230px_1fr] sm:gap-6">
            <Caption />
            <Shot src="/img/02-recipe-top.jpg" alt="מתכון שקשוקה שיובא ל־Teavon: מצרכים, כמויות וסימון פרווה" className="max-w-[300px]" />
          </div>
        </section>

        {/* 2 · How it works: the real share gesture, three moments of different weight */}
        <section id="how" className="scroll-mt-20 bg-surface py-20">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
            <h2 className="max-w-[18ch] text-[34px] font-extrabold leading-tight tracking-tight sm:text-[44px]">
              בלי להעתיק, בלי לעצור את הסרטון.
            </h2>
            <ol className="mt-12 grid items-end gap-10 md:grid-cols-[1fr_1.15fr_1fr]">
              <li>
                <p className="text-[15px] font-bold text-accent-deep">באינסטגרם או בטיקטוק</p>
                <p className="mt-1 text-[22px] font-bold leading-snug">לוחצים על שיתוף ובוחרים ב־Teavon.</p>
                <p className="mt-2 text-[16px] text-muted">או מדביקים את הקישור באפליקציה.</p>
              </li>
              <li className="order-first md:order-none">
                <Shot src="/img/04-import.jpg" alt="מסך הייבוא: קוראים את הפוסט, מאתרים מצרכים, מסדרים שלבים" className="mx-auto max-w-[280px]" />
              </li>
              <li>
                <p className="text-[15px] font-bold text-accent-deep">אחרי כמה שניות</p>
                <p className="mt-1 text-[22px] font-bold leading-snug">המתכון מוכן, מתורגם ומסודר.</p>
                <p className="mt-2 text-[16px] text-muted">שומרים אותו במחברת בלחיצה, עם קישור לפוסט המקורי.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* 3 · Working demo: quantities follow the number of servings */}
        <section className="mx-auto grid max-w-[1160px] items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[44px]">
              מכינים לשישה?
              <span className="block font-light">הכמויות מתעדכנות.</span>
            </h2>
            <p className="mt-5 max-w-[36ch] text-[18px] leading-[1.6] text-muted">
              בוחרים כמה מכינים, והמצרכים מחושבים מחדש. אפשר גם לעבור בין גרמים לכוסות. נסו כאן:
            </p>
          </div>
          <ScaleDemo />
        </section>

        {/* 4 · The notebook, kosher marking and the week */}
        <section className="bg-surface py-24">
          <div className="mx-auto grid max-w-[1160px] gap-14 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[44px]">
                כל המתכונים
                <span className="block font-light">במחברת אחת.</span>
              </h2>
              <p className="mt-5 max-w-[38ch] text-[18px] leading-[1.6] text-muted">
                במקום צילומי מסך בגלריה ושמירות שנעלמות. כל מתכון מסומן כדי שתדעו מה מתאים לאיזו ארוחה:
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {KOSHER.map((k) => (
                  <li key={k.label} className="flex items-center gap-2 rounded-full bg-fill px-4 py-2 text-[15px] font-medium">
                    <span className={`h-2.5 w-2.5 rounded-full ${k.color}`} aria-hidden="true" />
                    {k.label}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[20px] font-bold">ועם Teavon+ גם:</p>
              <p className="mt-2 max-w-[38ch] text-[17px] leading-[1.6] text-muted">
                תכנון ארוחות לכל השבוע, רשימת קניות שמסודרת לפי מחלקות בסופר, מצב בישול שלב אחרי שלב, ותיקיות.
              </p>
            </div>
            <div className="grid grid-cols-[1fr_1.15fr_1fr] items-end gap-3 sm:gap-5">
              <Shot src="/img/01-home.jpg" alt="המחברת: כל המתכונים שיובאו" />
              <Shot src="/img/05-plan.jpg" alt="תכנון ארוחות לשבוע" />
              <Shot src="/img/06-grocery.jpg" alt="רשימת קניות לפי מחלקות" />
            </div>
          </div>
        </section>

        {/* 5 · Pricing: real prices, one plan highlighted, one filled action */}
        <section id="price" className="mx-auto max-w-[1160px] scroll-mt-20 px-4 py-24 sm:px-6">
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[44px]">מתחילים בחינם.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.25fr]">
            <div className="rounded-[24px] border border-line p-7">
              <p className="text-[20px] font-bold">חינם</p>
              <p className="mt-1 text-[15px] text-muted">לתמיד</p>
              <ul className="mt-6 space-y-3 text-[16px]">
                <li><span className="num font-bold">5</span> ייבואים בשבוע</li>
                <li>המחברת וכל המתכונים ששמרתם</li>
                <li>כמויות לפי מספר המנות</li>
                <li>סימון בשרי, חלבי או פרווה</li>
              </ul>
            </div>
            <div className="rounded-[24px] bg-ink p-7 text-white">
              <div className="flex items-center justify-between">
                <p className="text-[20px] font-bold">Teavon+</p>
                <span className="rounded-full bg-accent px-3 py-1 text-[13px] font-bold text-ink">הכי משתלם: שנתי</span>
              </div>
              <p className="mt-4 text-[15px] text-white/70">כל מה שיש בחינם, ועוד:</p>
              <ul className="mt-3 space-y-3 text-[16px]">
                <li>ייבואים בלי הגבלה</li>
                <li>תכנון ארוחות שבועי</li>
                <li>רשימת קניות לפי מחלקות</li>
                <li>מצב בישול ותיקיות</li>
              </ul>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[16px] bg-white/10 p-4">
                  <p className="text-[14px] text-white/70">שנתי</p>
                  <p className="mt-1 text-[24px] font-extrabold"><span className="num">₪199.90</span></p>
                  <p className="text-[13px] text-white/70">כ־<span className="num">₪16.66</span> לחודש</p>
                </div>
                <div className="rounded-[16px] border border-white/20 p-4">
                  <p className="text-[14px] text-white/70">חודשי</p>
                  <p className="mt-1 text-[24px] font-extrabold"><span className="num">₪29.90</span></p>
                  <p className="text-[13px] text-white/70">בלי התחייבות</p>
                </div>
              </div>
              <p className="mt-4 text-[13px] text-white/70">מצטרפים מתוך האפליקציה. המינוי מתחדש אוטומטית ומבטלים מתי שרוצים בהגדרות האייפון.</p>
            </div>
          </div>
        </section>

        {/* 6 · FAQ */}
        <section id="faq" className="scroll-mt-20 bg-surface py-24">
          <div className="mx-auto max-w-[760px] px-4 sm:px-6">
            <h2 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[44px]">שאלות</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-bold">
                    {q}
                    <span className="text-[24px] font-light text-muted transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-[16px] leading-[1.7] text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · Close */}
        <section className="mx-auto max-w-[1160px] px-4 py-24 text-center sm:px-6">
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[48px]">
            הרילס הבא שתשמרו
            <span className="block font-light">כבר יהיה מתכון.</span>
          </h2>
          <div className="mt-8 flex justify-center"><StoreButton /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
