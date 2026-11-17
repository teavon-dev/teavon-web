import type { Metadata } from "next";
import { Footer, Nav, StoreButton, SUPPORT_EMAIL } from "@/components/site";
import { HowSteps } from "@/components/how-to";

export const metadata: Metadata = {
  title: "איך זה עובד",
  description: "איך שומרים מתכון מרילס של אינסטגרם או טיקטוק ב־Teavon: שיתוף, בחירה ב־Teavon, והמתכון נשמר בעברית.",
};

const APPS: { name: string; steps: string }[] = [
  { name: "אינסטגרם", steps: "בריל או בפוסט: לוחצים על החץ (שליחה) ← שיתוף ← Teavon." },
  { name: "טיקטוק", steps: "בסרטון: לוחצים על החץ (שיתוף) ← עוד ← Teavon." },
  { name: "יוטיוב", steps: "מתחת לסרטון או ב־Shorts: שיתוף ← Teavon." },
  { name: "פייסבוק ואתרי מתכונים", steps: "שיתוף (או בספארי: כפתור השיתוף) ← Teavon." },
];

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto max-w-[1160px] px-4 pb-16 pt-10 sm:px-6">
          <h1 className="max-w-[18ch] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[60px]">
            איך שומרים מתכון
            <span className="block font-light">מרילס, בארבע לחיצות.</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[18px] leading-[1.6] text-muted">
            לא צריך להעתיק, לצלם מסך או לעצור את הסרטון. משתפים ל־Teavon, והמתכון נכתב בעברית עם המצרכים, הכמויות, השלבים וסימון הכשרות.
          </p>
          <HowSteps />
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto grid max-w-[1160px] gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-[28px] font-extrabold leading-tight sm:text-[34px]">בכל אפליקציה</h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {APPS.map((a) => (
                  <li key={a.name} className="py-4">
                    <p className="text-[18px] font-bold">{a.name}</p>
                    <p className="mt-1 text-[16px] leading-[1.6] text-muted">{a.steps}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-[24px] border border-line bg-bg p-6">
                <p className="text-[13px] font-bold text-accent-deep">טיפ</p>
                <h2 className="mt-1 text-[22px] font-extrabold">לא רואים את Teavon בשורת השיתוף?</h2>
                <ol className="mt-4 list-decimal space-y-2 ps-5 text-[16px] leading-[1.6] text-muted">
                  <li>גוללים את שורת האפליקציות עד הסוף ולוחצים על <b className="text-ink">עוד</b>.</li>
                  <li>לוחצים על <b className="text-ink">עריכה</b> ומפעילים את Teavon.</li>
                  <li>גוררים אותו למעלה, למועדפים. מעכשיו הוא יופיע ראשון.</li>
                </ol>
                <p className="mt-3 text-[14px] text-muted">ודאו שהאפליקציה מותקנת ונפתחה לפחות פעם אחת.</p>
              </div>
              <div className="rounded-[24px] border border-line bg-bg p-6">
                <p className="text-[13px] font-bold text-accent-deep">דרך נוספת</p>
                <h2 className="mt-1 text-[22px] font-extrabold">מעתיקים ומדביקים קישור</h2>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted">
                  בשיתוף בוחרים <b className="text-ink">העתקת קישור</b>. ב־Teavon, במסך הבית, לוחצים על <b className="text-ink">הדבקה</b>. זהו.
                </p>
              </div>
              <div className="rounded-[24px] border border-line bg-bg p-6">
                <p className="text-[13px] font-bold text-accent-deep">אחרי השיתוף</p>
                <h2 className="mt-1 text-[22px] font-extrabold">החלון נסגר? המתכון לא הולך לאיבוד.</h2>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted">
                  הייבוא ממשיך ברקע. בפעם הבאה שתפתחו את Teavon המתכון יחכה לכם, מוכן לשמירה במחברת.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-4 py-20 text-center sm:px-6">
          <h2 className="text-[30px] font-extrabold leading-tight sm:text-[40px]">עוד לא הורדתם?</h2>
          <p className="mt-2 text-[16px] text-muted">3 ייבואים בשבוע בחינם. לאייפון.</p>
          <div className="mt-6 flex justify-center"><StoreButton /></div>
          <p className="mt-8 text-[14px] text-muted">
            משהו לא עובד? כתבו לנו: <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-ink underline underline-offset-2"><span className="num">{SUPPORT_EMAIL}</span></a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
