import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export const metadata = {
    title: `${APP_NAME} - KVKK Aydınlatma Metni`,
    description: `${APP_NAME} 6698 sayılı KVKK uyarınca kişisel verilerin işlenmesine ilişkin aydınlatma metni.`,
};

import { useTranslations } from "next-intl";

export default function KVKKPage() {
    const t = useTranslations("KVKKPage");
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight">{t("title")}</h1>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <p className="font-bold text-white mb-2">
                                {t.rich("intro", {
                                    appName: APP_NAME,
                                    bold: (chunks) => <span className="font-bold text-white">{chunks}</span>,
                                })}
                            </p>
                            <p>
                                {t("introContent", { appName: APP_NAME })}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.1.title")}</h2>
                            <p className="mb-4">{t("sections.1.content")}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1, 2, 3].map((i) => (
                                    <li key={i}>
                                        {t.rich(`sections.1.items.${i}`, {
                                            bold: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                                        })}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.2.title")}</h2>
                            <p className="mb-4">{t("sections.2.content")}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1, 2, 3].map((i) => (
                                    <li key={i}>{t(`sections.2.items.${i}`)}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.3.title")}</h2>
                            <p className="mb-4">{t("sections.3.content")}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1, 2].map((i) => (
                                    <li key={i}>
                                        {t.rich(`sections.3.items.${i}`, {
                                            bold: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                                        })}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.4.title")}</h2>
                            <p>
                                {t.rich("sections.4.content", {
                                    appName: APP_NAME,
                                })}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t("sections.5.title")}</h2>
                            <p className="mb-4">{t("sections.5.content")}</p>
                            <p>
                                {t.rich("sections.5.contact", {
                                    link: (chunks) => <a href="mailto:support@tenancyestate.com" className="text-primary hover:underline">{chunks}</a>,
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
