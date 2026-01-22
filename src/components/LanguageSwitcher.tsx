"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale, scroll: false });
    };

    return (
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 mr-4 backdrop-blur-md">
            <button
                onClick={() => switchLanguage("tr")}
                className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300",
                    locale === "tr"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
            >
                TR
            </button>
            <button
                onClick={() => switchLanguage("en")}
                className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300",
                    locale === "en"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
            >
                EN
            </button>
        </div>
    );
};
