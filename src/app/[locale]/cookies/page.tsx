import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export const metadata = {
    title: `${APP_NAME} - Çerez Politikası`,
    description: `${APP_NAME} çerez kullanımı ve yönetimi hakkında detaylı bilgi.`,
};

import { useTranslations } from "next-intl";

export default function CookiePolicyPage() {
    const t = useTranslations("CookiePolicy");
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight uppercase">{t("title")}</h1>
                    <p className="text-slate-400 mb-8">{t("lastUpdated")}</p>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <p>
                                {t.rich("intro", {
                                    appName: APP_NAME,
                                    bold: (chunks) => <span className="font-bold text-white">{chunks}</span>,
                                })}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.1.title")}</h2>
                            <p>{t("sections.1.content")}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.2.title")}</h2>
                            <p className="mb-4">{t("sections.2.content")}</p>
                            <ul className="space-y-6">
                                {[0, 1, 2, 3].map((i) => (
                                    <li key={i}>
                                        <span className="text-white font-bold block mb-1">
                                            {t(`sections.2.items.${i}.title`)}
                                        </span>
                                        {t(`sections.2.items.${i}.desc`)}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.3.title")}</h2>
                            <p className="mb-4">{t("sections.3.content")}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1].map((i) => (
                                    <li key={i}>
                                        {t.rich(`sections.3.items.${i}`, {
                                            bold: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                                        })}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 italic text-sm">
                                {t("sections.3.note", { appName: APP_NAME })}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.4.title")}</h2>
                            <p>
                                {t.rich("sections.4.content", {
                                    link: (chunks) => <a href="mailto:support@tenancyestate.com" className="text-primary hover:underline">{chunks}</a>,
                                    br: () => <br />,
                                })}
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
