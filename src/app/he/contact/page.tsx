import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "@/components/site";

export const metadata: Metadata = { title: "תמיכה ויצירת קשר", description: "עזרה עם Teavon: ייבוא, מנוי, מחיקת חשבון." };

export default function Contact() {
  return (
    <LegalPage title="תמיכה ויצירת קשר" updated="5 בנובמבר 2026">
      <p>כתבו לנו: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. אנחנו עונים בדרך כלל תוך יומיים־שלושה.</p>
      <section>
        <h2>ייבוא שלא עבד</h2>
        <p>שלחו לנו את הקישור לפוסט. פוסטים פרטיים או כאלה שאין בהם מתכון לא ניתן לייבא.</p>
      </section>
      <section>
        <h2>מנוי Teavon+</h2>
        <p>ניהול, ביטול והחזרים: בהגדרות האייפון ← Apple ID ← מינויים. כדי לשחזר מנוי במכשיר חדש: במסך Teavon+ ← שחזור רכישה.</p>
      </section>
      <section>
        <h2>מחיקת החשבון</h2>
        <p>באפליקציה: פרופיל ← מחיקת החשבון. הכול נמחק לצמיתות. פרטים ב<a href="/he/privacy">מדיניות הפרטיות</a>.</p>
      </section>
    </LegalPage>
  );
}
