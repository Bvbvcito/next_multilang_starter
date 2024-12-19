import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Kerozene - Welcome",
  description: "...",
};

export default function About() {
  const t = useTranslations("About");
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
        <Link href="/">{t("back")}</Link>
      </div>
    </>
  );
}
