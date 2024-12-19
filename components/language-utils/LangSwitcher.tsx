// components/LanguageSwitcher.tsx
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname(); // Gets the current path
  const searchParams = useSearchParams(); // Retrieves query parameters as a URLSearchParams object

  // Convert searchParams to a plain object
  const query = Object.fromEntries(searchParams.entries());

  // Strip the current locale from the pathname
  const strippedPathname = pathname.replace(
    new RegExp(`^/${currentLocale}`),
    ""
  );

  return (
    <div>
      {routing.locales?.map((locale) => (
        <Link
          key={locale}
          href={{
            pathname: `/${locale}${strippedPathname}`,
            query,
          }}
          passHref
        >
          <button className="text-blue-500" disabled={locale === currentLocale}>
            {locale.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}
