import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";
type Dict = Record<string, string>;

const ar: Dict = {
  // Invitation
  tap_open: "اضغط لفتح الدعوة",
  invite_to: "لحظات الفرح أختارت من عمري موعداََ",
  invite_join: "إلى من هم أغلى من الــــــــــــروح",
  invite_day: "ســـــــروري سيبقا  مختلفاََ  بحضوركم",
  invite_with_love: " ",
  and: "&",
  invite_attend: "بكل حُب ووّد أدعوكم لحضور",
  bride_name: "حفل زفـافي",
  groom_name: "حفل زفـافي",
  invite_god_willing: "وذلك بمشيئة الله",
  date_line: "25 . 11 . 2026",
  date_line_hijri: "15 . 06 . 1448 هـ",

  // Countdown
  countdown_date: "حتى نلتقي في يومنا السعيد",
  countdown_title: "العد التنازلي",
  days: "أيام",
  hours: "ساعات",
  minutes: "دقائق",
  seconds: "ثواني",

  // Section Headers & Details
  big_word: "التفاصيل",
  small_word: "كل ما تحتاجون معرفته عن يومنا السعيد",
  location_button: "الموقع",
  event_location: "القاعة الكبرى",
  event_date: "الأربعاء 25 نوفمبر 2026",
  arrival_time: "8:00 مساءً",
  personal_invitation: "الدعوة شخصية",

  // Timeline / Program
  reception: "استقبال الضيوف",
  zaffa: "الزفة",
  dinner: "العشاء",

  // Restrictions
  no_cameras: "يمنع التصوير",
  no_kids: "إدارة القاعة تمنع اصطحاب الأطفال",

  // RSVP
  rsvp_title: "يشرفنا حضوركم",
  rsvp_sub: "نتشرف بحضوركم",
  rsvp_deadline: "نرجو الرد قبل الموعد المحدد",
  name_label: "الاسم الكريم",
  name_placeholder: "اكتب اسمك هنا",
  confirm: "تأكيد الحضور",
  decline: "الاعتذار",
  send: "إرسال",
  sending: "جارٍ الإرسال…",
  welcome: "أهلاً وسهلاً",
  thanks_attending: "شكراً لتأكيد حضورك",
  thanks_declined: "نقدّر اعتذارك",

  // QR & Footer
  qr_title: "باركود الدخول الخاص بك",
  save_qr: "حفظ الباركود",
  section2_title: "Abdulmalik | Layan",
  section2_subtitle: "25 . 11 . 2026",
  tiktok: "غيمة",
};

const en: Dict = {
  // Invitation
  tap_open: "Tap to Open the Invitation",
  invite_to: "Moments of joy have chosen a date in my life",
  invite_join: "To those who are dearer to us than our very souls",
  invite_day: "Our joy will be even more special with your presence",
  invite_with_love: " ",
  and: "&",
  invite_attend: "With love and joy, I invite you to attend",
  bride_name: "My Wedding Celebration",
  groom_name: "My Wedding Celebration",
  invite_god_willing: "By the will of Allah",
  date_line: "25 . 11 . 2026",
  date_line_hijri: "15 . 06 . 1448 AH",

  // Countdown
  countdown_date: "Until we meet on our joyful day",
  countdown_title: "Countdown",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",

  // Section Headers & Details
  big_word: "Details",
  small_word: "Everything you need to know about our special day",
  location_button: "Location",
  event_location: "Grand Hall",
  event_date: "Wednesday, November 25, 2026",
  arrival_time: "8:00 PM",
  personal_invitation: "Personal Invitation",

  // Timeline / Program
  reception: "Guest Reception",
  zaffa: "Wedding Procession",
  dinner: "Dinner",

  // Restrictions
  no_cameras: "Photography Is Not Permitted",
  no_kids: "The Hall Management Does Not Allow Children",

  // RSVP
  rsvp_title: "Your Presence Would Honor Us",
  rsvp_sub: "We Would Be Honored to Have You With Us",
  rsvp_deadline: "Please Respond Before the Specified Date",
  name_label: "Full Name",
  name_placeholder: "Enter Your Name Here",
  confirm: "Confirm Attendance",
  decline: "Decline the Invitation",
  send: "Send",
  sending: "Sending…",
  welcome: "Welcome",
  thanks_attending: "Thank You for Confirming Your Attendance",
  thanks_declined: "We Appreciate Your Response",

  // QR & Footer
  qr_title: "Your Personal Entry QR Code",
  save_qr: "Save QR Code",
  section2_title: "Abdulmalik | Layan",
  section2_subtitle: "25 . 11 . 2026",
  tiktok: "غيمة",
};

const dicts = { ar, en };

interface LangCtx {
  lang: Lang;
  t: (k: keyof typeof ar) => string;
  toggle: () => void;
  dir: "rtl" | "ltr";
}

const Ctx = createContext<LangCtx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;

    return saved === "en" || saved === "ar" ? saved : "ar";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (k: keyof typeof ar) => dicts[lang][k] ?? k;

  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <Ctx.Provider value={{ lang, t, toggle, dir }}>
      {children}
    </Ctx.Provider>
  );
};

export const useLang = () => {
  const c = useContext(Ctx);

  if (!c) {
    throw new Error("useLang must be inside LanguageProvider");
  }

  return c;
};
