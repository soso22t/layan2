import rImg from "@/assets/r.png";
import { useEffect, useState } from "react";
import { MapPin, QrCode, Baby, Camera, Clock, CalendarDays } from "lucide-react";
import invitationImg from "@/assets/Rp.mp4";
import Envelope from "@/components/Envelope";
import gaim from "@/assets/gaim.svg";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import MusicToggle from "@/components/MusicToggle";
import newImage from "@/assets/IMG_8303.jpeg";
import starSvg from "@/assets/countdown-star.svg";
import { useLang } from "@/i18n/LanguageContext";

// رابط خرائط جوجل المحدث خارج المكون لتفادي أخطاء الـ JSX
const LOCATION_MAP_URL = "https://maps.app.goo.gl/hspRLJu1faqbabkw6?g_st=ic";

// مكون السهم الزخرفي المخصص
const ScrollArrowIcon = () => (
  <svg
    width="32"
    height="36"
    viewBox="0 0 32 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
  >
    <path
      d="M8 6C12 11 20 11 24 6"
      stroke="#E5D7D4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 12C12 17 20 17 24 12"
      stroke="#E5D7D4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 14V26"
      stroke="#E5D7D4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 24C12 28 20 28 24 24L16 34L8 24Z"
      fill="#E5D7D4"
    />
  </svg>
);

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const { t, lang, toggle } = useLang();

  // إخفاء السهم عند السحب لأسفل
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="overflow-x-hidden w-full"
      style={{
        background: "#330512",
        minHeight: "100vh",
      }}
    >
      <MusicToggle active={opened} />
      <Envelope onOpen={() => setOpened(true)} />

      <div
        className="fixed inset-0 z-0"
        style={{
          background: "#330512",
          pointerEvents: "none",
        }}
      />

      {opened && (
        <main
          className="relative z-10 animate-fadeIn"
          style={{
            animation: "fadeIn 0.8s ease forwards",
          }}
        >
          {/* Language Toggle Button */}
          <div className="fixed top-5 right-5 z-[9999]">
            <button
              onClick={toggle}
              className="px-5 h-8 rounded-full text-sm transition-all"
              style={{
                background: "#330512",
                border: "1px solid #E5D7D4",
                color: "#E5D7D4",
              }}
            >
              {lang === "ar" ? (
                <span className="font-kahand">العربية</span>
              ) : (
                <span className="font-amoshref">ENGLISH</span>
              )}
            </button>
          </div>

          {/* Section 1: Video and Main Card */}
          <section className="flex justify-center relative z-20">
            <div className="relative w-full aspect-[9/16] overflow-hidden">
              <video
                src={invitationImg}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover animate-videoFade"
                style={{
                  background: "#330512",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "rgba(0,0,0,0.08)",
                }}
              />

              <div
                dir="ltr"
                className="absolute inset-0 flex items-center justify-center px-5 py-6"
              >
                <div className="translate-y-16 scale-60">
                  <div
                    className="flex flex-col items-center text-center px-5 py-6 rounded-2xl w-[98%] sm:w-[92%] gap-4 text-reveal"
                    style={{
                      background: "transparent",
                      backdropFilter: "none",
                      WebkitBackdropFilter: "none",
                      color: "#E5D7D4",
                      textShadow:
                        "0 1px 2px hsla(0,0%,0%,0.6), 0 0 10px hsla(0,0%,100%,0.35)",
                    }}
                  >
                    <div className="translate-y-3 flex flex-col items-center w-full">
                      {/* الأسطر العلويّة (تمت مباعدة الأسطر الثلاثة الأولى ورفع الكتلة لأعلى) */}
                      <div
                        className="flex flex-col items-center gap-2.5 relative z-10 w-full -translate-y-3"
                        dir={lang === "ar" ? "rtl" : "ltr"}
                      >
                        <div
                          className={`${
                            lang === "ar" ? "font-neirizi" : "font-amoshref"
                          } text-sm sm:text-base whitespace-nowrap`}
                        >
                          {t("invite_to")}
                        </div>

                        <div
                          className={`${
                            lang === "ar" ? "font-neirizi" : "font-amoshref"
                          } text-sm sm:text-base whitespace-nowrap`}
                        >
                          {t("invite_join")}
                        </div>

                        <div
                          className={`${
                            lang === "ar" ? "font-neirizi" : "font-amoshref"
                          } text-sm sm:text-base whitespace-nowrap`}
                        >
                          {t("invite_day")}
                        </div>

                        <div
                          className={`${
                            lang === "ar" ? "font-neirizi" : "font-amoshref"
                          } text-sm sm:text-base whitespace-nowrap`}
                        >
                          {t("invite_with_love")}
                        </div>

                        {/* سطر الدعوة (تم رفعه قليلاً) */}
                        <div
                          className={`${
                            lang === "ar" ? "font-neirizi" : "font-amoshref"
                          } text-sm sm:text-base -mt-1 mb-2 whitespace-nowrap`}
                        >
                          {t("invite_attend")}
                        </div>
                      </div>

                      {/* أسماء العرسان */}
                      <div className="w-full my-2 py-0 h-12 flex items-center justify-center relative z-20">
                        <div
                          className={`${
                            lang === "ar"
                              ? "font-iran text-[3.5rem] sm:text-[4.2rem] translate-y-2"
                              : "font-whitney text-2xl sm:text-3xl translate-y-7"
                          } tracking-wide leading-none text-center flex items-baseline justify-center gap-3 transition-transform duration-200`}
                          style={{ lineHeight: 0.85 }}
                          dir={lang === "ar" ? "rtl" : "ltr"}
                        >
                          <span className="inline-flex items-center">
                            {t("bride_name")}
                          </span>

                          {/* إخفاء & فقط بدون حذف */}
                          <span
                            className={`${
                              lang === "ar"
                                ? "font-sull text-4xl sm:text-5xl"
                                : "font-whitney text-xl sm:text-2xl"
                            } opacity-80 px-1 inline-flex items-center self-center hidden`}
                            style={{
                              transform:
                                lang === "ar"
                                  ? "translateY(24px)"
                                  : "translateY(0px)",
                            }}
                          >
                            {t("and")}
                          </span>

                          {/* إخفاء اسم العريس فقط بدون حذف */}
                          <span className="inline-flex items-center hidden">
                            {t("groom_name")}
                          </span>
                        </div>
                      </div>

                      {/* التاريخ والسَطر الجديد المضاف تحت التاريخ الحالي */}
                      <div
                        className="mt-6 pt-2 flex flex-col items-center gap-1 relative z-10 w-full"
                        dir={lang === "ar" ? "rtl" : "ltr"}
                      >
                        <div
                          className={`${
                            lang === "ar" ? "font-neirizi" : "font-amoshref"
                          } text-sm sm:text-base`}
                        >
                          {t("invite_god_willing")}
                        </div>

                        <div
                          className={`${
                            lang === "ar" ? "font-amoshref" : "font-amoshref"
                          } text-sm sm:text-base`}
                        >
                          {t("date_line")}
                        </div>

                        {/* التاريخ الثاني المضاف */}
                        <div
                          className={`${
                            lang === "ar" ? "font-amoshref" : "font-amoshref"
                          } text-sm sm:text-base opacity-90`}
                        >
                          {t("date_line_hijri" as any)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 z-30 pointer-events-none ${
                  showScrollArrow ? "opacity-100 animate-bounce" : "opacity-0"
                }`}
              >
                <ScrollArrowIcon />
              </div>
            </div>
          </section>

          {/* Section 2: Countdown */}
          <section className="px-4 py-16">
            <Reveal>
              <h2
                className={`${
                  lang === "ar" ? "font-neirizi" : "font-whitney"
                } text-center text-3xl mb-2`}
                style={{ color: "#E5D7D4" }}
              >
                {t("countdown_title")}
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <Countdown />
            </Reveal>
          </section>

          {/* Section 3: Timeline & Details */}
          <section className="px-4 py-12">
            <Reveal>
              <div className="text-center mb-8">
                <h2
                  className={`${
                    lang === "ar" ? "font-neirizi" : "font-whitney"
                  } text-3xl mb-2`}
                  style={{ color: "#E5D7D4" }}
                >
                  {t("big_word")}
                </h2>
              </div>
            </Reveal>

            {/* حركة ظهور مربع Timeline */}
            <Reveal delay={100}>
              <div
                className="mx-auto rounded-xl p-4 w-[calc(4*68px+3*12px)]"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(229,215,212,0.65)",
                  boxShadow: "0 0 10px rgba(229,215,212,0.08)",
                }}
              >
                <Timeline />
              </div>
            </Reveal>

            {/* حركة ظهور الصورة وسط الصفحة */}
            <Reveal delay={150}>
              <div
                className="mx-auto mt-12 rounded-xl overflow-hidden w-[calc(4*68px+3*12px)] h-[220px]"
                style={{
                  border: "1px solid rgba(229,215,212,0.65)",
                  boxShadow: "0 0 10px rgba(229,215,212,0.08)",
                }}
              >
                <img
                  src={newImage}
                  alt=""
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </Reveal>

            {/* حركة ظهور مربع التفاصيل السفلية مع النجوم */}
            <Reveal delay={200}>
              <div
                className="relative mx-auto mt-12 rounded-xl w-[calc(4*68px+3*12px)] p-6"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(229,215,212,0.65)",
                  boxShadow: "0 0 10px rgba(229,215,212,0.08)",
                }}
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                {/* النجوم للزينة */}
                <img
                  src={starSvg}
                  alt=""
                  className="absolute top-5 right-2 w-5 h-5 pointer-events-none opacity-90"
                />

                <img
                  src={starSvg}
                  alt=""
                  className="absolute top-16 left-6 w-5 h-5 pointer-events-none opacity-90"
                />

                <img
                  src={starSvg}
                  alt=""
                  className="absolute bottom-10 left-12 w-5 h-5 pointer-events-none opacity-90"
                />

                {/* القاعة */}
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="w-5 h-5" style={{ color: "#E5D7D4" }} />
                  <span
                    className={`${
                      lang === "ar" ? "font-neirizi" : "font-amoshref"
                    } text-sm`}
                    style={{ color: "#E5D7D4" }}
                  >
                    {t("event_location")}
                  </span>
                </div>

                {/* وقت الحضور - مخفي فقط بدون حذف */}
                <div className="hidden">
                  <div className="flex items-center gap-3 mb-5">
                    <Clock
                      className="w-5 h-5"
                      style={{ color: "#E5D7D4" }}
                    />
                    <span
                      className={`${
                        lang === "ar" ? "font-neirizi" : "font-amoshref"
                      } text-sm`}
                      style={{ color: "#E5D7D4" }}
                    >
                      {t("arrival_time")}
                    </span>
                  </div>
                </div>

                {/* التاريخ */}
                <div className="flex items-center gap-3 mb-6">
                  <CalendarDays
                    className="w-5 h-5"
                    style={{ color: "#E5D7D4" }}
                  />
                  <span
                    className={`${
                      lang === "ar" ? "font-neirizi" : "font-amoshref"
                    } text-sm`}
                    style={{ color: "#E5D7D4" }}
                  >
                    {t("event_date")}
                  </span>
                </div>

                {/* الخط الفاصل - مخفي فقط بدون حذف */}
                <div className="hidden">
                  <div
                    className="mx-auto mb-6"
                    style={{
                      width: "90%",
                      height: "1px",
                      background: "rgba(229,215,212,0.65)",
                    }}
                  />
                </div>

                {/* يمنع الأطفال - مخفي هنا فقط، سينقل للمربع الأول */}
                <div className="hidden">
                  <div className="flex items-center gap-3 mb-5">
                    <Baby
                      className="w-5 h-5"
                      style={{ color: "#E5D7D4" }}
                    />
                    <span
                      className={`${
                        lang === "ar" ? "font-neirizi" : "font-amoshref"
                      } text-sm`}
                      style={{ color: "#E5D7D4" }}
                    >
                      {t("no_kids")}
                    </span>
                  </div>
                </div>

                {/* يمنع التصوير - مخفي هنا فقط، سينقل للمربع الأول */}
                <div className="hidden">
                  <div className="flex items-center gap-3 mb-5">
                    <Camera
                      className="w-5 h-5"
                      style={{ color: "#E5D7D4" }}
                    />
                    <span
                      className={`${
                        lang === "ar" ? "font-neirizi" : "font-amoshref"
                      } text-sm`}
                      style={{ color: "#E5D7D4" }}
                    >
                      {t("no_cameras")}
                    </span>
                  </div>
                </div>

                {/* الدعوة شخصية - مخفية فقط بدون حذف */}
                <div className="hidden">
                  <div className="flex items-center gap-3">
                    <QrCode
                      className="w-5 h-5"
                      style={{ color: "#E5D7D4" }}
                    />
                    <span
                      className={`${
                        lang === "ar" ? "font-neirizi" : "font-amoshref"
                      } text-sm`}
                      style={{ color: "#E5D7D4" }}
                    >
                      {t("personal_invitation")}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* زر الموقع */}
            <Reveal delay={250}>
              <a
                href={LOCATION_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mx-auto mt-5 rounded-full flex items-center justify-center gap-2 ${
                  lang === "ar" ? "font-neirizi" : "font-whitney"
                } text-sm w-[calc(4*68px+3*12px)] active:scale-95 transition-transform duration-200 cursor-pointer block`}
                style={{
                  height: "48px",
                  background: "#E5D7D4",
                  color: "#330512",
                  textDecoration: "none",
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#330512" }} />
                <span>{t("location_button")}</span>
              </a>
            </Reveal>

            {/* حركة ظهور الصورة الأخيرة */}
            <Reveal delay={150}>
              <div
                className="mx-auto mt-20 rounded-xl overflow-hidden w-[calc(4*68px+3*12px)]"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(229,215,212,0.65)",
                  boxShadow: "0 0 10px rgba(229,215,212,0.08)",
                }}
              >
                <img src={rImg} alt="" className="w-full h-auto block" />
              </div>
            </Reveal>

            {/* حركة ظهور النص الختامي */}
            <Reveal delay={200}>
              <div className="mt-8 text-center">
                <h2
                  className={`${
                    lang === "ar" ? "font-whitney" : "font-whitney"
                  } text-xl mb-2 font-medium tracking-widest`}
                  style={{ color: "#E5D7D4" }}
                >
                  {t("section2_title")}
                </h2>

                <p
                  className={`${
                    lang === "ar" ? "font-whitney" : "font-whitney"
                  } text-sm`}
                  style={{ color: "#E5D7D4", opacity: 0.8 }}
                >
                  {t("section2_subtitle")}
                </p>
              </div>
            </Reveal>
          </section>

          {/* Footer */}
          <footer className="px-4 py-12 text-center">
            <Reveal>
              <a
                href="https://www.tiktok.com/@shim2t?_r=1&_t=ZS-95w0d8f7vnk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                style={{ color: "#E5D7D4" }}
              >
                <img
                  src={gaim}
                  alt=""
                  className="w-5 h-5"
                  style={{
                    filter: "brightness(0) saturate(100%) invert(95%)",
                  }}
                />
                غيمة
              </a>
            </Reveal>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
