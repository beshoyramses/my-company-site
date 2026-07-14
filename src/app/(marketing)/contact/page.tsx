"use client";

import { useLanguage } from "@/lib/i18n";
import { IconMail, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

const contactDetails = [
  {
    title: "Email",
    titleAr: "البريد الإلكتروني",
    value: "minanazer25@gmail.com",
    icon: IconMail,
  },
  {
    title: "phone",
    titleAr: "الهاتف",
    value: "+201281737377",
    icon: IconPhoneCall,
  },
  {
    title: "Visit",
    titleAr: "زرنا",
    value: "El Gouna, Red Sea, Egypt",
    icon: IconMapPin,
  },
];

export default function ContactPage() {
  const { isArabic } = useLanguage();

  return (
    <div className="section-shell pb-20 pt-32 sm:pt-36">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#06040c]/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-10">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.32em] text-violet-200">
          {isArabic ? "تواصل مع Sunny" : "Contact Sunny"}
        </p>
        <h1 className="mb-4 text-center font-display text-4xl font-semibold text-white sm:text-5xl">
          {isArabic ? (
            <>
              تواصل معنا في <span className="gradient-text">الجونة</span>
            </>
          ) : (
            <>
              Reach us in <span className="gradient-text">El Gouna</span>
            </>
          )}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-8 text-zinc-400">
          {isArabic
            ? "سواء كانت إقامة شاليه خاصة أو منزلًا مصقولًا أو انتقالًا مريحًا للمطار، فإن فريقنا جاهز لاستقبالك مع ضيافة سلسة وخالية من المتاعب."
            : "Whether it is a private chalet stay, a polished residence, or a seamless airport transfer, our team is ready to welcome you with effortless hospitality."}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">
                  <Icon size={18} />
                </div>
                <p className="mb-1 text-sm font-semibold text-white">
                  {isArabic ? item.titleAr : item.title}
                </p>
                <p className="text-sm text-zinc-400">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
