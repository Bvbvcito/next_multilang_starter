import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Kerozene - Welcome",
  description: "...",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1
        className=" text-7xl font-bold text-transparent 
                     bg-gradient-to-b from-red-500
                     to-red-400 bg-clip-text p-3"
      >
        {t("title")}
      </h1>
      <div className="inline-flex p-3 font-bold bg-orange-500 text-white">
        {" "}
        <Link href="/about">{t("about")}</Link>
      </div>
    </>
  );
}
