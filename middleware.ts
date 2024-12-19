import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match unprefixed paths (default locale) and prefixed paths (other locales)
    "/((?!_next|favicon.ico|.*\\..*).*)",
  ],
};
